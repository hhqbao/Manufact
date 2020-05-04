using System.ComponentModel.DataAnnotations;

namespace _3_Application.Dtos.Auth
{
    public class UserForRegister
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}