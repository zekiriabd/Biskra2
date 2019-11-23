using System.ComponentModel.DataAnnotations.Schema;

namespace Softweb.Models
{
    public class UserDto
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        public UserDto() { }
        public UserDto(int id, string firstname, string lastname)
        {
            this.Id = id;
            this.FirstName = firstname;
            this.LastName = lastname;
        }

    }
}
