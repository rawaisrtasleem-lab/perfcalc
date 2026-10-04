import cpuData from "@/data/cpu2";
import gpuData from "@/data/gpu2";

const resolutionBias = {
  "1080p": { cpu: 1.1, gpu: 0.9 },
  "1440p": { cpu: 1, gpu: 1 },
  "4k": { cpu: 0.9, gpu: 1.1 },
};

function getRelativeScore(score, data) {
  const scores = data.map((item) => item.benchmarkScore);
  const minimum = Math.min(...scores);
  const maximum = Math.max(...scores);
  return ((score - minimum) / (maximum - minimum)) * 100;
}

export default function calculateBottleneck(cpuName, gpuName, resolution = "1080p") {
  const analysis = getBottleneckAnalysis(cpuName, gpuName, resolution);
  return analysis?.bottleneck ?? null;
}

export function getBottleneckAnalysis(cpuName, gpuName, resolution = "1080p") {
  const cpu = cpuData.find((item) => item.value === cpuName);
  const gpu = gpuData.find((item) => item.value === gpuName);
  const bias = resolutionBias[resolution];

  if (!cpu || !gpu || !bias) return null;

  const cpuRelativeScore = getRelativeScore(cpu.benchmarkScore, cpuData);
  const gpuRelativeScore = getRelativeScore(gpu.benchmarkScore, gpuData);
  const bottleneck = Math.round(Math.abs(cpuRelativeScore - gpuRelativeScore));
  const cpuWorkloadScore = cpuRelativeScore * bias.cpu;
  const gpuWorkloadScore = gpuRelativeScore * bias.gpu;
  const likelyLimiter =
    Math.abs(cpuWorkloadScore - gpuWorkloadScore) < 8
      ? "Neither clearly stands out"
      : cpuWorkloadScore < gpuWorkloadScore
        ? "CPU"
        : "GPU";

  return {
    bottleneck,
    likelyLimiter,
    resolution,
    cpu,
    gpu,
    cpuScore: cpu.benchmarkScore,
    gpuScore: gpu.benchmarkScore,
    cpuRelativeScore: Math.round(cpuRelativeScore),
    gpuRelativeScore: Math.round(gpuRelativeScore),
    recommendation: getRecommendation(bottleneck, likelyLimiter, resolution),
    details: {
      cpuCores: cpu.cores,
      gpuVram: gpu.vram,
      cpuTdp: cpu.tdp,
      gpuTdp: gpu.tdp,
      cpuArchitecture: cpu.architecture,
      gpuArchitecture: gpu.architecture,
    },
  };
}

export function getRecommendation(gap, likelyLimiter, resolution) {
  let title = "Close hardware tiers";
  let description =
    "The selected parts have similar relative positions within their respective benchmark lists.";

  if (gap >= 35) {
    title = "Large hardware tier gap";
    description = `The ${likelyLimiter} appears relatively lower for this ${resolution} comparison. This is a pairing signal, not a measured FPS loss.`;
  } else if (gap >= 15) {
    title = "Some hardware tier mismatch";
    description = `The ${likelyLimiter} may be the more limiting part at ${resolution}, depending on the game and settings.`;
  }

  return {
    title,
    description,
    suggestion:
      "Use this as a rough comparison. Check game-specific benchmarks and in-game CPU/GPU usage before deciding on an upgrade.",
  };
}
