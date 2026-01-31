using Microsoft.EntityFrameworkCore;
using SampleApp.Models.Auth;
using SampleApp.Models.Accounts;

namespace SampleApp.DBContext
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options) { }

        #region Database Tables

        public DbSet<Account> Accounts { get; set; }
        public DbSet<AccountType> AccountTypes { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        #endregion

        #region Convert Column names
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                // lowercase table name
                entity.SetTableName(entity.GetTableName()?.ToLower());

                foreach (var property in entity.GetProperties())
                {
                    // Convert PascalCase to snake_case
                    var name = property.Name;
                    var snakeCase = string.Concat(
                        name.Select((c, i) => i > 0 && char.IsUpper(c) ? "_" + char.ToLower(c) : char.ToLower(c).ToString())
                    );

                    property.SetColumnName(snakeCase);
                }
            }

            base.OnModelCreating(modelBuilder);
            // Configure AddedBy
            modelBuilder.Entity<AccountType>().HasOne(a => a.AddedByAccount).WithMany(u => u.AddedAccountTypes).HasForeignKey(a => a.AddedBy).OnDelete(DeleteBehavior.Restrict);

            // Configure RemovedBy
            modelBuilder.Entity<AccountType>().HasOne(a => a.RemovedByAccount).WithMany(u => u.RemovedAccountTypes).HasForeignKey(a => a.RemovedBy).OnDelete(DeleteBehavior.Restrict);
        }

        #endregion
    }
}