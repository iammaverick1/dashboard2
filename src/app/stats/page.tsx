import { LineChartt } from "@/components/LineChart";
import { PieChartt } from "@/components/PieChart";
import { RadarChartt } from "@/components/RadarChart";
import React from "react";

export default function Statistics() {
  return (
    <div>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <LineChartt />
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <PieChartt />
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <RadarChartt />
      </section>
    </div>
  );
}
