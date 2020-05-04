using System;

namespace _3_Application.Dtos.Security
{
    public class AuthTokenDto
    {
        public string Token { get; set; }

        public DateTime ValidTo { get; set; }
    }
}