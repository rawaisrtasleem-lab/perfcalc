"use client";

import { useState } from "react";
import { Settings } from "lucide-react";
import Select from "@/components/ui/Select";
import games from "@/data/games";
import { calculateFPS } from "@/lib/fpsCalculation";

const resolutions = [
  { label: "1080p (FHD)", value: "1080p" },
  { label: "1440p (QHD)", value: "1440p" },
  { label: "4K (UHD)", value: "4k" },
];

const ramOptions = [
  { label: "8 GB", value: "8gb" },
  { label: "16 GB", value: "16gb" },
  { label: "32 GB", value: "32gb" },
];

const refreshRates = [
  { label: "60 Hz", value: "60" },
  { label: "144 Hz", value: "144" },
  { label: "240 Hz", value: "240" },
];

export default function GameSettings({ cpu, gpu, setResult }) {
  const [game, setGame] = useState(games[0].value);
  const [resolution, setResolution] = useState("1080p");
  const [ram, setRam] = useState("16gb");
  const [refreshRate, setRefreshRate] = useState("144");
  const [error, setError] = useState("");

  function handleCalculate(event) {
    event.preventDefault();

    try {
      const selectedGame = games.find((item) => item.value === game);
      const result = calculateFPS({
        cpu,
        gpu,
        game: selectedGame,
        resolution,
        ram,
        refreshRate,
      });
      setError("");
      setResult(result);
    } catch (calculationError) {
      setError(calculationError.message);
      setResult(null);
    }
  }

  return (
    <form
      onSubmit={handleCalculate}
      className="w-full space-y-4 rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-4 sm:p-5"
    >
      <h3 className="flex items-center gap-2 text-sm font-bold text-white sm:text-base">
        <Settings size={18} className="text-green-400" />
        Game & display settings
      </h3>

      <Select
        id="game-select"
        label="Game"
        options={games.map(({ label, value }) => ({ label, value }))}
        value={game}
        onChange={setGame}
      />
      <Select
        id="resolution-select"
        label="Resolution"
        options={resolutions}
        value={resolution}
        onChange={setResolution}
      />
      <Select
        id="ram-select"
        label="System RAM"
        options={ramOptions}
        value={ram}
        onChange={setRam}
      />
      <Select
        id="refresh-rate-select"
        label="Monitor refresh rate"
        options={refreshRates}
        value={refreshRate}
        onChange={setRefreshRate}
      />

      {error && <p role="alert" className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        className="mt-1 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-indigo-400/30 bg-gradient-to-r from-indigo-600 to-indigo-500 py-2.5 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:from-indigo-500 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        <span aria-hidden="true">⚡</span>
        Calculate FPS
      </button>

      <p className="px-2 text-center text-xs text-slate-400">
        Rough estimate based on relative benchmark scores, not a live measurement.
      </p>
    </form>
  );
}
