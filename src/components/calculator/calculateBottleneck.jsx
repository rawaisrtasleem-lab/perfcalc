import cpuData from "@/data/cpu2";
import gpuData from "@/data/gpu2";

/**
 * Calculate bottleneck percentage between CPU and GPU
 * Based on performance ratio, thermal headroom, and real-world gaming scenarios
 * 
 * Bottleneck Classification:
 * 0-10% = Excellent (perfectly balanced)
 * 10-20% = Very Good (minimal impact)
 * 20-40% = Good (acceptable for gaming)
 * 40-60% = Moderate (noticeable limitation)
 * 60%+ = Significant (major performance impact)
 */
export default function calculateBottleneck(cpuName, gpuName) {
  if (!cpuName || !gpuName) return null;

  // Find CPU and GPU data
  const cpu = cpuData.find((c) => c.value === cpuName);
  const gpu = gpuData.find((g) => g.value === gpuName);

  if (!cpu || !gpu) return null;

  // Calculate performance ratio
  const cpuScore = cpu.benchmarkScore;
  const gpuScore = gpu.benchmarkScore;
  const performanceRatio = cpuScore / gpuScore;

  // Ideal ratio is typically 0.6-0.75 for balanced gaming systems
  // Adjust based on different scenarios
  let bottleneckPercent = 0;

  if (performanceRatio < 0.4) {
    // CPU is much weaker than GPU - significant bottleneck
    bottleneckPercent = 60 - performanceRatio * 50;
  } else if (performanceRatio < 0.6) {
    // CPU is somewhat weaker - moderate bottleneck
    bottleneckPercent = 40 - performanceRatio * 20;
  } else if (performanceRatio < 0.75) {
    // Good balance - minimal bottleneck
    bottleneckPercent = 15 - performanceRatio * 10;
  } else if (performanceRatio < 1.0) {
    // Near perfect balance or slightly GPU limited
    bottleneckPercent = Math.max(5, (performanceRatio - 0.75) * 20);
  } else {
    // CPU is stronger than GPU - GPU limited (reverse bottleneck)
    bottleneckPercent = Math.min(20, (performanceRatio - 1.0) * 50);
  }

  // Apply TDP consideration (thermal efficiency)
  const cpuTdp = parseInt(cpu.tdp);
  const gpuTdp = parseInt(gpu.tdp);
  const tdpRatio = gpuTdp / cpuTdp;

  // Adjust for power efficiency - high TDP imbalance affects throttling
  if (tdpRatio > 3) {
    bottleneckPercent += 8;
  } else if (tdpRatio < 0.5) {
    bottleneckPercent += 5;
  }

  // Apply core count consideration
  const coreRatio = cpu.cores / gpu.vram.match(/\d+/)[0];
  if (coreRatio > 1.5) {
    bottleneckPercent -= 5; // More cores help
  }

  // Ensure result is within reasonable bounds
  return Math.max(0, Math.min(95, Math.round(bottleneckPercent)));
}

/**
 * Get detailed bottleneck analysis
 */
export function getBottleneckAnalysis(cpuName, gpuName) {
  const cpu = cpuData.find((c) => c.value === cpuName);
  const gpu = gpuData.find((g) => g.value === gpuName);
  const bottleneck = calculateBottleneck(cpuName, gpuName);

  if (!cpu || !gpu || bottleneck === null) return null;

  return {
    bottleneck,
    cpu,
    gpu,
    cpuScore: cpu.benchmarkScore,
    gpuScore: gpu.benchmarkScore,
    recommendation: getRecommendation(bottleneck, cpu, gpu),
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

/**
 * Get personalized recommendations
 */
export function getRecommendation(bottleneck, cpu, gpu) {
  if (bottleneck < 10) {
    return {
      title: "Excellent Compatibility",
      description:
        "Your CPU and GPU are perfectly balanced. You'll get optimal gaming performance with minimal losses.",
      suggestion: "Enjoy maximum gaming performance!",
    };
  } else if (bottleneck < 20) {
    return {
      title: "Very Good Match",
      description:
        "Great pairing! Your system is well-balanced with minimal bottleneck impact on frame rates.",
      suggestion: "Perfect for 1440p or high refresh rate gaming.",
    };
  } else if (bottleneck < 40) {
    return {
      title: "Good Compatibility",
      description:
        "Your system is suitable for gaming. There's a minor bottleneck but it won't significantly impact gameplay.",
      suggestion: `Consider 1440p gaming or high settings at 1080p for best experience.`,
    };
  } else if (bottleneck < 60) {
    return {
      title: "Moderate Bottleneck",
      description: `The ${
        cpu.benchmarkScore < gpu.benchmarkScore ? "CPU" : "GPU"
      } is limiting the other component. You may see reduced frame rates compared to the stronger component's potential.`,
      suggestion: `Focus on optimizing settings. Lower resolution or settings might be necessary for smooth gameplay.`,
    };
  } else {
    return {
      title: "Significant Bottleneck",
      description:
        "There's a significant mismatch between your CPU and GPU. The weaker component will substantially limit performance.",
      suggestion: `Consider upgrading the ${
        cpu.benchmarkScore < gpu.benchmarkScore ? "CPU" : "GPU"
      } for better balance and performance.`,
    };
  }
}