using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Text.RegularExpressions;

namespace API.Entities
{
    public enum NewsType 
    { 
        GameNews,
        Events,
        Promotions,
        NintendoSwitchOnline,
        AskTheDeveloper
    }

    public class News
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public required string Title { get; set; }
        public string Slug { get; set; }
        public required string Content { get; set; }
        public required string PictureUrl { get; set; }
        public required NewsType NewsType { get; set; }
        public required DateTime PublishedTime { get; set; }

        [SetsRequiredMembers]
        public News(string title, string content, string pictureUrl, NewsType newsType, DateTime publishedTime)
        {
            Title = title;
            Slug = GenerateSlug(title);
            Content = content;
            PictureUrl = pictureUrl;
            NewsType = newsType;
            PublishedTime = publishedTime;
        }

        private static string GenerateSlug(string title)
        {
            if (string.IsNullOrEmpty(title)) 
                return string.Empty;

            string slug = title.Trim().ToLower();

            slug = Regex.Replace(slug, @"[^a-z0-9 -]", "");

            slug = Regex.Replace(slug, @"\s+", "-");

            return slug;
        }
    }
}
