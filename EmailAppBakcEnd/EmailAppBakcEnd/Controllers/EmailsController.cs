using System;
using System.Collections.Generic;
using System.Linq;
using DataApi.Core.Configuration;
using EmailAppBakcEnd.ApiModels;
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
        [HttpGet]
        [Route("init")]

        public object init ()
        {
            
            List<RegistredUsers> registredUsers = new List<RegistredUsers>();
            
            var db = new EmailAppContext();
            var h= db.Users.ToList().Count();

            if (h > 0)
            {
                
            }
            return registredUsers;
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