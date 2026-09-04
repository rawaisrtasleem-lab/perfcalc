import {
    GAMING_RESOLUTIONS,
    TEXTURE_QUALITY_OPTIONS,
    RAY_TRACING_OPTIONS,
    MOD_OPTIONS,
} from "./vramData";

function round(value, decimals = 1) {
    const multiplier = 10 ** decimals;

    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

function findOption(options, value) {
    return options.find(
        (option) => option.value === value
    );
}

export function calculateGamingVram({
    resolution = "1440p",
    textureQuality = "high",
    rayTracing = "off",
    mods = "none",
}) {
    const resolutionData = findOption(
        GAMING_RESOLUTIONS,
        resolution
    );

    const textureData = findOption(
        TEXTURE_QUALITY_OPTIONS,
        textureQuality
    );

    const rayTracingData = findOption(
        RAY_TRACING_OPTIONS,
        rayTracing
    );

    const modData = findOption(
        MOD_OPTIONS,
        mods
    );

    if (
        !resolutionData ||
        !textureData ||
        !rayTracingData ||
        !modData
    ) {
        return {
            baseVram: 0,
            textureAdjustment: 0,
            rayTracingAdjustment: 0,
            modAdjustment: 0,
            estimatedUsage: 0,
            recommendedVram: 0,
        };
    }

    const baseVram = resolutionData.baseVram;

    const textureAdjustment =
        textureData.adjustment;

    const rayTracingAdjustment =
        rayTracingData.adjustment;

    const modAdjustment =
        modData.adjustment;

    const rawUsage =
        baseVram +
        textureAdjustment +
        rayTracingAdjustment +
        modAdjustment;

    const estimatedUsage = Math.max(
        rawUsage,
        4
    );

    /*
     * Add roughly 10% extra breathing room for
     * transient allocations, game updates, and
     * scene-to-scene variation.
     */
    const recommendedVram =
        estimatedUsage * 1.1;

    return {
        baseVram: round(baseVram),

        textureAdjustment: round(
            textureAdjustment
        ),

        rayTracingAdjustment: round(
            rayTracingAdjustment
        ),

        modAdjustment: round(
            modAdjustment
        ),

        estimatedUsage: round(
            estimatedUsage
        ),

        recommendedVram: round(
            recommendedVram
        ),

        resolution,

        textureQuality,

        rayTracing,

        mods,
    };
}