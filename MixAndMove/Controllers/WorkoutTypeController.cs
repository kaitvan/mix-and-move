using Microsoft.AspNetCore.Mvc;
using MixAndMove.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Controllers
{
    [Route("api/WorkoutTypes")]
    [ApiController]
    public class WorkoutTypeController : Controller
    {
        WorkoutTypeRepository _repo;

        public WorkoutTypeController(WorkoutTypeRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllWorkoutTypes()
        {
            return Ok(_repo.GetAllWorkoutTypes());
        }
    }
}
