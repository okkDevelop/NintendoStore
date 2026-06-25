using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace API.Controllers
{
    public class NewsController(StoreContext context) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<News>>> GetNewsList()
        {
            var query = context.News.AsQueryable();

            var news = await query.ToListAsync();

            return news;
        }

        [HttpGet("{slug}")]
        public async Task<ActionResult<News>> GetNews(string slug)
        {
            var news = await context.News.FirstOrDefaultAsync(x => x.Slug == slug);

            if (news == null)
                return NotFound();

            return news;
        }

        [HttpPost("addNews")]
        public async Task<ActionResult<News>> AddNews(NewsDto newNewsDto)
        {
            var newNews = new News(
                    newNewsDto.Title,
                    newNewsDto.Content,
                    newNewsDto.PictureUrl,
                    newNewsDto.NewsType,
                    newNewsDto.PublishedTime
                );

            context.News.Add(newNews);

            var result = await context.SaveChangesAsync() > 0;

            if (!result)
                return BadRequest(new ProblemDetails
                {
                    Title = "Problem adding news"
                });

            return CreatedAtAction(nameof(GetNews), new { slug = newNews.Slug }, newNews);
        }

        [HttpPatch("updateNews")]
        public async Task<ActionResult<News>> UpdateNews(NewsDto newNewsDto)
        {
            string slug = newNewsDto.Title.Trim().ToLower();
            slug = Regex.Replace(slug, @"[^a-z0-9 -]", "");
            slug = Regex.Replace(slug, @"\s+", "-");

            var news = await context.News
                    .FirstOrDefaultAsync(p => p.Slug == slug);

            if (news == null)
                return NotFound($"Product with name '{newNewsDto.Title}' not found.");

            news.Title = newNewsDto.Title;
            news.Slug = slug;
            news.PictureUrl = newNewsDto.PictureUrl;
            news.NewsType = newNewsDto.NewsType;
            news.PublishedTime = newNewsDto.PublishedTime;


            await context.SaveChangesAsync();

            return Ok(news);
        }

        [HttpDelete("removeNews")]
        public async Task<ActionResult<News>> RemoveNews(string slug)
        {
            var news = await context.News
                    .FirstOrDefaultAsync(n => n.Slug == slug);

            if (news == null)
                return NotFound($"News with name '{news}' not found.");

            context.News.Remove(news);

            await context.SaveChangesAsync();

            return Ok($"News '{news}' removed successfully.");
        }
    }
}
