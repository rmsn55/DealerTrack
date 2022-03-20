import React, { useState } from "react";
import { importFile } from "../services/VehicleService";
import { Vehicle } from "./Vehicles";

export const CSVImport = () => {
  const [vehicles, setVehicles] = useState([]);
  const [csvFile, setCsvFile] = useState();

  const saveFileSelected = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const upload = async () => {
    const response = await importFile(csvFile);
    setVehicles(response);
  };

  return (
    <div>
      <input type="file" onChange={saveFileSelected} />
      <input type="button" value="upload" onClick={upload} />
      <Vehicle vehicles={vehicles}></Vehicle>
    </div>
  );
};
