using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using System.Runtime.CompilerServices;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace API.Data
{
    public class DbInitializer
    {
        public static async Task InitDb(WebApplication app)
        {
            using var scope = app.Services.CreateScope();

            var context = scope.ServiceProvider.GetRequiredService<StoreContext>()
                ?? throw new InvalidOperationException("Failed to retrieve store context");

            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>()
                ?? throw new InvalidOperationException("Failed to retrieve user manager");

            await SeedData(context, userManager);
        }

        private static async Task SeedData(StoreContext context, UserManager<User> userManager)
        {
            context.Database.Migrate();

            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "member@gmail.com",
                    Email = "member@gmail.com"
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "admin@gmail.com",
                    Email = "admin@gmail.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, ["Member", "Admin"]);
            }

            if (!context.Products.Any())
            {
                var products = new List<Product>
                {
                    new Product
                    {
                        Name = "Nintendo Switch",
                        Description = "Nintendo Switch is a console that can transform to suit your situation. Play the way you want, anytime and anywhere.",
                        Price = 1600,
                        PictureUrl = "/images/products/nintendoSwitch.jpg",
                        Type = "Console",
                        QuantityInStock = 20
                    },
                    new Product
                    {
                        Name = "Nintendo Switch 2",
                        Description = "The next evolution of Nintendo Switch is here! Bring games to life with a larger 1080p screen – or connect to a TV and play in up to 4K resolution*.",
                        Price = 2100,
                        PictureUrl = "/images/products/nintendoSwitch2.jpg",
                        Type = "Console",
                        QuantityInStock = 50
                    },
                    new Product
                    {
                        Name = "Nintendo Switch Pro Controller",
                        Description = "A wireless controller with easy-to-hold grips to make gaming in TV Mode or Tabletop Mode more comfortable over longer periods.",
                        Price = 380,
                        PictureUrl = "/images/products/SwitchProController.jpg",
                        Type = "Acccessories",
                        QuantityInStock = 80
                    },
                    new Product
                    {
                        Name = "Nintendo Switch Joy-Con",
                        Description = "Joy-Con & controllers. Get in the game with this selection of Joy-Con™ controllers for the Nintendo Switch™ system.",
                        Price = 250,
                        PictureUrl = "/images/products/JoyCon.jpg",
                        Type = "Acccessories",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Pokémo Pokopia",
                        Description = "Play as a Ditto and build a new life with Pokémon—from the ground up! Rebuild a desolate world into a charming utopia, one step at a time.",
                        Price = 150,
                        PictureUrl = "/images/products/Pokopia.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Resident Evil Requiem",
                        Description = "A new era of survival horror arrives with latest and most immersive entry yet in the iconic Resident Evil series.",
                        Price = 150,
                        PictureUrl = "/images/products/ResidentEvilRequiem.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Pokémon Winds",
                        Description = "These new titles feature an open world to explore, with beautiful windswept islands and a vast ocean with glittering waves that ebb and flow.",
                        Price = 150,
                        PictureUrl = "/images/products/PokémonWinds.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Yoshi and the Mysterious Book",
                        Description = "Play as Yoshi and help a mysterious talking book named Mr. E remember the creatures living within his pages. Open him up, explore colorful habitats, and experiment with each creature to learn all kinds of surprising findings across every page.",
                        Price = 150,
                        PictureUrl = "/images/products/YoshiandtheMysteriousBook.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Xenoblade Chronicles X",
                        Description = "An open-world RPG containing not only the updated story elements and other additions from the Definitive Edition.",
                        Price = 150,
                        PictureUrl = "/images/products/XenobladeChroniclesX.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Hyrule Warriors: Age of Imprisonment",
                        Description = "Battle hordes of enemies in the untold story of the Imprisoning War! Experience the complete, true story of Demon King Ganondorf’s invasion that was briefly shown in the Legend of Zelda™: Tears of the Kingdom game.",
                        Price = 150,
                        PictureUrl = "/images/products/HyruleWarriorsAgeofImprisonment.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Donkey Kong Bananza",
                        Description = "With DK’s brute force and Pauline’s special singing abilities, you can crash through walls, carve tunnels with your fists, punch straight down into the ground, and even tear off chunks of terrain to swing around and throw in groundbreaking exploration. The more you smash, the more areas open up to explore.",
                        Price = 150,
                        PictureUrl = "/images/products/DonkeyKongBananza.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "The Legend of Zelda: Tears of the Kingdom",
                        Description = "In this sequel to the Legend of Zelda: Breath of the Wild game, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s abilities to fight back against the malevolent forces that threaten the kingdom?",
                        Price = 150,
                        PictureUrl = "/images/products/TheLegendofZeldaTearsoftheKingdom.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Kirby Air Riders",
                        Description = "Pick your rider, pick your machine, and mount up for competition! Take on your rivals in frantic arena battles or fast-paced races on the ground and in the air. Use the Boost Charge button to brake and control your turns as your machine automatically fights for top speed. Fill your Boost Charge Gauge as you drift around the bend and release it to trigger an explosive dash!",
                        Price = 150,
                        PictureUrl = "/images/products/KirbyAirRiders.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Metroid Prime 4: Beyond",
                        Description = "One of the greatest bounty hunters in the galaxy. Capable of completing any mission—no matter the danger.",
                        Price = 150,
                        PictureUrl = "/images/products/MetroidPrime4Beyond.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Mario Tennis Fever",
                        Description = "Mix and match 30 different Fever Rackets with 38 playable characters, the most in series history, to find a strategy that works for you.\r\n\r\n",
                        Price = 150,
                        PictureUrl = "/images/products/MarioTennisFever.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Animal Crossing",
                        Description = "Live life at your own pace as you explore your island. Spend time gardening, fishing, decorating, hunting for bugs and fossils, and getting to know the animal residents.",
                        Price = 150,
                        PictureUrl = "/images/products/AnimalCrossing.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Pokémon Legends: Z-A",
                        Description = "Whether you’re a die-hard Pokémon fan or about to toss your first Poké Ball, the Pokémon Legends: Z-A game has plenty to offer for Trainers of all types. Experience classic gameplay with modern twists that are sure to revolutionize your Pokémon RPG experience.",
                        Price = 150,
                        PictureUrl = "/images/products/PokémonLegendsZA.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    },
                    new Product
                    {
                        Name = "Pikmin 4",
                        Description = "Meet Pikmin: small, plantlike creatures with distinct abilities that you can grow, pluck, guide, and overpower enemies with! Use your Pikmin’s miniature might (and a bit of strategy) to explore this mysterious planet in search of your crew—and treasure.",
                        Price = 150,
                        PictureUrl = "/images/products/Pikmin4.jpg",
                        Type = "Games",
                        QuantityInStock = 100
                    }
                };

                context.Products.AddRange(products);
            }

            if (!context.News.Any()) 
            {
                var news = new List<News>
                { 
                    new News(
                            "Nintendo Direct unveils new games and updates for Nintendo Switch 2 and Nintendo Switch including The Legend of Zelda: Ocarina of Time, KINGDOM HEARTS IV, Xenoblade Genesis and more\r\n",
                            //^^Title
                            "The latest Nintendo Direct put the spotlight on anticipated games and updated titles coming to the Nintendo Switch 2 and Nintendo Switch systems – as well as some new reveals." +
                            "\r\n\r\n" +
                            "The presentation revealed [The Legend of Zelda: Ocarina of Time](/style/red), the return of the critically acclaimed Nintendo 64 classic for a new generation, reborn for Nintendo Switch 2! " +
                            "Also revealed during the presentation was the return of Disney and Square Enix’s storied action RPG series with [KINGDOM HEARTS IV](/style/gray), " +
                            "a new beginning for the Xenoblade series with [Xenoblade Genesis](/style/red), the sun-soaked action of [Nintendo Switch Sports Resort](/style/red)," +
                            " the announcement of an upcoming free update and paid DLC for Pokémon Pokopia, the next chapter in the fun and heartfelt adventure [DELTARUNE](/style/gray)," +
                            " a closed network test for FromSoftware’s multiplayer action game [The Duskbloods](/style/red)," +
                            " and a limited-time in-game challenge event happening across [Donkey Kong Bananza](/style/red) and classic Donkey Kong titles available with [Nintendo Switch Online](/style/red)!" +
                            "\r\n\r\n" +
                            "Here’s more information about upcoming games highlighted in the presentation. For purchase, pre-order and additional game details, please visit Nintendo Store or Nintendo eShop:" +
                            "\r\n\r\n" +
                            "-The Legend of Zelda: Ocarina of Time: The Nintendo 64 classic returns for a new generation in 2026, reborn exclusively for Nintendo Switch 2!" +
                            "\r\n\r\n" +
                            "-KINGDOM HEARTS IV: A new installment in the action role-playing series developed and published by Square Enix, " +
                            "KINGDOM HEARTS IV gives fans a look at some of the characters that protagonist Sora will meet in the mysterious city of Quadratum. Sora will once again journey to realms," +
                            " where new figures cross his path and new powers awaken his next chapter. KINGDOM HEARTS IV will be available at launch on Nintendo Switch 2.",
                            //^^Content
                            "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/ncom/en_US/articles/2026/nintendo-direct-6-9-26/ND_THL_PromoAsset_NewsArticle_1920x1080",
                            //^^Images
                            NewsType.Events,
                            //^^Types
                            new DateTime(2026, 6, 9)
                            //^^Date
                        ),
                        new News(
                            "Celebrate summer with Flower Crown Decor Pikmin and new features!",

                            "#Celebrate summer with the Midsommar Festival#" +
                            "\r\n\r\n" +
                            "Step into the season with the Midsommar Festival event, running from June 1 through June 30!" +
                            "Inspired by Northern European summer traditions, this event lets you meet Flower Crown Decor Pikmin through event challenges.Complete missions to earn rewards like seedlings, petals, and event items.Take on Mysterious Mushrooms for special rewards during the event!" +
                            "On weekends—including an extended final weekend—Giant Mysterious Mushrooms will appear, offering even greater rewards when tackled with friends." +
                            "It’s the perfect time to enjoy longer days, go for a walk, and grow your Pikmin collection with seasonal flair.",

                            "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/ncom/en_US/articles/2026/mobile-news-celebrate-summer-with-flower-crown-decor-pikmin-and-new-features/Pikmin_Bloom_-_June_2026_Events_-_Hero_Image",

                            NewsType.Events,

                            new DateTime(2026, 6, 5)
                        )
                };

                context.News.AddRange(news);
            }

            context.SaveChanges();
        }
    }
}
