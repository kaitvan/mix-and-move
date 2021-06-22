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
                        WHERE UserId = @userId
                        ORDER BY startTime DESC";
            return db.Query<Workout>(sql, new { userId = userId }).ToList();
        }

        public void Add(Workout workout)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"INSERT INTO [Workouts]
                               ([StartTime]
                               ,[TotalTime] 
                               ,[UserId]
                               ,[WorkoutTypeId])
                        OUTPUT inserted.id
                        VALUES (@StartTime, @TotalTime, @UserId, @WorkoutTypeId)";
            var id = db.ExecuteScalar<int>(sql, workout);
            workout.Id = id;
        }

        public void UpdateTime(Workout workout)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"UPDATE [Workouts]
                        SET TotalTime = @TotalTime,
                            UserId = @UserId,
                            WorkoutTypeId = @WorkoutTypeId
                        WHERE Id = @id";
            db.Execute(sql, workout);
        }
    }
}
