using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TryPhantomJS.Pages
{
    public class TryModel : PageModel
    {
        private readonly ILogger<TryModel> _logger;

        public TryModel(ILogger<TryModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}