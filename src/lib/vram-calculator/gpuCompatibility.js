import { GPU_TIERS } from "./vramData";

function round(value, decimals = 1) {
    const multiplier = 10 ** decimals;

    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

export function getGpuCompatibility(requiredVram) {
    const required = Number(requiredVram);

    if (!Number.isFinite(required) || required <= 0) {
        return [];
    }

    return GPU_TIERS.map((gpu) => {
        const headroom = gpu.vram - required;

        const headroomPercent =
            gpu.vram > 0
                ? (headroom / gpu.vram) * 100
                : 0;

        let status = "not-enough";

        if (gpu.vram >= required * 1.15) {
            status = "recommended";
        } else if (gpu.vram >= required) {
            status = "fits";
        }

        return {
            ...gpu,

            fits: gpu.vram >= required,

            status,

            headroom: round(headroom),

            headroomPercent: round(headroomPercent),
        };
    });
}

export function getMinimumGpuTier(requiredVram) {
    const required = Number(requiredVram);

    if (!Number.isFinite(required) || required <= 0) {
        return null;
    }

    return (
        GPU_TIERS.find(
            (gpu) => gpu.vram >= required
        ) || null
    );
}

export function getRecommendedGpuTier(requiredVram) {
    const required = Number(requiredVram);

    if (!Number.isFinite(required) || required <= 0) {
        return null;
    }

    const target = required * 1.15;

    return (
        GPU_TIERS.find(
            (gpu) => gpu.vram >= target
        ) ||
        GPU_TIERS.find(
            (gpu) => gpu.vram >= required
        ) ||
        null
    );
}