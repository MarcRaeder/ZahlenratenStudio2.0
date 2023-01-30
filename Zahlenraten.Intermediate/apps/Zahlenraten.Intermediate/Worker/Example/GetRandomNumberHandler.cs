namespace Zahlenraten.Intermediate.Worker.Example;

using System.Threading;
using System.Threading.Tasks;

using AtlasEngine;
using AtlasEngine.ExternalTasks;

#pragma warning disable CS0618
[ExternalTaskHandler("GetRandomNumberETW")]
#pragma warning restore CS0618
public class GetRandomNumberHandler : IExternalTaskHandler<GetRandomNumberPayload, GetRandomNumberResult>
{
    public Task<GetRandomNumberResult> HandleAsync(GetRandomNumberPayload input, ExternalTask task,
        CancellationToken cancellationToken = new ())
    {
        Random rand = new Random();
        int randomNumber = rand.Next(1, 100);
        var result = new GetRandomNumberResult(randomNumber);

        return Task.FromResult(result);
    }
}
