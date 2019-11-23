using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace softweb.persistence
{
    [Table("user")]
    public class User
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("FirstName")]
        public string firstName { get; set; }

        [Column("LastName")]
        public string lastName { get; set; }
        
        public User(){ }

        public User(int id, string firstName,string lastName)
        {
            this.Id = id;
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    public class UserDao : DbContext
    {
        public virtual DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (optionsBuilder.IsConfigured)
            {
                base.OnConfiguring(optionsBuilder);
                optionsBuilder.UseMySql(@"User Id=root;password= ;Host=localhost;Database=usersmanagement;");
            }
        }
    }

   
}
