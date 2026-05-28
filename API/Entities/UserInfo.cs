using System.Text.Json.Serialization;

namespace API.Entities
{
    public class UserInfo
    {
        [JsonIgnore]
        public int Id { get; set; }
        public required string NickName { get; set; }
        public required DateTime BirthDay { get; set; }
        public required string Gender { get; set; }
    }
}
