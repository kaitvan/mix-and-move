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
    public class CategoryRepository
    {
        readonly string ConnectionString;

        public CategoryRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("MixAndMove");
        }

        public IEnumerable<Category> GetAllCategories()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT *
                        FROM Categories";
            return db.Query<Category>(sql).ToList();
        }
    }
}
