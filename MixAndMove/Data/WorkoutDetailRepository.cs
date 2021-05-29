﻿using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using MixAndMove.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MixAndMove.Data
{
    public class WorkoutDetailRepository
    {
        readonly string ConnectionString;

        public WorkoutDetailRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("MixAndMove");
        }

        public IEnumerable<WorkoutDetail> GetWorkoutDetailsByWorkout(int workoutId)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT *
                        FROM WorkoutDetails
                        WHERE WorkoutId = @workoutId";
            return db.Query<WorkoutDetail>(sql, new { workoutId = workoutId });
        }
    }
}