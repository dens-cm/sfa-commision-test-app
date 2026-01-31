using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SampleApp.DBContext;

public class AuthMiddleware : IActionFilter
{
    private readonly AppDBContext _db;

    public AuthMiddleware(AppDBContext db)
    {
        _db = db;
    }

    public void OnActionExecuting(ActionExecutingContext context)
    {
        var userId = context.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userId) || !int.TryParse(userId, out var accountId))
        {
            context.Result = new JsonResult(new { authenticated = false }) { StatusCode = 401 };
            return;
        }

        var account = _db.Accounts.Find(accountId);
        if (account == null || !account.IsApproved)
        {
            context.Result = new JsonResult(new { authenticated = true, approved = false, email = account?.Email, usertype = account?.UserType }) { StatusCode = 200 };
            return;
        }

        context.HttpContext.Items["Account"] = account;
    }

    public void OnActionExecuted(ActionExecutedContext context) { }
}
