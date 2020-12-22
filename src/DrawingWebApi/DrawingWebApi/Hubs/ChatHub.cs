using System.Threading.Tasks;
using DrawingWebApi.Models;
using DrawingWebApi.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;

namespace DrawingWebApi.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        public async Task SendMessage(ChatMessage message)
        {
            await Clients.All.ReceiveMessage(message);
        }
    }
}
