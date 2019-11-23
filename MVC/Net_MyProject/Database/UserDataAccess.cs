using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using WebApi.Models;

public class UserDataAccess : DbContext {

    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
        base.OnConfiguring(optionsBuilder);
        optionsBuilder.UseMySql(@"User Id=root;password= ;Host=localhost;Database=usersmanagement;");
    }
 }
