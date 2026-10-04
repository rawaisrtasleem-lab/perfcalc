const resolutionFactors = {
  "1080p": 1,
  "1440p": 0.72,
  "4k": 0.48,
}

const ramFactors = {
  "8gb": 0.85,
  "16gb": 1,
  "32gb": 1,
}

export function calculateFPS({ cpu, gpu, game, resolution, ram, refreshRate }) {
  if (!cpu || !gpu || !game) {
    throw new Error("Select a CPU, GPU, and game to calculate FPS.")
  }

  const resolutionFactor = resolutionFactors[resolution]
  const ramFactor = ramFactors[ram]
  const targetRefreshRate = Number(refreshRate)

  if (!resolutionFactor || !ramFactor || !Number.isFinite(targetRefreshRate) || targetRefreshRate <= 0) {
    throw new Error("Select a valid resolution, RAM amount, and monitor refresh rate.")
  }

  const gpuPerformance = gpu.benchmarkScore / game.benchmarkScore
  const cpuPerformance = cpu.benchmarkScore / (game.benchmarkScore * 0.35)
  const cpuFactor = Math.min(1, cpuPerformance)
  const estimatedFPS = Math.max(
    1,
    Math.min(
      360,
      Math.round(game.recommendedFPS * gpuPerformance * cpuFactor * resolutionFactor * ramFactor)
    )
  )

  let bottleneck = "Balanced"
  if (cpuPerformance < gpuPerformance && cpuPerformance < 1) {
    bottleneck = "CPU"
  } else if (gpuPerformance < 1) {
    bottleneck = "GPU"
  }

  return {
    fps: estimatedFPS,
    bottleneck,
    refreshRate: targetRefreshRate,
    meetsRefreshRate: estimatedFPS >= targetRefreshRate,
    game: game.label,
    cpu: cpu.label,
    gpu: gpu.label,
    resolution,
  }
}