using Microsoft.AspNetCore.Mvc;
using MixAndMove.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Controllers
{
    [Route("api/Movements")]
    [ApiController]
    public class MovementController : Controller
    {
        MovementRepository _repo;

        public MovementController(MovementRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllMovements()
        {
            return Ok(_repo.GetAllMovements());
        }

        [HttpGet("{categoryId}")]
        public IActionResult GetMovementsByCategory(int categoryId)
        {
            return Ok(_repo.GetMovementsByCategory(categoryId));
        }
    }
}
