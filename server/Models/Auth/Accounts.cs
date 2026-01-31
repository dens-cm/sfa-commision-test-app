using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using SampleApp.Models.Accounts;

namespace SampleApp.Models.Auth
{
    [Table("accounts")]
    public class Account
    {
        public int Id { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required bool IsApproved { get; set; }
        public required int UserType { get; set; }
        public long? UserTypeUpdatedBy { get; set; }
        public DateTime? UserTypeDateUpdated { get; set; }
        public DateTime DateCreated { get; set; }

        #region Foreign Keys

        [ForeignKey("UserType")]
        public AccountType? AccountType { get; set; } = null!;

        #endregion

        // Navigation for added/removed AccountTypes
        public ICollection<AccountType> AddedAccountTypes { get; set; } = new List<AccountType>();
        public ICollection<AccountType> RemovedAccountTypes { get; set; } = new List<AccountType>();
    }
}