using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using MixAndMove.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Data
{
    public class WorkoutTypeRepository
    {
        readonly string ConnectionString;

        public WorkoutTypeRepository(IConfiguration config) 
        {
            ConnectionString = config.GetConnectionString("MixAndMove");
        }

        public IEnumerable<WorkoutType> GetAllWorkoutTypes()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT *
                        FROM WorkoutTypes";
            return db.Query<WorkoutType>(sql).ToList();
        }

    }
}
