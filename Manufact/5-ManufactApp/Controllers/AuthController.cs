using _3_Application.Dtos.Auth;
using _3_Application.Interfaces.Security;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace _5_ManufactApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLogin model)
        {
            var token = await _authService.LoginAsync(model.Username, model.Password);

            if (token == null) return Unauthorized();

            return Ok(new { Token = token });
        }

        [HttpPost("register")]

        public async Task<IActionResult> Register(UserForRegister model)
        {
            if (!await _authService.IsUsernameAvailable(model.Username)) return BadRequest("Username Already Exist");

            var user = await _authService.RegisterAsync(model.Username, model.Email);

            if (user == null) return BadRequest("User Registration Failed");

            return StatusCode(201);
        }
    }
}