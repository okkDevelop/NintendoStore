using API.RequestHelpers;
using Microsoft.Net.Http.Headers;
using System.Text.Json;

namespace API.Extensions
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, PaginationMetadata metadata)
        {
            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };

            response.Headers.Add("Pagination", JsonSerializer.Serialize(metadata, options));
            response.Headers.Add(HeaderNames.AccessControlExposeHeaders, "Pagination");
        }
    }
}
