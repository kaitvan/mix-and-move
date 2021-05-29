using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Models
{
    public class WorkoutDetail
    {
        public int Id { get; set; }
        public int WorkoutId { get; set; }
        public int MovementId { get; set; }
        public int Seconds { get; set; }
    }
}
