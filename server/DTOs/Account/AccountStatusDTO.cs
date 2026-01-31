namespace SampleApp.DTOs.Accounts
{
    public class AccountStatusDTO
    {
        public bool Authenticated { get; set; }
        public bool Approved { get; set; }
        public string? Email { get; set; }
        public int? UserType { get; set; }
    }
}