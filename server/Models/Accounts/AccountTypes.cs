using System.ComponentModel.DataAnnotations.Schema;
using SampleApp.Models.Auth;

namespace SampleApp.Models.Accounts
{
    [Table("account_types")]
    public class AccountType
    {
        public int Id { get; set; }
        public required string Type { get; set; }
        public int? AddedBy { get; set; }
        public DateOnly? DateAdded { get; set; }
        public bool? IsRemoved { get; set; }
        public int? RemovedBy { get; set; }
        public DateOnly? DateRemoved { get; set; }

        #region  Foreign Keys

        [ForeignKey("AddedBy")]
        public Account? AddedByAccount { get; set; } = null!;

        [ForeignKey("RemovedBy")]
        public Account? RemovedByAccount { get; set; } = null!;

        #endregion
    }
}