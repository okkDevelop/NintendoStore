using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
    {
        public required DbSet<Product> Products { get; set; }
        public required DbSet<Cart> Carts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<IdentityRole>().HasData(
                new IdentityRole {Id = "938f46ff-39d9-4ebe-a767-508f014ecd54", ConcurrencyStamp = "Member", Name = "Member", NormalizedName = "MEMBER" },
                new IdentityRole {Id = "e83e9f03-86d4-416c-aaf3-c32569b8e46e", ConcurrencyStamp = "Admin", Name = "Admin", NormalizedName = "ADMIN" }
            );
        }
    }
}
