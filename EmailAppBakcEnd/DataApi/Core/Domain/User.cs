namespace DataApi.Core.Domain
{
    public class User: TEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string LoginName { get; set; }
        public string InternalPassword { get; set; }
    }

   
}