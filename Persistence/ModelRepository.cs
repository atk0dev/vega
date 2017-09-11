using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using vega.Core;
using vega.Core.Models;

namespace vega.Persistence
{
    public class ModelRepository : IModelRepository
    {
        private readonly VegaDbContext context;

        public ModelRepository(VegaDbContext context)
        {
            this.context = context;
        }

        public async Task<Model> GetModel(int id)
        {
            return await context.Models.FindAsync(id);
        }
    }
}