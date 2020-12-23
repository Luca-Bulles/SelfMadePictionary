using System.Threading.Tasks;
using DrawingWebApi.Models;

namespace DrawingWebApi.Hubs.Clients
{
    public interface IGameClient
    {
        Task ReceiveDrawingImage(DrawingImage drawingImage);
    }
}
