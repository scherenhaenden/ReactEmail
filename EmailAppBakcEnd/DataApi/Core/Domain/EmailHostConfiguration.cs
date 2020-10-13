namespace DataApi.Core.Domain
{
    public class EmailHostConfiguration: TEntity
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public bool SSL { get; set; }
    }
}