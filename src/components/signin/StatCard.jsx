import React from "react";

export function StatCard({ number, label }) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-bold text-[#081735] mb-1 ">{number}</h3>
      <p className="text-sm font-normal text-[#171717]">{label}</p>
    </div>
  );
}
