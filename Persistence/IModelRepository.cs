using System.Threading.Tasks;
using vega.Models;

namespace vega.Persistence
{
    public interface IModelRepository
    {
         Task<Model> GetModel(int id);
    }
}