using System.Collections.Generic;

namespace DealerTrack.Models
{
  public class VehicleRepository : IVehicleRepository
  {
    public List<Vehicle> formatVehicles(List<Vehicle> vehicles)
    {
      var result = new List<Vehicle>();
      foreach (var x in vehicles)
      {
        result.Add(new Vehicle
        {
          dealNumber = x.dealNumber,
          customerName = x.customerName,
          dealerShipName = x.dealerShipName,
          vehicle = x.vehicle,
          price = x.price,
          date = x.date
        });
      }
      return result;
    }
  }

}