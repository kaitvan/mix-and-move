using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Models
{
    public class Workout
    {
        public int Id { get; set; }
        public DateTime StartTime { get; set; }
        public int TotalTime { get; set; }
        public int UserId { get; set; }
        public int WorkoutTypeId { get; set; }
    }
}
