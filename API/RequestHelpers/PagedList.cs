using Microsoft.EntityFrameworkCore;

namespace API.RequestHelpers
{
    public class PagedList<T> : List<T>
    {
        private const int MAXSIZEPERLOAD = 9;
        public PaginationMetadata Metadata { get; set; }

        public PagedList(List<T> items, int loadedIndex) 
        {
            Metadata = new PaginationMetadata
            {
                CurrentLoadedIndex = loadedIndex
            };
            AddRange(items);
        }

        public static async Task<PagedList<T>> ToPagedList(IQueryable<T> query, int loadedIndex)
        {
            var items = await query.Skip(loadedIndex * MAXSIZEPERLOAD).Take(MAXSIZEPERLOAD).ToListAsync();

            return new PagedList<T>(items, loadedIndex);
        }
    }
}
