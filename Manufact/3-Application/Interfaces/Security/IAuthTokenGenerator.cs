using _1_Domain;
using System.Collections.Generic;

namespace _3_Application.Interfaces.Security
{
    public interface IAuthTokenGenerator
    {
        string CreateToken(ApplicationUser user, IEnumerable<string> roles = null);
    }
}