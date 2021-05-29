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
    public class UserRepository
    {
        readonly string ConnectionString;
        public UserRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("MixAndMove");
        }

        public IEnumerable<User> GetAllUsers()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM Users";
            return db.Query<User>(sql).ToList();
        }

        public User GetUser(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * 
                        FROM Users
                        WHERE Id = @id";
            return db.QueryFirstOrDefault<User>(sql, new { id = id });
        }

        public void AddUser(User user)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"INSERT INTO [dbo].[Users]
                               ([FirstName]
                               ,[LastName]
                               ,[UserCreatedDate]
                               ,[FirebaseUid]
                               ,[DisplayName]
                               ,[ProfilePicture]
                               ,[EmailAddress])
                         VALUES
                               (@FirstName
                               ,@LastName
                               ,@UserCreatedDate
                               ,@FirebaseUid
                               ,@DisplayName
                               ,@ProfilePicture
                               ,@EmailAddress)";
            var id = db.ExecuteScalar<int>(sql, user);
            user.Id = id;
        }

        public void DeleteUser(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"DELETE
                        FROM Users
                        WHERE Id = @id";
            db.Execute(sql, new { id });
        }

        public void UpdateUser(User user)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"UPDATE [dbo].[Users]
                        SET [FirstName] = @FirstName
                            ,[LastName] = @LastName
                            ,[UserCreatedDate] = @UserCreatedDate
                            ,[FirebaseUid] = @FirebaseUid
                            ,[DisplayName] = @DisplayName
                            ,[ProfilePicture] = @ProfilePicture
                            ,[EmailAddress] = @EmailAddress
                        WHERE Id = @id";
            db.Execute(sql, user);
        }

    }
}
