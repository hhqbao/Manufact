using _1_Domain;
using _3_Application.Dtos.Security;
using System.Collections.Generic;

namespace _3_Application.Interfaces.Security
{
    public interface IAuthTokenGenerator
    {
        AuthTokenDto CreateToken(ApplicationUser user, IEnumerable<string> roles = null);
    }
}