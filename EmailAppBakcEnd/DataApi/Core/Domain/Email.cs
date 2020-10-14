namespace DataApi.Core.Domain
{
    public class Email: TEntity
    {
        public string EmailAddress { get; set; }
        public string EncryptedPassword { get; set; }
    }
}