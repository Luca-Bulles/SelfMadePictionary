using System.Threading.Tasks;
using DrawingWebApi.Models;
using DrawingWebApi.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;

namespace DrawingWebApi.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
    }
}
