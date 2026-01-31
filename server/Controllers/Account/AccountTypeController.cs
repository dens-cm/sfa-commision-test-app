using Microsoft.AspNetCore.Mvc;
using SampleApp.DBContext;
using SampleApp.Models.Accounts;
using SampleApp.DTOs.Accounts;
using Microsoft.EntityFrameworkCore;

namespace SampleApp.Controllers
{
    [ApiController]
    [Route("account-type/")]
    public class AccountTypeController : ControllerBase
    {
        private readonly AppDBContext _db;

        public AccountTypeController(AppDBContext db)
        {
            _db = db;
        }

        [HttpPost("add-type")]
        public async Task<IActionResult> AddAccountType([FromBody] AddAccountTypeDTO dto)
        {
            var exist = await _db.AccountTypes.AnyAsync(a => a.Type.ToLower() == dto.Type.ToLower());
            if (exist)
                return BadRequest("This Account Type already exist.");

            var newAccountType = new AccountType
            {
                Type = dto.Type,
                AddedBy = dto.AddedBy,
                DateAdded = dto.DateAdded
            };

            _db.AccountTypes.Add(newAccountType);
            await _db.SaveChangesAsync();

            return Ok("Account Type Added Successfully!");
        }
    }
}