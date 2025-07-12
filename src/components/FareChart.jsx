import { stationData, fareMatrix } from "../data/station";
import SectionHeader from "./SectionHeader";

const FareChart = () => {
  const fares = [];
  Object.values(stationData).forEach((from) => {
    Object.values(stationData).forEach((to) => {
      if (fareMatrix[from.code]?.[to.code] !== undefined && from.code !== to.code) {
        fares.push(fareMatrix[from.code][to.code]);
      }
    });
  });

  const average = (fares.reduce((sum, f) => sum + f, 0) / fares.length).toFixed(2);

  const ranges = {
    "₹0-10": 0,
    "₹11-20": 0,
    "₹21-30": 0,
    "₹31+": 0,
  };
  fares.forEach((f) => {
    if (f <= 10) ranges["₹0-10"]++;
    else if (f <= 20) ranges["₹11-20"]++;
    else if (f <= 30) ranges["₹21-30"]++;
    else ranges["₹31+"]++;
  });

  return (
    <div>
      <SectionHeader title="Fare Chart" subtitle="Visual breakdown of fares" />
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <div className="text-lg font-medium">Average Fare: ₹{average}</div>
        <div className="grid grid-cols-2 gap-6">
          {Object.entries(ranges).map(([range, count]) => (
            <div key={range} className="flex items-center gap-3">
              <div className="w-32 text-sm font-medium">{range}</div>
              <div className="flex-1 bg-purple-100 h-5 rounded">
                <div
                  className="bg-purple-600 h-5 rounded"
                  style={{ width: `${(count / fares.length) * 100}%` }}
                />
              </div>
              <div className="text-sm">{count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FareChart;
