using Microsoft.AspNetCore.Mvc;
using MixAndMove.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Controllers
{
    [Route("api/WorkoutDetails")]
    [ApiController]

    public class WorkoutDetailController : Controller
    {
        WorkoutDetailRepository _repo;

        public WorkoutDetailController(WorkoutDetailRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{workoutId}")]
        public IActionResult GetWorkoutDetailsByWorkout(int workoutId)
        {
            return Ok(_repo.GetWorkoutDetailsByWorkout(workoutId));
        }
    }
}
