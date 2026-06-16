using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class ProductDto
    {
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public string Description { get; set; } = string.Empty;
        [Required]
        [Range(0, double.MaxValue)]
        public long Price { get; set; } = 0;
        //[Required]
        public string? PictureUrl { get; set; } = string.Empty;
        [Required]
        public string Type { get; set; } = string.Empty;
        [Required]
        public int QuantityInStock { get; set; } = 0;
    }
}
