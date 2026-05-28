using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class User :IdentityUser
    {
        //public int? AddressId { get; set; }
        //public Address? Address { get; set; }
        public int? UserInfoId { get; set; }
        public UserInfo? UserInfo {  get; set; }
    }
}
