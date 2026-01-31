using Microsoft.AspNetCore.Mvc;
using SampleApp.DBContext;
using SampleApp.Models.Auth;
using SampleApp.DTOs.Auth;
using SampleApp.Services.Auth;
using Microsoft.EntityFrameworkCore;

namespace SampleApp.Controllers
{
    [ApiController]
    [Route("auth/")]
    public class AuthController : ControllerBase
    {
        private readonly AppDBContext _db;
        private readonly JWTService _jwt;

        public AuthController(AppDBContext db, JWTService jwt)
        {
            _db = db;
            _jwt = jwt;
        }

        private string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }

        private bool VerifyPassword(string password, string hashedPassword)
        {
            try
            {
                return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
            }
            catch (BCrypt.Net.SaltParseException)
            {
                return false;
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDTO dto)
        {
            var exists = await _db.Accounts.AnyAsync(x => x.Email == dto.Email);
            if (exists)
                return BadRequest(new { message = "This email is already associated to an existing account." });

            var hashPassword = HashPassword(dto.Password);
            var newAccount = new Account
            {
                Email = dto.Email,
                Password = hashPassword,
                IsApproved = false,
                UserType = 3,
                DateCreated = DateTime.Now,
            };

            _db.Accounts.Add(newAccount);
            await _db.SaveChangesAsync();

            // Login User after registration
            var accessToken = _jwt.GenerateAccessToken(newAccount);
            var refreshToken = _jwt.GenerateRefreshToken();

            // Save refresh token
            var rt = new RefreshToken
            {
                Token = refreshToken,
                AccountId = newAccount.Id,
                ExpiresAt = DateTime.UtcNow.AddDays(3)
            };

            _db.RefreshTokens.Add(rt);
            await _db.SaveChangesAsync();

            Response.Cookies.Append("refreshToken", refreshToken, new CookieOptions { HttpOnly = true, Secure = true, SameSite = SameSiteMode.None, Expires = DateTimeOffset.UtcNow.AddDays(3) });
            return Ok(new { message = "registered successfully!", accessToken });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO dto)
        {
            // Review Credentials
            var account = await _db.Accounts.FirstOrDefaultAsync(x => x.Email == dto.Email);
            if (account == null)
                return BadRequest(new { message = "Invalid Credentials." });

            if (!VerifyPassword(dto.Password, account.Password))
                return BadRequest(new { message = "Invalid Credentials." });

            // Generate Tokens
            var accessToken = _jwt.GenerateAccessToken(account);
            var refreshToken = _jwt.GenerateRefreshToken();

            // Clean refreshTokens
            var expiredTokens = _db.RefreshTokens.Where(rt => rt.ExpiresAt < DateTime.UtcNow);
            _db.RefreshTokens.RemoveRange(expiredTokens);

            // Store Refresh Token
            var newRefreshToken = new RefreshToken
            {
                Token = refreshToken,
                AccountId = account.Id,
                ExpiresAt = DateTime.UtcNow.AddDays(3)
            };

            _db.RefreshTokens.Add(newRefreshToken);
            await _db.SaveChangesAsync();

            Response.Cookies.Append("refreshToken", refreshToken, new CookieOptions { HttpOnly = true, Secure = true, SameSite = SameSiteMode.None, Expires = DateTimeOffset.UtcNow.AddDays(3) });
            return Ok(new { message = "Logged in Successfully!", accessToken });
        }

        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh()
        {
            if (!Request.Cookies.TryGetValue("refreshToken", out var refreshToken))
                return Unauthorized(new { message = "Unauthorized" });

            var tokenRecord = await _db.RefreshTokens.FirstOrDefaultAsync(rt => rt.Token == refreshToken);
            if (tokenRecord == null || tokenRecord.ExpiresAt < DateTime.UtcNow)
                return Unauthorized(new { message = "Session Expired" });

            var account = await _db.Accounts.FirstOrDefaultAsync(a => a.Id == tokenRecord.AccountId);
            if (account == null)
                return Unauthorized(new { message = "Invalid account." });

            var newAccessToken = _jwt.GenerateAccessToken(account);
            return Ok(new { accessToken = newAccessToken });
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            if (Request.Cookies.TryGetValue("refreshToken", out var refreshToken))
            {
                var token = await _db.RefreshTokens.FirstOrDefaultAsync(x => x.Token == refreshToken);
                if (token != null)
                {
                    _db.RefreshTokens.Remove(token);
                    await _db.SaveChangesAsync();
                }

                // Delete the cookie on client
                Response.Cookies.Delete("refreshToken", new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.None
                });
            }

            return Ok(new { message = "Log out Successfully!" });
        }
    }
}