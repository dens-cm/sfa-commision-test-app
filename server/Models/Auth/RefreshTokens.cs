using System.ComponentModel.DataAnnotations.Schema;
using SampleApp.Models.Auth;

namespace SampleApp.Models.Auth
{
    [Table("refresh_tokens")]
    public class RefreshToken
    {
        public int Id { get; set; }
        public required string Token { get; set; }
        public required DateTime ExpiresAt { get; set; }
        public bool IsRevoked { get; set; } = false;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        // Foreign Key
        public int AccountId { get; set; }
        
        [ForeignKey("AccountId")]
        public Account Account { get; set; } = null!;
    }
}