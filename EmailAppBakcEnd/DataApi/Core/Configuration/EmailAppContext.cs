using System.IO;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using DataApi.Core.Domain;
using Microsoft.EntityFrameworkCore;

namespace DataApi.Core.Configuration
{
    public class EmailAppContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            var h = GetAExePath();
             
            options.UseSqlite($"Data Source={h}/EmailAppC.db");
        }
        
        public string GetAExePath()
        {
            var exePath =   Path.GetDirectoryName(System.Reflection
                .Assembly.GetExecutingAssembly().CodeBase);
            return exePath;

        }
        
        public string GetApplicationRoot()
        {
            var exePath =   Path.GetDirectoryName(System.Reflection
                .Assembly.GetExecutingAssembly().CodeBase);
            Regex appPathMatcher=new Regex(@"(?<!fil)[A-Za-z]:\\+[\S\s]*?(?=\\+bin)");
            var appRoot = appPathMatcher.Match(exePath).Value;
            return appRoot;
        }

    }
}