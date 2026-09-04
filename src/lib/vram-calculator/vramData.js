export const QUANTIZATION_OPTIONS = [
    {
        value: "fp32",
        label: "FP32",
        bytesPerWeight: 4,
        description: "Full 32-bit precision",
    },
    {
        value: "fp16",
        label: "FP16",
        bytesPerWeight: 2,
        description: "16-bit floating point",
    },
    {
        value: "bf16",
        label: "BF16",
        bytesPerWeight: 2,
        description: "Brain floating point 16-bit",
    },
    {
        value: "q8",
        label: "Q8",
        bytesPerWeight: 1,
        description: "8-bit quantization",
    },
    {
        value: "q6",
        label: "Q6",
        bytesPerWeight: 0.75,
        description: "6-bit quantization",
    },
    {
        value: "q5",
        label: "Q5",
        bytesPerWeight: 0.625,
        description: "5-bit quantization",
    },
    {
        value: "q4",
        label: "Q4",
        bytesPerWeight: 0.5,
        description: "4-bit quantization",
    },
];

export const MODEL_SIZE_OPTIONS = [
    1,
    3,
    4,
    7,
    8,
    13,
    14,
    20,
    30,
    32,
    34,
    40,
    70,
    100,
    405,
];

export const CONTEXT_LENGTH_OPTIONS = [
    2048,
    4096,
    8192,
    16384,
    32768,
    65536,
    131072,
];

export const BATCH_SIZE_OPTIONS = [1, 2, 4, 8, 16];

export const GPU_TIERS = [
    {
        vram: 6,
        label: "6 GB",
        examples: ["RTX 3060 6GB"],
    },
    {
        vram: 8,
        label: "8 GB",
        examples: ["RTX 4060"],
    },
    {
        vram: 12,
        label: "12 GB",
        examples: ["RTX 4070", "RTX 5070"],
    },
    {
        vram: 16,
        label: "16 GB",
        examples: ["RTX 4080", "RTX 5080", "RTX 5070 Ti"],
    },
    {
        vram: 24,
        label: "24 GB",
        examples: ["RTX 4090"],
    },
    {
        vram: 32,
        label: "32 GB",
        examples: ["RTX 5090"],
    },
    {
        vram: 48,
        label: "48 GB+",
        examples: ["Dual 24GB GPUs", "Multi-GPU setup"],
    },
    {
        vram: 96,
        label: "96 GB+",
        examples: ["High-memory multi-GPU setup"],
    },
];

export const GAMING_RESOLUTIONS = [
    {
        value: "1080p",
        label: "1080p",
        width: 1920,
        height: 1080,
        baseVram: 6,
    },
    {
        value: "1440p",
        label: "1440p",
        width: 2560,
        height: 1440,
        baseVram: 8,
    },
    {
        value: "4k",
        label: "4K",
        width: 3840,
        height: 2160,
        baseVram: 12,
    },
];

export const TEXTURE_QUALITY_OPTIONS = [
    {
        value: "low",
        label: "Low",
        adjustment: -1.5,
    },
    {
        value: "medium",
        label: "Medium",
        adjustment: -0.75,
    },
    {
        value: "high",
        label: "High",
        adjustment: 0,
    },
    {
        value: "ultra",
        label: "Ultra",
        adjustment: 2,
    },
];

export const RAY_TRACING_OPTIONS = [
    {
        value: "off",
        label: "Off",
        adjustment: 0,
    },
    {
        value: "medium",
        label: "Medium",
        adjustment: 1,
    },
    {
        value: "high",
        label: "High",
        adjustment: 2,
    },
    {
        value: "ultra",
        label: "Ultra",
        adjustment: 3,
    },
];

export const MOD_OPTIONS = [
    {
        value: "none",
        label: "No Mods",
        adjustment: 0,
    },
    {
        value: "light",
        label: "Light Mods",
        adjustment: 1,
    },
    {
        value: "moderate",
        label: "Moderate Mods",
        adjustment: 2,
    },
    {
        value: "heavy",
        label: "Heavy Texture Mods",
        adjustment: 4,
    },
];