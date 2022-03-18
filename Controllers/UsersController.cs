using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using DealerTrack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;

namespace react_dotnet_example.Controllers
{
  [ApiController]
  public class UsersController : ControllerBase
  {

    private readonly ILogger<UsersController> _logger;


    public UsersController(ILogger<UsersController> logger)
    {
      _logger = logger;
    }

    // [HttpGet]
    // [Route("api/users")]
    // public IEnumerable<Models.UserModel> GetAllUsers()
    // {
    //   return repository.GetAll();
    // }

    // [HttpPost]
    // [Route("api/user")]
    // [Consumes("application/json")]
    // public Models.UserModel PostUser(Models.UserModel item)
    // {
    //   return repository.Add(item);
    // }

    [HttpPost]
    [Route("api/vehicle")]
    [Consumes("application/json")]
    public IEnumerable<Vehicle> Get()
    {
      return System.IO.File.ReadAllLines("C:/Users/ramso/Downloads/CSV.csv")
                                            .Skip(1)
                                            .Select(v => TransformVehicle(v))
                                            .ToList();
    }

    private Vehicle TransformVehicle(string csvLine)
    {
      string[] columns = csvLine.Split(',');
      var result = new List<string>();
      for (var i = 0; i < columns.Length; i++)
      {
        if (columns[i].Contains("\""))
        {
          var value = (columns[i] + columns[i + 1]).Replace("\"", "");
          result.Add(value);
          i++;
        }
        else
        {
          result.Add(columns[i]);
        }
      }
      return new Vehicle
      {
        dealNumber = Int32.Parse(result[0]),
        customerName = result[1].ToString(),
        dealerShipName = result[2].ToString(),
        vehicle = result[3].ToString(),
        price = result[4].ToString(),
        date = result[5].ToString()
      };
    }
  }
}
