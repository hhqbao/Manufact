using _1_Domain;
using _3_Application.Dtos.Security;
using System.Threading.Tasks;

namespace _3_Application.Interfaces.Security
{
    public interface IAuthService
    {
        Task<AuthTokenDto> LoginAsync(string username, string password);

        Task<ApplicationUser> RegisterAsync(string username, string email);

        Task<bool> IsUsernameAvailable(string username);
    }
}