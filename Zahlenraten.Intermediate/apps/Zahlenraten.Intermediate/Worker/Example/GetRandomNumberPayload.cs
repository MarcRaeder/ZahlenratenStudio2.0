namespace Zahlenraten.Intermediate.Worker.Example;

public class GetRandomNumberPayload
{
    public GetRandomNumberPayload(string userName)
    {
        this.UserName = userName;
    }
    
    public string UserName { get; set; }
    
    
}

