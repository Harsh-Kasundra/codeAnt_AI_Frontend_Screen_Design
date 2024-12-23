import React from "react";
import { StatCard } from "./StatCard";
import { IssuesCard } from "./IssuesCard";

export function StatsSection() {
  return (
    <div className="relative">
      <div className="bg-white rounded-3xl box-shadow-xl shadow-custom">
        <div className="flex items-center gap-3 pb-6 border-b border-gray-200 pt-6 pl-6 mb-6">
          <img src="/assets/logo.png" alt="" />

          <h1 className="text-lg font-bold text-[#081735]">
            AI to Detect & Autofix Bad Code
          </h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 pb-7 px-5">
          <StatCard number="30+" label="Language Support" />
          <StatCard number="10K+" label="Developers" />
          <StatCard number="100K+" label="Hours Saved" />
        </div>
      </div>

      {/* Floating Issues Card */}
      <IssuesCard />
    </div>
  );
}
