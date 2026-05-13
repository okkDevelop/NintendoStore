using API.Entities;
using Stripe;

namespace API.Services
{
    public class PaymentService(IConfiguration configuration)
    {
        public async Task<PaymentIntent> CreateOrUpdatePaymentIntent(Cart cart) 
        {
            StripeConfiguration.ApiKey = configuration["StripeSettings:SecretKey"];

            var service = new PaymentIntentService();
            var intent = new PaymentIntent();
            var subtotal = cart.Items.Sum(x => x.Quantity * x.Product.Price);

            var amountInSen = (long)(subtotal * 100);

            if (string.IsNullOrEmpty(cart.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = amountInSen,
                    Currency = "MYR",
                    PaymentMethodTypes = ["card"]
                };

                intent = await service.CreateAsync(options);
            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = amountInSen
                };

                await service.UpdateAsync(cart.PaymentIntentId, options);
            }

            return intent;
        }
    }
}
