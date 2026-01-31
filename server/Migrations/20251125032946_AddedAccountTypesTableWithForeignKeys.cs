using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace _.Migrations
{
    /// <inheritdoc />
    public partial class AddedAccountTypesTableWithForeignKeys : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "account_types",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    added_by = table.Column<int>(type: "int", nullable: false),
                    date_added = table.Column<DateOnly>(type: "date", nullable: false),
                    is_removed = table.Column<bool>(type: "bit", nullable: false),
                    removed_by = table.Column<int>(type: "int", nullable: false),
                    date_removed = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_account_types", x => x.id);
                    table.ForeignKey(
                        name: "FK_account_types_accounts_added_by",
                        column: x => x.added_by,
                        principalTable: "accounts",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_account_types_accounts_removed_by",
                        column: x => x.removed_by,
                        principalTable: "accounts",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_accounts_user_type",
                table: "accounts",
                column: "user_type");

            migrationBuilder.CreateIndex(
                name: "IX_account_types_added_by",
                table: "account_types",
                column: "added_by");

            migrationBuilder.CreateIndex(
                name: "IX_account_types_removed_by",
                table: "account_types",
                column: "removed_by");

            migrationBuilder.AddForeignKey(
                name: "FK_accounts_account_types_user_type",
                table: "accounts",
                column: "user_type",
                principalTable: "account_types",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_accounts_account_types_user_type",
                table: "accounts");

            migrationBuilder.DropTable(
                name: "account_types");

            migrationBuilder.DropIndex(
                name: "IX_accounts_user_type",
                table: "accounts");
        }
    }
}
