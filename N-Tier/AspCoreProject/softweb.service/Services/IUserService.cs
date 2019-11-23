
using System.Collections.Generic;
using softweb.persistence;
using Softweb.Models;

namespace softweb.service
{
    interface IUserService
    {
        List<UserDto> GetUsers();
        
    }
}
