using _1_Domain;
using _3_Application.Interfaces.Security;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace _4_Infrastructure.Security
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IAuthTokenGenerator _tokenGenerator;

        public AuthService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IAuthTokenGenerator tokenGenerator)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenGenerator = tokenGenerator;
        }

        public async Task<string> LoginAsync(string username, string password)
        {
            var user = await _userManager.FindByNameAsync(username);

            if (user == null) return null;

            var loginResult = await _signInManager.CheckPasswordSignInAsync(user, password, false);

            if (!loginResult.Succeeded) return null;

            return _tokenGenerator.CreateToken(user);
        }

        public async Task<ApplicationUser> RegisterAsync(string username, string email)
        {
            var newUser = new ApplicationUser { UserName = username, Email = email };

            var createResult = await _userManager.CreateAsync(newUser, "P@ssword1");

            return createResult.Succeeded ? newUser : null;
        }

        public async Task<bool> IsUsernameAvailable(string username)
        {
            return !await _userManager.Users.AnyAsync(user => user.UserName == username);
        }
    }
}