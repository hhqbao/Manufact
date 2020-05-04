using _1_Domain;
using System.Threading.Tasks;

namespace _3_Application.Interfaces.Security
{
    public interface IAuthService
    {
        Task<string> LoginAsync(string username, string password);

        Task<ApplicationUser> RegisterAsync(string username, string email);

        Task<bool> IsUsernameAvailable(string username);
    }
}