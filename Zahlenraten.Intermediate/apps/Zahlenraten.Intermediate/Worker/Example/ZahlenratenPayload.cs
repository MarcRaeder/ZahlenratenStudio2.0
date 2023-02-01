namespace Zahlenraten.Intermediate.Worker.Example;

public class ZahlenratenPayload
{
    public ZahlenratenPayload(int lowestNumber, int highestNumber)
    {
        this.LowestNumber = lowestNumber;
        this.HighestNumber = highestNumber;
    }

    public int LowestNumber { get; set; }
    public int HighestNumber { get; set; }

}

