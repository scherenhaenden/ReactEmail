using System;

namespace DataApi.Core.Domain
{
    public class TEntity
    {
        public int Id { get; set; }
        public DateTime Inserted { get; set; }
        public DateTime LastUpdate { get; set; }
    }
}