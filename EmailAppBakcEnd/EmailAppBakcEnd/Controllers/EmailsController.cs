using System;
using EmailAppBakcEnd.Features.Mails;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;


namespace EmailAppBakcEnd.Controllers
{
    [ApiController]
    [Route("apipublic/[controller]")]
    public class EmailsController : ControllerBase
    {
        public EmailsController(/*IOptions<AppSettings> appSettings, IJwtManager jwtManager*/)
        {
           /* _jwtManager = jwtManager;
            _appSettings = appSettings.Value;*/
        }
        
        
        [AllowAnonymous]
        [HttpPost]
        [Route("logmein")]

        public object GetArticleByUrl (dynamic requestArticleModel)
        {
            new DraftClass().LoginMaill("edward_sergio_flores@hotmail.com", "Calcuta45$%", "Outlook.office365.com", 993);
            return "";


        }
        
  
    }
}