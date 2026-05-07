using API.DTOs;
using API.Entities;

namespace API.Extensions
{
    public static class CartExtensions
    {
        public static CartDto ToDto(this Cart cart) 
        {
            return new CartDto
            {
                CartId = cart.CartId,
                Items = cart.Items.Select(c => new CartItemDto
                {
                    ProductId = c.ProductId,
                    Name = c.Product.Name,
                    Price = c.Product.Price,
                    PictureUrl = c.Product.PictureUrl,
                    Type = c.Product.Type,
                    Quantity = c.Quantity
                }).ToList()
            };
        }
    }
}
