// ---- Unit maps ----
export const fileSizeUnits = [
    { value: "KB", label: "KB (Kilobytes)", bytes: 1024 },
    { value: "MB", label: "MB (Megabytes)", bytes: 1024 ** 2 },
    { value: "GB", label: "GB (Gigabytes)", bytes: 1024 ** 3 },
    { value: "TB", label: "TB (Terabytes)", bytes: 1024 ** 4 },
]

export const speedUnits = [
    { value: "Kbps", label: "Kbps (Kilobits/s)", bits: 1_000 },
    { value: "Mbps", label: "Mbps (Megabits/s)", bits: 1_000_000 },
    { value: "Gbps", label: "Gbps (Gigabits/s)", bits: 1_000_000_000 },
]

// Common connection presets for the comparison table
export const connectionPresets = [
    { label: "3G Mobile", mbps: 3 },
    { label: "4G LTE", mbps: 25 },
    { label: "5G Mobile", mbps: 150 },
    { label: "DSL", mbps: 15 },
    { label: "Cable (100 Mbps)", mbps: 100 },
    { label: "Fiber (500 Mbps)", mbps: 500 },
    { label: "Fiber (1 Gbps)", mbps: 1000 },
]

// Common file presets (quick-select chips)
export const filePresets = [
    { label: "Song (5 MB)", size: 5, unit: "MB" },
    { label: "Photo (12 MB)", size: 12, unit: "MB" },
    { label: "HD Movie (4 GB)", size: 4, unit: "GB" },
    { label: "4K Movie (20 GB)", size: 20, unit: "GB" },
    { label: "AAA Game (80 GB)", size: 80, unit: "GB" },
]

const OVERHEAD = 0.92 // ~8% real-world protocol/network overhead

/**
 * Returns download time in seconds.
 * fileSize (bytes) * 8 = bits, divided by speed in bits/sec.
 */
export default function calculateDownloadTime(fileSize, fileSizeUnit, speed, speedUnit) {
    const sizeDef = fileSizeUnits.find((u) => u.value === fileSizeUnit)
    const speedDef = speedUnits.find((u) => u.value === speedUnit)
    if (!sizeDef || !speedDef || fileSize <= 0 || speed <= 0) return null

    const totalBits = fileSize * sizeDef.bytes * 8
    const effectiveBitsPerSec = speed * speedDef.bits * OVERHEAD

    return totalBits / effectiveBitsPerSec
}

/** Formats seconds into a human-readable string. */
export function formatTime(seconds) {
    if (seconds === null || !isFinite(seconds)) return "—"
    if (seconds < 1) return "Less than a second"
    if (seconds < 60) return `${Math.round(seconds)} sec`

    const d = Math.floor(seconds / 86400)
    const h = Math.floor((seconds % 86400) / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.round(seconds % 60)

    const parts = []
    if (d) parts.push(`${d} day${d > 1 ? "s" : ""}`)
    if (h) parts.push(`${h} hr${h > 1 ? "s" : ""}`)
    if (m) parts.push(`${m} min`)
    if (s && !d && !h) parts.push(`${s} sec`)
    return parts.join(" ")
}

/** Detailed analysis: effective speed, data rate, comparison table. */
export function getDownloadAnalysis(fileSize, fileSizeUnit, speed, speedUnit) {
    const seconds = calculateDownloadTime(fileSize, fileSizeUnit, speed, speedUnit)
    if (seconds === null) return null

    const sizeDef = fileSizeUnits.find((u) => u.value === fileSizeUnit)
    const speedDef = speedUnits.find((u) => u.value === speedUnit)
    const totalBytes = fileSize * sizeDef.bytes
    const speedMbps = (speed * speedDef.bits) / 1_000_000

    // Effective download rate in MB/s (what users actually see in browsers)
    const effectiveMBps = (speedMbps * OVERHEAD) / 8

    const comparisons = connectionPresets.map((c) => ({
        label: c.label,
        mbps: c.mbps,
        time: formatTime((totalBytes * 8) / (c.mbps * 1_000_000 * OVERHEAD)),
        isFaster: c.mbps > speedMbps,
    }))

    return {
        seconds,
        formatted: formatTime(seconds),
        effectiveMBps: effectiveMBps.toFixed(2),
        speedMbps: speedMbps.toFixed(1),
        fileLabel: `${fileSize} ${fileSizeUnit}`,
        comparisons,
        recommendation: getRecommendation(seconds),
    }
}

function getRecommendation(seconds) {
    if (seconds < 10)
        return {
            title: "Instant Download",
            description: "Your connection handles this file effortlessly. No waiting needed.",
            suggestion: "Perfect setup for this file size — download anytime.",
        }
    if (seconds < 300)
        return {
            title: "Quick Download",
            description: "This will finish in a few minutes. Ideal for on-demand downloads.",
            suggestion: "Pause streaming or other downloads for the fastest result.",
        }
    if (seconds < 3600)
        return {
            title: "Moderate Wait",
            description: "Expect a noticeable wait. Other network activity will slow it further.",
            suggestion: "Start the download and do something else — use a wired connection if possible.",
        }
    return {
        title: "Long Download",
        description: "This is a large file for your connection speed. It may take over an hour.",
        suggestion: "Schedule it overnight, or consider a faster plan if this is frequent.",
    }
}