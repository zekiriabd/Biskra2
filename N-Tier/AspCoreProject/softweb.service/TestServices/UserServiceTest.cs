using Microsoft.EntityFrameworkCore;
using Moq;
using softweb.persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace softweb.service.TestServices
{
    public class UserServiceTest
    {


        [Fact]
        public void getUsersTest()
        {
            var data = new List<User> { new User { firstName = "ZEKIRI" } }.AsQueryable();
            var mockSet = GetMockDbSet<User>(data);
            var mockContext = new Mock<UserDao>();
            mockContext.Setup(c => c.Users).Returns(mockSet.Object);
            var userService = new UserService(mockContext.Object);
            var result = userService.GetUsers();
            Assert.True(result.Count == 1);
            Assert.Equal("ZEKIRI", result[0].FirstName);
        }
        
        private Mock<DbSet<User>> GetMockDbSet<T>(IQueryable<T> data)
        {
            var mockSet = new Mock<DbSet<User>>();
            mockSet.As<IQueryable<T>>().Setup(m => m.Provider).Returns(data.Provider);
            mockSet.As<IQueryable<T>>().Setup(m => m.Expression).Returns(data.Expression);
            mockSet.As<IQueryable<T>>().Setup(m => m.ElementType).Returns(data.ElementType);
            mockSet.As<IQueryable<T>>().Setup(m => m.GetEnumerator()).Returns(data.GetEnumerator());
            return mockSet;
        }
    }
}
