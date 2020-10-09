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
        
        
        
        // First method. 
        // get if anyone is registered in the app yet
        [AllowAnonymous]
        [HttpPost]
        [Route("init")]

        public object init ()
        {        
            return "";
        }

        
        
        
        [AllowAnonymous]
        [HttpPost]
        [Route("logmein")]

        public object GetArticleByUrl (dynamic requestArticleModel)
        {        
            return "";
        }
        
  
    }
}