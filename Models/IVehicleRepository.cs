using System;
using System.Collections.Generic;

namespace DealerTrack.Models
{
  public interface IVehicleRepository
  {
    List<Vehicle> formatVehicles(List<Vehicle> vehicles);
  }
}