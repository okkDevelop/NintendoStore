using API.Entities;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class NewsDto
    {
        [Required]
        public string Title { get; set; } = string.Empty;
        [Required]
        public string Content { get; set; } = string.Empty;
        [Required]
        public string PictureUrl { get; set; } = string.Empty;
        [Required]
        public NewsType NewsType { get; set; }
        [Required]
        public DateTime PublishedTime { get; set; }
    }
}
