using Microsoft.AspNetCore.Mvc;
using SampleApp.DBContext;

namespace SampleApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestConnectionController : ControllerBase
    {
        private readonly AppDBContext _db;

        public TestConnectionController(AppDBContext db)
        {
            _db = db;
        }

        [HttpGet("ping")]
        public IActionResult Ping()
        {
            try
            {
                if (_db.Database.CanConnect())
                    return Ok("Database connection successful!");
                else
                    return StatusCode(500, "Database connection failed (CanConnect returned false)");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"ERROR: {ex.Message}");
            }
        }
    }
}