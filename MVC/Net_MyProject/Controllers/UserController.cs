using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private UserDataAccess userDataAccess = new UserDataAccess();

        [HttpGet]
        public ActionResult<List<User>> GetUsers()
        {
            return userDataAccess.Users.OrderBy(u => u.Id).ToList();
        }

        [HttpPost]
        public void PostUser([FromBody] User newUser)
        {
            userDataAccess.Users.Add(newUser);
            userDataAccess.SaveChanges();
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetUserByID(int id)
        {
            return userDataAccess.Users.FirstOrDefault(u => u.Id == id);
        }

        
        [HttpGet("{id}")]
        public void DelUserByID(int id)
        {
            var user = userDataAccess.Users.Find(id);
            userDataAccess.Users.Remove(user);
            userDataAccess.SaveChanges();
        }

        [HttpPost]
        public void UpdateUser([FromBody] User newUser)
        {
            userDataAccess.Users.Update(newUser);
            userDataAccess.SaveChanges();
        }
        
    }
}
