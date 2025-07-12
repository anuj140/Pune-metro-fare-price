import React, { useState } from "react";
import { fareMatrix, stationData } from "../data/station";
import SectionHeader from "./SectionHeader";

const FareTable = () => {
  const [search, setSearch] = useState("");

  const filteredStations = Object.values(stationData).filter((station) =>
    station.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SectionHeader title="Fare Table" subtitle="View fare between any two stations" />
      <div className="overflow-auto bg-white rounded-xl shadow-md p-4">
        <input
          type="text"
          placeholder="Search station"
          className="p-3 mb-4 w-full border border-gray-300 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">From / To</th>
              {filteredStations.map((station) => (
                <th key={station.code} className="border-b p-2 text-left">
                  {station.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredStations.map((from) => (
              <tr key={from.code}>
                <td className="border-b p-2 font-semibold">{from.name}</td>
                {filteredStations.map((to) => (
                  <td key={to.code} className="border-b p-2">
                    ₹{fareMatrix[from.code]?.[to.code] ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FareTable;
