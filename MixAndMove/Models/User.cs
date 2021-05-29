using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public DateTime UserCreatedDate { get; set; }
        public string FirebaseUid { get; set; }
        public string DisplayName { get; set; }
        public string ProfilePicture { get; set; }
        public string EmailAddress { get; set; }
        public bool Active { get; set; }
    }
}
