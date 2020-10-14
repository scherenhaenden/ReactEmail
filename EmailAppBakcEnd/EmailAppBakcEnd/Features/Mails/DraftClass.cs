using MailKit;
using MailKit.Net.Imap;
using MailKit.Security;

namespace EmailAppBakcEnd.Features.Mails
{
    public class DraftClass
    {


        public void LoginMaill(string user, string password, string server, int port)
        {
            using (var client = new ImapClient(new ProtocolLogger("imap.log")))
            {
                try
                {
                    client.Connect(server, port , true);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");                    
                    client.Authenticate(user, password);

                    var folders = client.PersonalNamespaces;
                    
                    var personal = client.GetFolder (client.PersonalNamespaces[0]);

                    var valued = personal.ParentFolder;

                    var all =personal.GetSubfolders();

                    foreach (var folder in personal.GetSubfolders())
                    {
                        folder.Open(FolderAccess.ReadWrite);
                        var items = folder.Fetch (0, -1, MessageSummaryItems.UniqueId | MessageSummaryItems.Size | MessageSummaryItems.Flags);

                        if (items.Count>100 && folder.Name.ToLower() != "inbox" && folder.Name.ToLower() != "dice"&& folder.Name.ToLower() != "sent"&& folder.Name.ToLower() != "pop")
                        {
                            

                            foreach (var item in items)
                            {

                                var valu = item.UniqueId;
                                if (valu != null)
                                {
                                    folder.MoveTo(valu, client.Inbox);
                                }
                                
                            }
                            
                        
                        }

                    
                        var name = folder.Name;
                    }




                    /*   var inbox = client.Inbox;
                       inbox.Open(FolderAccess.ReadWrite);
   
                       if (inbox.Count > 0)
                       {
                           var range = Enumerable.Range(0, inbox.Count).ToArray();
                           inbox.AddFlags(range, MessageFlags.Deleted, false);
                           inbox.Expunge();
                       }*/
                    client.Disconnect(true);
                }
                catch (AuthenticationException e)
                {
                    
                }
            }
        }
    }
}