using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Email { get; set; } = string.Empty;
        public required string Password { get; set; }
        [Required]
        public string NickName { get; set; } = string.Empty;
        [Required]
        public DateTime BirthDay = DateTime.Now;
        [Required]
        public string Gender { get; set; } = string.Empty;
    }
}
