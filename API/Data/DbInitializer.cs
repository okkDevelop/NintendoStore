using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DbInitializer
    {
        public static void InitDb(WebApplication app)
        {
            using var scope = app.Services.CreateScope();

            var context = scope.ServiceProvider.GetRequiredService<StoreContext>()
                ?? throw new InvalidOperationException("Failed to retrieve store context");

            SeedData(context);
        }

        private static void SeedData(StoreContext context)
        {
            context.Database.Migrate();

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

            context.SaveChanges();
        }
    }
}
