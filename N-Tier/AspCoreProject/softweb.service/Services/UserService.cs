
using System;
using System.Collections.Generic;
using System.Linq;
using softweb.persistence;
using Softweb.Models;

namespace softweb.service
{
    public class UserService : IUserService
    {
        private UserDao userDao;

        public UserService()
        {
            userDao = new UserDao();
        }

        public UserService(UserDao mockContext)
        {
            userDao = mockContext;
        }



        public List<UserDto> GetUsers()
        {
            List<UserDto> result = userDao.Users.Select(u => new UserDto(u.Id, u.firstName, u.lastName)).ToList();
            return result;
        }
    }
}
