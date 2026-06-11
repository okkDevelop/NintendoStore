using API.DTOs;

namespace API.Entities
{
    public class Cart
    {
        public int Id { get; set; }
        public required string CartId { get; set; }
        public List<CartItem> Items { get; set; } = [];
        public string? ClientSecret { get; set; }
        public string? PaymentIntentId { get; set; }

        public void AddItem(Product product, int quantity)
        {
            if (product == null)
                ArgumentNullException.ThrowIfNull(product);

            if (quantity <= 0)
                throw new ArgumentException("Quantity not valid", nameof(quantity));

            var itemInCart = FindItem(product.Id);

            if (itemInCart == null)
                Items.Add(new CartItem
                {
                    Product = product,
                    Quantity = quantity
                });
            else
                itemInCart.Quantity += quantity;
        }

        public void RemoveItem(int productId, int quantity)
        {
            if (quantity <= 0)
                throw new ArgumentException("Quantity not valid", nameof(quantity));

            var itemInCart = FindItem(productId);

            if (itemInCart == null)
                return;
            
            itemInCart.Quantity -= quantity;

            if (itemInCart.Quantity <= 0)
                Items.Remove(itemInCart);
        }

        public void RemoveCart()
        {
            Items.Clear();

            ClientSecret = null;
            PaymentIntentId = null;
        }

        private CartItem? FindItem(int productId) 
        {
            return Items.FirstOrDefault(i => i.ProductId == productId);
        }
    }
}
