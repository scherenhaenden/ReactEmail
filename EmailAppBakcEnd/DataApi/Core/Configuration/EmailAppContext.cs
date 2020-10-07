using DataApi.Core.Domain;
using Microsoft.EntityFrameworkCore;

namespace DataApi.Core.Configuration
{
    public class EmailAppContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=blogging.db");
    }
}