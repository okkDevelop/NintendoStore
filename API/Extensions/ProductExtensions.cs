using API.Entities;

namespace API.Extensions
{
    public static class ProductExtensions
    {
        public static IQueryable<Product> Sort(this IQueryable<Product> query, string? sortBy)
        {
            return query = sortBy switch
            {
                "price" => query.OrderBy(p => p.Price),
                "priceDesc" => query.OrderByDescending(p => p.Price),
                _ => query.OrderBy(n => n.Name)
            };
        }

        public static IQueryable<Product> Search(this IQueryable<Product> query, string? searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm))
                return query;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();
            return query.Where(n => n.Name.ToLower().Contains(lowerCaseSearchTerm));
        }

        public static IQueryable<Product> Filter(this IQueryable<Product> query, string? types)
        {
            var typesList = new List<string>();

            if(!string.IsNullOrEmpty(types))
                typesList.AddRange([.. types.ToLower().Split(",")]);

            query = query.Where(t => typesList.Count == 0 || typesList.Contains(t.Type.ToLower()));

            return query;
        }
    }
}
