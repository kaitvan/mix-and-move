using Microsoft.AspNetCore.Mvc;
using MixAndMove.Data;
using MixAndMove.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Controllers
{
    [Route("api/Users")]
    [ApiController]
    public class UserController : Controller
    {
        UserRepository _repo;

        public UserController(UserRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_repo.GetAllUsers());
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _repo.GetUser(id);
            if (user == null)
            {
                return NotFound("This user does not exist.");
            }
            return Ok(user);
        }

        [HttpGet("firebase/{firebaseUid}")]
        public IActionResult GetUserByFirebaseUid(string firebaseUid)
        {
            var user = _repo.GetUserByFirebaseUid(firebaseUid);
            if (user == null)
            {
                return NotFound("This user does not exist.");
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddUser(User user)
        {
            _repo.AddUser(user);
            return Created($"api/Users/{user.Id}", user);
        }

        [HttpPut("delete/{id}")]
        public IActionResult DeleteUser(int id)
        {
            _repo.DeleteUser(id);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(User user)
        {
            _repo.UpdateUser(user);
            return Ok();
        }
    }
}
