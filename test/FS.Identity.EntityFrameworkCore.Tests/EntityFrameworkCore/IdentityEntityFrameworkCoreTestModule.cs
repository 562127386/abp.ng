﻿using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Identity.EntityFrameworkCore
{
    [DependsOn(
        typeof(IdentityTestBaseModule),
        typeof(IdentityEntityFrameworkCoreModule)
        )]
    public class IdentityEntityFrameworkCoreTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var sqliteConnection = CreateDatabaseAndGetConnection();

            Configure<AbpDbContextOptions>(options =>
            {
                options.Configure(abpDbContextConfigurationContext =>
                {
                    abpDbContextConfigurationContext.DbContextOptions.UseSqlite(sqliteConnection);
                });
            });
        }
        
        private static SqliteConnection CreateDatabaseAndGetConnection()
        {
            var connection = new SqliteConnection("Data Source=:memory:");
            connection.Open();

            new IdentityMigrationsDbContext(
                new DbContextOptionsBuilder<IdentityMigrationsDbContext>().UseSqlite(connection).Options
            ).GetService<IRelationalDatabaseCreator>().CreateTables();
            
            return connection;
        }
    }
}
