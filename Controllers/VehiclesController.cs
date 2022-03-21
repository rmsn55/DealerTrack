using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DealerTrack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;
using Microsoft.AspNetCore.Http;
using System.Text;

namespace DealerTrack.Controllers
{
  [ApiController]
  public class VehiclesController : ControllerBase
  {

    private readonly ILogger<VehiclesController> _logger;


    public VehiclesController(ILogger<VehiclesController> logger)
    {
      _logger = logger;
    }

    [HttpPost]
    [Route("api/ImportFile")]
    [Consumes("multipart/form-data")]
    public async Task<List<Vehicle>> ImportFile([FromForm] IFormFile file)
    {
      var vehicles = new List<Vehicle>();
      string name = file.FileName;
      string extension = Path.GetExtension(file.FileName);
      using (var memoryStream = new MemoryStream())
      {
        file.CopyTo(memoryStream);
        if (file.FileName.EndsWith(".csv"))
        {
          using (var sreader = new StreamReader(file.OpenReadStream(), Encoding.GetEncoding("iso-8859-1")))
          {
            string[] headers = sreader.ReadLine().Split(',');
            while (!sreader.EndOfStream)
            {
              vehicles.Add(TransformVehicle(sreader.ReadLine()));
            }
          }
        }
        else
        {
          _logger.LogError("Incorrect type of file.");
        }
        return vehicles;
      }
    }

    private Vehicle TransformVehicle(string csvLine)
    {
      string[] columns = csvLine.Split(',');
      var result = new List<string>();
      for (var i = 0; i < columns.Length; i++)
      {
        if (columns[i].Contains("\""))
        {
          var value = (columns[i] + ',' + columns[i + 1]).Replace("\"", "");
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
        price = "CAD$" + result[4].ToString(),
        date = result[5].ToString()
      };
    }
  }
}
