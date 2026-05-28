using API.Data;
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
    }
}
