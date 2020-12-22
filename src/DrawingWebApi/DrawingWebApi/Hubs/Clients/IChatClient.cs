using System.Threading.Tasks;
using DrawingWebApi.Models;

namespace DrawingWebApi.Hubs.Clients
{
    public interface IChatClient
    {
        Task ReceiveMessage(ChatMessage message);
    }
}
