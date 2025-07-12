import React, { useState } from "react";
import FareCalculator from "./FareCalculator";
import FareTable from "./FareTable";
import FareChart from "./FareChart";
import { Calculator, Table, BarChart3 } from "lucide-react";

const TransitFareCalculator = () => {
  const [viewMode, setViewMode] = useState("calculator");

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pune Metro Fare System</h1>
        <div className="flex flex-wrap gap-4">
          {/* Buttons to switch views */}
          <button
            onClick={() => setViewMode("calculator")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              viewMode === "calculator"
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Calculator className="w-5 h-5 inline mr-2" />
            Fare Calculator
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              viewMode === "table"
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Table className="w-5 h-5 inline mr-2" />
            Complete Table
          </button>
          <button
            onClick={() => setViewMode("chart")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              viewMode === "chart"
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <BarChart3 className="w-5 h-5 inline mr-2" />
            Visual Analysis
          </button>
        </div>
      </div>

      {viewMode === "calculator" && <FareCalculator />}
      {viewMode === "table" && <FareTable />}
      {viewMode === "chart" && <FareChart />}
    </div>
  );
};

export default TransitFareCalculator;
