import React from "react";

export const Vehicle = ({ vehicles }) => {
  if (vehicles.length === 0) return null;

  const vehicleRow = (vehicle, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
        <td>{vehicle.dealNumber}</td>
        <td>{vehicle.customerName}</td>
        <td>{vehicle.dealerShipName}</td>
        <td>{vehicle.vehicle}</td>
        <td>{vehicle.price}</td>
        <td>{vehicle.date}</td>
      </tr>
    );
  };

  const vehicleTable = vehicles.map((vehicle, index) =>
    vehicleRow(vehicle, index)
  );

  return (
    <div className="container">
      <h2>Vehicles</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Deal Number</th>
            <th>Customer Name</th>
            <th>Dealer Ship Name</th>
            <th>Vehicle</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{vehicleTable}</tbody>
      </table>
    </div>
  );
};
