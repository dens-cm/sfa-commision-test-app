using Microsoft.AspNetCore.Mvc;
using SampleApp.DBContext;
using SampleApp.DTOs.Accounts;
using SampleApp.Models.Auth;

namespace SampleApp.Controllers
{
    [ApiController]
    [Route("account/")]
    public class AccountController : ControllerBase
    {
        private readonly AppDBContext _db;

        public AccountController(AppDBContext db)
        {
            _db = db;
        }

        [HttpGet("status")]
        [TypeFilter(typeof(AuthMiddleware))]
        public IActionResult GetStatus()
        {
            var account = HttpContext.Items["Account"] as Account;
            return Ok(new AccountStatusDTO
            {
                Authenticated = true,
                Approved = account?.IsApproved ?? false,
                Email = account?.Email,
                UserType = account?.UserType
            });
        }
    }
}