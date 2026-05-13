using API.DTOs;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class CartExtensions
    {
        public static CartDto ToDto(this Cart cart) 
        {
            return new CartDto
            {
                CartId = cart.CartId,
                ClientSecret = cart.ClientSecret,
                PaymentIntentId = cart.PaymentIntentId,
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

        public static async Task<Cart> GetCartWithItems(this IQueryable<Cart> query, string? cartId) 
        {
            return await query
                .Include(i => i.Items)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(c => c.CartId == cartId) ?? throw new Exception("cannot get cart");
        }
    }
}
