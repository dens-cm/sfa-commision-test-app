namespace SampleApp.DTOs.Accounts
{
    public class AddAccountTypeDTO
    {
        public required string Type { get; set; }
        public int? AddedBy { get; set; }
        public DateOnly? DateAdded { get; set; }
    }
}