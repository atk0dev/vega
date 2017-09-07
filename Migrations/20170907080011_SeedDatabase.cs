using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace vega.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("insert into Makes (Name) values ('Make 1')");
            migrationBuilder.Sql("insert into Makes (Name) values ('Make 2')");
            migrationBuilder.Sql("insert into Makes (Name) values ('Make 3')");

            migrationBuilder.Sql("insert into Models (Name, MakeId) values ('Make 1 Model A', (select Id from Makes where Name='Make 1'))");
            migrationBuilder.Sql("insert into Models (Name, MakeId) values ('Make 1 Model B', (select Id from Makes where Name='Make 1'))");
            migrationBuilder.Sql("insert into Models (Name, MakeId) values ('Make 1 Model C', (select Id from Makes where Name='Make 1'))");

            migrationBuilder.Sql("insert into Models (Name, MakeId) values ('Make 2 Model A', (select Id from Makes where Name='Make 2'))");
            migrationBuilder.Sql("insert into Models (Name, MakeId) values ('Make 2 Model B', (select Id from Makes where Name='Make 2'))");
            migrationBuilder.Sql("insert into Models (Name, MakeId) values ('Make 2 Model C', (select Id from Makes where Name='Make 2'))");

            migrationBuilder.Sql("insert into Models (Name, MakeId) values ('Make 3 Model A', (select Id from Makes where Name='Make 3'))");
            migrationBuilder.Sql("insert into Models (Name, MakeId) values ('Make 3 Model B', (select Id from Makes where Name='Make 3'))");
            migrationBuilder.Sql("insert into Models (Name, MakeId) values ('Make 3 Model C', (select Id from Makes where Name='Make 3'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("delete from Models");
            migrationBuilder.Sql("delete from Makes where name in ('Make 1', 'Make 2', 'Make 3')");
        }
    }
}
