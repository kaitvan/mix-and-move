using Microsoft.AspNetCore.Mvc;
using MixAndMove.Data;
using MixAndMove.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Controllers
{
    [Route("api/Categories")]
    [ApiController]
    public class CategoryController : Controller
    {
        CategoryRepository _repo;

        public CategoryController(CategoryRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllCategories()
        {
            return Ok(_repo.GetAllCategories());
        }
    }
}
