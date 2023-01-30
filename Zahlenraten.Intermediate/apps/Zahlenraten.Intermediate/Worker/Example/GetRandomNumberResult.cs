namespace Zahlenraten.Intermediate.Worker.Example;

public class GetRandomNumberResult
{
   public GetRandomNumberResult(int getRandomNumberResult, string userNameResult)
   {
      this.GetRandomNumber = getRandomNumberResult;
      this.UserName = userNameResult;
   }

   public int GetRandomNumber {get; set;}
   public string UserName { get; set; }
}
