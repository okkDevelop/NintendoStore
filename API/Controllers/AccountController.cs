using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController(SignInManager<User> signInManager) : BaseApiController
    {
        [HttpPost("register")]
        public async Task<ActionResult> RegisterUser(RegisterDto registerDto)
        {
            var user = new User
            {
                UserName = registerDto.Email,
                Email = registerDto.Email,
                UserInfo = new UserInfo { 
                    NickName = registerDto.NickName,
                    BirthDay = registerDto.BirthDay,
                    Gender = registerDto.Gender
                }
            };

            var result = await signInManager.UserManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return ValidationProblem();
            }

            await signInManager.UserManager.AddToRoleAsync(user, "Member");

            return Ok();
        }

        [HttpGet("user-info")]
        public async Task<ActionResult> GetUserInfo()
        {
            if (User.Identity?.IsAuthenticated == false)
                return NoContent();

            var user = await signInManager.UserManager.GetUserAsync(User);

            if (user == null)
                return Unauthorized();

            var roles = await signInManager.UserManager.GetRolesAsync(user);

            return Ok(new
            {
                user.Email,
                user.UserName,
                Roles = roles
            });
        }

        [Authorize]
        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            await signInManager.SignOutAsync();

            return NoContent();
        }

        //[HttpPost("address")]
        //public async Task<ActionResult> CreateOrUpdateUserAddress(Address address)
        //{
        //    var user = await signInManager.UserManager.Users
        //        .Include(a => a.Address)
        //        .FirstOrDefaultAsync(u => u.UserName == User.Identity!.Name);

        //    if (user == null)
        //        return Unauthorized();

        //    user.Address = address;

        //    var result = await signInManager.UserManager.UpdateAsync(user);

        //    if (!result.Succeeded)
        //        return BadRequest("Problem updating user address");

        //    return Ok(user.Address);
        //}

        //[Authorize]
        //[HttpGet("address")]
        //public async Task<ActionResult<Address>> GetUserAddress()
        //{
        //    var address = await signInManager.UserManager.Users
        //        .Where(u => u.UserName == User.Identity!.Name)
        //        .Select(u => u.Address)
        //        .FirstOrDefaultAsync();

        //    if (address == null)
        //        return NoContent();

        //    return address;
        //}
    }
}
