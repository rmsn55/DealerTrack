import React, { useState, useEffect } from "react";
import { fetchVehicles } from "../services/UserService";
import { Vehicle } from "./Vehicles";

export const CSVImport = () => {
  const [vehicles, setVehicles] = useState([]);
  const [path, setPath] = useState("");
  const [loading, setLoading] = useState(false);
  const [csvFile, setCsvFile] = useState([]);

  useEffect(() => {
    //console.log(path);
  }, [path]);

  useEffect(() => {
    fetchVehicles().then((vehicles) => {
      setVehicles(vehicles);
    });
  }, []);

  const renderVehicleTable = (vehicles) => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
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
        <tbody>
          {vehicles &&
            vehicles.map((vehicle) => {
              console.log(vehicle);
              return (
                <tr key={vehicle.dealNumber}>
                  <td>{vehicle.dealNumber}</td>
                  <td>{vehicle.customerName}</td>
                  <td>{vehicle.dealerShipName}</td>
                  <td>{vehicle.vehicle}</td>
                  <td>{vehicle.price}</td>
                  <td>{vehicle.date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1 id="tabelLabel">Dealer Track</h1>
      <form id="csv-form">
        <input
          type="file"
          accept=".csv"
          id="csvFile"
          onChange={(e) => {
            console.log(e.target);
            console.log(e.target.value);
            console.log(e.target.name);
            console.log(e.target.files[0]);
            setCsvFile(e.target.files[0]);
          }}
        ></input>
        <br />
        <button>Submit</button>
      </form>
      <Vehicle vehicles={vehicles}></Vehicle>
    </div>
  );
};
