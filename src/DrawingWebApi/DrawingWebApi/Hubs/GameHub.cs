using System.Threading.Tasks;
using DrawingWebApi.Models;
using DrawingWebApi.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;

namespace DrawingWebApi.Hubs
{
    public class GameHub : Hub<IGameClient>
    {
        public async Task SendDrawingImage(DrawingImage drawingImage)
        {
            await Clients.All.ReceiveDrawingImage(drawingImage);
        }
    }
}
