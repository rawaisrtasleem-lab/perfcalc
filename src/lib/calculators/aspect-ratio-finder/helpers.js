import {
    SUPPORTED_IMAGE_TYPES,
} from "./constants";

/**
 * Convert input into a safe positive dimension.
 */
export function sanitizeDimension(value) {
    if (
        value === "" ||
        value === null ||
        value === undefined
    ) {
        return "";
    }

    const number = Number(value);

    if (!Number.isFinite(number) || number <= 0) {
        return "";
    }

    return String(Math.round(number));
}

/**
 * Format a ratio decimal.
 */
export function formatDecimalRatio(value, decimals = 4) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
        return "—";
    }

    return number.toFixed(decimals);
}

/**
 * Format dimensions.
 *
 * Example:
 * 1920 × 1080
 */
export function formatDimensions(width, height) {
    const w = Number(width);
    const h = Number(height);

    if (
        !Number.isFinite(w) ||
        !Number.isFinite(h) ||
        w <= 0 ||
        h <= 0
    ) {
        return "—";
    }

    return `${Math.round(w)} × ${Math.round(h)}`;
}

/**
 * Format dimensions including px.
 */
export function formatDimensionsWithUnit(
    width,
    height
) {
    const dimensions = formatDimensions(width, height);

    if (dimensions === "—") {
        return dimensions;
    }

    return `${dimensions} px`;
}

/**
 * Format large pixel area.
 *
 * Example:
 * 2073600 -> 2.07 MP
 */
export function formatPixelArea(area) {
    const pixels = Number(area);

    if (!Number.isFinite(pixels) || pixels <= 0) {
        return "—";
    }

    if (pixels >= 1_000_000) {
        return `${(pixels / 1_000_000).toFixed(2)} MP`;
    }

    if (pixels >= 1_000) {
        return `${(pixels / 1_000).toFixed(1)}K px`;
    }

    return `${Math.round(pixels)} px`;
}

/**
 * Check whether selected file is supported.
 */
export function isSupportedImage(file) {
    if (!file) {
        return false;
    }

    return SUPPORTED_IMAGE_TYPES.includes(file.type);
}

/**
 * Filter only supported images.
 */
export function filterSupportedImages(files) {
    if (!files) {
        return [];
    }

    return Array.from(files).filter(isSupportedImage);
}

/**
 * Generate stable-enough id for a locally selected file.
 */
export function createFileId(file) {
    if (!file) {
        return "";
    }

    return [
        file.name,
        file.size,
        file.lastModified,
    ].join("-");
}

/**
 * Generate readable copy text for one result.
 */
export function createResultCopyText(result) {
    if (!result) {
        return "";
    }

    const decimal = formatDecimalRatio(
        result.decimal
    );

    const dimensions = formatDimensions(
        result.width,
        result.height
    );

    return [
        `Dimensions: ${dimensions} px`,
        `Aspect Ratio: ${result.ratio || "—"}`,
        `Decimal Ratio: ${decimal}`,
        `Orientation: ${result.orientation || "—"}`,
        `Closest Standard Ratio: ${
            result.closest?.label || "—"
        }`,
    ].join(" | ");
}

/**
 * Get percentage difference from closest ratio.
 */
export function formatDifferencePercent(value) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
        return "—";
    }

    if (number < 0.01) {
        return "<0.01%";
    }

    return `${number.toFixed(2)}%`;
}

/**
 * Safely truncate long file names.
 */
export function truncateFileName(
    fileName,
    maxLength = 32
) {
    if (!fileName) {
        return "";
    }

    if (fileName.length <= maxLength) {
        return fileName;
    }

    const dotIndex = fileName.lastIndexOf(".");

    const extension =
        dotIndex !== -1
            ? fileName.slice(dotIndex)
            : "";

    const baseName =
        dotIndex !== -1
            ? fileName.slice(0, dotIndex)
            : fileName;

    const allowedBaseLength = Math.max(
        8,
        maxLength - extension.length - 3
    );

    return `${baseName.slice(
        0,
        allowedBaseLength
    )}...${extension}`;
}