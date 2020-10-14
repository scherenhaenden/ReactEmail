using System.IO;
using System.Text.RegularExpressions;
using DataApi.Core.Domain;
using Microsoft.EntityFrameworkCore;

namespace DataApi.Core.Configuration
{
    public class EmailAppContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<EmailHostConfiguration> EmailHostConfiguration { get; set; }
        public DbSet<Email> Email { get; set; }
        public DbSet<EmailProtocolType> EmailProtocolType { get; set; }


        public EmailAppContext (DbContextOptions<EmailAppContext> options) : base(options)
        {
            this.Database.Migrate();
            
        }


        /* protected override void OnConfiguring(DbContextOptionsBuilder options)
          {
             /* var h = GetAExePath();
              Console.WriteLine("executing on");
              Console.WriteLine(h);
              options.UseSqlite($"Data Source={h}/EmailAppC.db");     * /       
          }    */           
        
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