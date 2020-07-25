using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UserRegisterDTO
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(16, MinimumLength = 8, ErrorMessage = "Length should be between 9 to 16 characters")]
        public string Password { get; set; }
    }
}