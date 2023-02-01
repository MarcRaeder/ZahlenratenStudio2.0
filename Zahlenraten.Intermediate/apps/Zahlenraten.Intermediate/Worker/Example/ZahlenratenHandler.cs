namespace Zahlenraten.Intermediate.Worker.Example;

using System.Threading;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

using AtlasEngine;
using AtlasEngine.ExternalTasks;

#pragma warning disable CS0618
[ExternalTaskHandler("ZahlenratenETW")]
#pragma warning restore CS0618
public class ZahlenratenHandler : IExternalTaskHandler<ZahlenratenPayload, ZahlenratenResult>
{
    public Task<ZahlenratenResult> HandleAsync(ZahlenratenPayload input, ExternalTask task,
        CancellationToken cancellationToken = new())
    {
        Random rand = new Random();
        int randomNumber = rand.Next(input.LowestNumber, input.HighestNumber);
        var result = new ZahlenratenResult(randomNumber);

        return Task.FromResult(result);
    }
}
