using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CartController(StoreContext context) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<CartDto>> GetCart() 
        {
            var cart = await RetrieveCart();

            return cart != null ? cart.ToDto() : NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<CartDto>> AddItemToCart(int productId, int quantity) 
        {
            var cart = await RetrieveCart();
            cart ??= CreateCart();

            var product = await context.Products.FindAsync(productId);

            if (product == null)
                return BadRequest("Problem adding item to cart");

            cart.AddItem(product, quantity);

            var result = await context.SaveChangesAsync() > 0;

            if(result)
                return CreatedAtAction(nameof(GetCart), cart.ToDto());

            return BadRequest("Problem updating basket");
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveItemToCart(int productId, int quantity)
        {
            var cart = await RetrieveCart();

            if (cart == null)
                return BadRequest("etrieve getting the cart");

            cart.RemoveItem(productId, quantity);

            var result = await context.SaveChangesAsync() > 0;

            return result ? 
                CreatedAtAction(nameof(GetCart), cart.ToDto()): 
                BadRequest("Problem updating basket");
        }

        private Cart CreateCart() 
        {
            var cartId = Guid.NewGuid().ToString();

            var cookiesOptions = new CookieOptions
            {
                IsEssential = true,
                Expires = DateTime.UtcNow.AddDays(30)
            };

            Response.Cookies.Append("cartId", cartId, cookiesOptions);

            var cart = new Cart { CartId = cartId };
            context.Carts.Add(cart);

            return cart;
        }

        private async Task<Cart?> RetrieveCart() 
        {
            return await context.Carts
                .Include(i => i.Items)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(c => c.CartId == Request.Cookies["cartId"]);
        }
    }
}
