using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Softweb.Models;
using softweb.service;

namespace Softweb.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private UserService userService = new UserService();

        [HttpGet]
        public ActionResult<List<UserDto>> GetUsers()
        {
            return userService.GetUsers();
        }

        [HttpPost]
        public void PostUser([FromBody] UserDto newUser)
        {
            userService.PostUser(newUser);
        }

        [HttpGet("{id}")]
        public ActionResult<UserDto> GetUserByID(int id)
        {
            return userService.GetUserByID(id);
        }
        
        [HttpGet("{id}")]
        public void DelUserByID(int id)
        {
            userService.DelUserByID(id);
        }

        [HttpPost]
        public void UpdateUser([FromBody] UserDto newUser)
        {
            userService.UpdateUser(newUser);
        }
        
    }
}
