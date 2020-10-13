using System;
using System.Collections.Generic;
using System.Linq;
using DataApi.Core.Configuration;
using DataApi.Core.Domain;
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
            var usersInDb = db.Users.ToList();
            if (usersInDb.Count > 0)
            {
                var result = (from users in usersInDb
                                select new RegistredUsers() {UserLogin = users.LoginName}).ToList();
                return result;
            }
            return registredUsers;
        }


        [AllowAnonymous]
        [HttpPost]
        [Route("register")]

        public object RegisterUser (RegisterUser requestArticleModel)
        {
            var db = new EmailAppContext();

            var user = new DataApi.Core.Domain.User();
            
            user.LoginName = requestArticleModel.User;
            user.FirstName = requestArticleModel.FirstName;
            user.LastName = requestArticleModel.LastName;
            user.InternalPassword = requestArticleModel.Password;

            db.Users.Add(user);
            db.SaveChanges();
            return true;
        }
  
    }
}