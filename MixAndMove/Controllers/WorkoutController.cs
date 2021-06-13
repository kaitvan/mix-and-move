using Microsoft.AspNetCore.Mvc;
using MixAndMove.Data;
using MixAndMove.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Controllers
{
    [Route("api/Workouts")]
    [ApiController]
    public class WorkoutController : Controller
    {
        WorkoutRepository _repo;

        public WorkoutController(WorkoutRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{userId}")]
        public IActionResult GetAllWorkoutsByUser(int userId)
        {
            return Ok(_repo.GetAllWorkoutsByUser(userId));
        }

        [HttpPost]
        public IActionResult AddWorkout(Workout workout)
        {
            _repo.Add(workout);
            return Created($"api/workouts/{workout.Id}", workout);
        }
    }
}
