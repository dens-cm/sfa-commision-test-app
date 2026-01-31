using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace _.Migrations
{
    /// <inheritdoc />
    public partial class AddedNewColumnsToAccountsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateOnly>(
                name: "user_type_date_updated",
                table: "accounts",
                type: "date",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "user_type_updated_by",
                table: "accounts",
                type: "bigint",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "user_type_date_updated",
                table: "accounts");

            migrationBuilder.DropColumn(
                name: "user_type_updated_by",
                table: "accounts");
        }
    }
}
