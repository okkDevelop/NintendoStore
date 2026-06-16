using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController(StoreContext context) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts([FromQuery]ProductParams productparams) 
        {
            var query = context.Products
                .Sort(productparams.SortBy)
                .Search(productparams.SearchTerm)
                .Filter(productparams.Types)
                .AsQueryable();

            var products = await PagedList<Product>.ToPagedList(query, productparams.LoadedIndex);

            Response.AddPaginationHeader(products.Metadata);

            return products;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await context.Products.FindAsync(id);

            if (product == null)
                return NotFound();

            return product;
        }

        [HttpGet("filters")]
        public async Task<ActionResult<Product>> GetFilters()
        {
            var types = await context.Products
                .Select(p => p.Type)
                .Distinct()
                .ToListAsync();

            return Ok(new {types});
        }

        [HttpPost("addProduct")]
        public async Task<ActionResult<Product>> AddProduct([FromForm] ProductDto newProductDto, IFormFile file) 
        {
            //var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", "products");
            var uploadsFolder = @"C:\Users\zheng\SE_Project\NintendoStore\client\public\images\products";

            //var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
            //var filePath = Path.Combine(uploadsFolder, fileName);

            var originalName = Path.GetFileNameWithoutExtension(file.FileName);

            var fileName = originalName + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var newProduct = new Product
            {
                Name = newProductDto.Name,
                Description = newProductDto.Description,
                Price = newProductDto.Price,
                PictureUrl = $"/images/products/{fileName}",
                Type = newProductDto.Type,
                QuantityInStock = newProductDto.QuantityInStock <= 0 ? 0 : newProductDto.QuantityInStock
            };

            context.Products.Add(newProduct);

            var result = await context.SaveChangesAsync() > 0;

            if (!result)
                return BadRequest(new ProblemDetails 
                { 
                    Title = "Problem adding product" 
                });

            return CreatedAtAction(nameof(GetProduct), new { id = newProduct.Id }, newProduct);
        }

        [HttpPatch("updateProduct")]
        public async Task<ActionResult<Product>> UpdateProduct(ProductDto productDto)
        {
            var product = await context.Products
                    .FirstOrDefaultAsync(p => p.Name == productDto.Name);

            if (product == null)
                return NotFound($"Product with name '{productDto.Name}' not found.");

            product.Description = productDto.Description;
            product.Price = productDto.Price;
            product.Type = productDto.Type;
            product.QuantityInStock = productDto.QuantityInStock;

            await context.SaveChangesAsync();

            return Ok(product);
        }

        [HttpDelete("removeProduct")]
        public async Task<ActionResult<Product>> RemoveProduct(string productName) 
        {
            var product = await context.Products
                    .FirstOrDefaultAsync(p => p.Name == productName);

            if (product == null)
                return NotFound($"Product with name '{productName}' not found.");

            context.Products.Remove(product);

            await context.SaveChangesAsync();

            return Ok($"Product '{productName}' removed successfully.");
        }
    }
}
