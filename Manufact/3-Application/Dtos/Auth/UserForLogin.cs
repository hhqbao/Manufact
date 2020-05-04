using System.ComponentModel.DataAnnotations;

namespace _3_Application.Dtos.Auth
{
    public class UserForLogin
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}