import React, { useState } from "react";
import { fareMatrix, stationData } from "../data/station";
import SectionHeader from "./SectionHeader";

const FareCalculator = () => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [fare, setFare] = useState(null);

  const calculateFare = () => {
    if (fromStation && toStation && fareMatrix[fromStation]?.[toStation] !== undefined) {
      setFare(fareMatrix[fromStation][toStation]);
    } else {
      setFare(null);
    }
  };

  return (
    <div>
      <SectionHeader
        title="Fare Calculator"
        subtitle="Select source and destination stations"
      />
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <div className="flex gap-4">
          <select
            className="p-3 rounded-lg border border-gray-300 flex-1"
            value={fromStation}
            onChange={(e) => setFromStation(e.target.value)}
          >
            <option value="">From Station</option>
            {Object.values(stationData).map((station) => (
              <option key={station.code} value={station.code}>
                {station.name}
              </option>
            ))}
          </select>
          <select
            className="p-3 rounded-lg border border-gray-300 flex-1"
            value={toStation}
            onChange={(e) => setToStation(e.target.value)}
          >
            <option value="">To Station</option>
            {Object.values(stationData).map((station) => (
              <option key={station.code} value={station.code}>
                {station.name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={calculateFare}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
        >
          Calculate Fare
        </button>

        {fare !== null && (
          <div className="mt-4 text-xl font-semibold text-green-700">Fare: ₹{fare}</div>
        )}
      </div>
    </div>
  );
};

export default FareCalculator;
