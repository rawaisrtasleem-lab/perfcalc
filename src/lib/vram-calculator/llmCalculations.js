import { QUANTIZATION_OPTIONS } from "./vramData";

const DEFAULT_OVERHEAD_PERCENT = 18;

/*
 * Generic KV cache estimate.
 *
 * Exact KV cache usage depends on model architecture,
 * including layer count, hidden size, KV heads, head dimension,
 * cache precision, and attention implementation.
 *
 * Since the public calculator asks for model size, context length,
 * and batch size rather than architecture internals, we use a
 * practical conservative approximation.
 */
const KV_CACHE_GB_PER_BILLION_AT_4K = 0.1875;

function round(value, decimals = 2) {
    const multiplier = 10 ** decimals;

    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

function getQuantization(quantization) {
    return QUANTIZATION_OPTIONS.find(
        (option) => option.value === quantization
    );
}

export function calculateModelWeights(parameters, quantization) {
    const parametersB = Number(parameters);

    const quantizationData = getQuantization(quantization);

    if (!Number.isFinite(parametersB) || parametersB <= 0) {
        return 0;
    }

    if (!quantizationData) {
        return 0;
    }

    /*
     * 1 billion parameters × 1 byte ≈ 1 GB.
     */
    return round(
        parametersB * quantizationData.bytesPerWeight
    );
}

export function calculateKvCache({
    parameters,
    contextLength,
    batchSize = 1,
}) {
    const parametersB = Number(parameters);
    const context = Number(contextLength);
    const batch = Number(batchSize);

    if (
        !Number.isFinite(parametersB) ||
        !Number.isFinite(context) ||
        !Number.isFinite(batch) ||
        parametersB <= 0 ||
        context <= 0 ||
        batch <= 0
    ) {
        return 0;
    }

    const contextMultiplier = context / 4096;

    const kvCache =
        parametersB *
        KV_CACHE_GB_PER_BILLION_AT_4K *
        contextMultiplier *
        batch;

    return round(kvCache);
}

export function calculateRuntimeOverhead(
    subtotal,
    overheadPercent = DEFAULT_OVERHEAD_PERCENT
) {
    const base = Number(subtotal);
    const percentage = Number(overheadPercent);

    if (
        !Number.isFinite(base) ||
        !Number.isFinite(percentage) ||
        base <= 0
    ) {
        return 0;
    }

    return round(base * (percentage / 100));
}

export function calculateLlmVram({
    parameters,
    quantization = "q4",
    contextLength = 4096,
    batchSize = 1,
    overheadPercent = DEFAULT_OVERHEAD_PERCENT,
}) {
    const modelWeights = calculateModelWeights(
        parameters,
        quantization
    );

    const kvCache = calculateKvCache({
        parameters,
        contextLength,
        batchSize,
    });

    const subtotal = modelWeights + kvCache;

    const overhead = calculateRuntimeOverhead(
        subtotal,
        overheadPercent
    );

    const totalVram = subtotal + overhead;

    return {
        modelWeights: round(modelWeights),

        kvCache: round(kvCache),

        overhead: round(overhead),

        subtotal: round(subtotal),

        totalVram: round(totalVram),

        overheadPercent,

        parameters: Number(parameters),

        quantization,

        contextLength: Number(contextLength),

        batchSize: Number(batchSize),
    };
}