"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import Hyperspeed from "@/components/Hyperspeed/Hyperspeed";
import { hyperspeedPresets } from "../Hyperspeed/HyperSpeedPresets"; // Fixed casing in import path

export default function HyperspeedUI() {
  // Remove any event handlers from the preset before passing it
  const { onSpeedUp, onSlowDown, ...safePreset } = hyperspeedPresets.cyberpunk;

  return (
      <div className="fixed inset-0 z-0">
        <Hyperspeed effectOptions={safePreset} />
      </div>
  );
}
