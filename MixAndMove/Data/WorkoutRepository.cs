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
    public class WorkoutRepository
    {
        readonly string ConnectionString;

        public WorkoutRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("MixAndMove");
        }

        public IEnumerable<Workout> GetAllWorkoutsByUser(int userId)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT *
                        FROM Workouts
                        WHERE UserId = @userId";
            return db.Query<Workout>(sql).ToList();
        }
    }
}