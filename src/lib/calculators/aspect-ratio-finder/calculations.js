import {
    COMMON_RATIOS,
    ORIENTATIONS,
} from "./constants";

/**
 * Greatest Common Divisor
 */
export function gcd(a, b) {
    let first = Math.abs(Math.round(Number(a)));
    let second = Math.abs(Math.round(Number(b)));

    if (!first || !second) {
        return 1;
    }

    while (second !== 0) {
        const remainder = first % second;

        first = second;
        second = remainder;
    }

    return first;
}

/**
 * Simplify dimensions into an exact aspect ratio.
 *
 * Example:
 * 1920 × 1080 -> 16:9
 */
export function simplifyRatio(width, height) {
    const w = Math.round(Number(width));
    const h = Math.round(Number(height));

    if (!isValidDimension(w) || !isValidDimension(h)) {
        return null;
    }

    const divisor = gcd(w, h);

    return {
        width: w / divisor,
        height: h / divisor,
        label: `${w / divisor}:${h / divisor}`,
    };
}

/**
 * Convert width / height into decimal ratio.
 *
 * Example:
 * 1920 / 1080 -> 1.7778
 */
export function calculateDecimalRatio(width, height) {
    const w = Number(width);
    const h = Number(height);

    if (!isValidDimension(w) || !isValidDimension(h)) {
        return null;
    }

    return w / h;
}

/**
 * Detect orientation.
 */
export function getOrientation(width, height) {
    const w = Number(width);
    const h = Number(height);

    if (!isValidDimension(w) || !isValidDimension(h)) {
        return ORIENTATIONS.UNKNOWN;
    }

    if (w === h) {
        return ORIENTATIONS.SQUARE;
    }

    return w > h
        ? ORIENTATIONS.LANDSCAPE
        : ORIENTATIONS.PORTRAIT;
}

/**
 * Find the closest common aspect ratio.
 */
export function getClosestRatio(
    width,
    height,
    ratios = COMMON_RATIOS
) {
    const decimal = calculateDecimalRatio(width, height);

    if (!decimal || !Array.isArray(ratios) || !ratios.length) {
        return null;
    }

    return ratios.reduce((closest, ratio) => {
        const ratioDecimal = ratio.width / ratio.height;
        const difference = Math.abs(decimal - ratioDecimal);

        if (!closest || difference < closest.difference) {
            return {
                ...ratio,
                decimal: ratioDecimal,
                difference,
                differencePercent:
                    (difference / ratioDecimal) * 100,
            };
        }

        return closest;
    }, null);
}

/**
 * Calculate height while preserving a target ratio.
 *
 * Example:
 * width = 1920, ratio = 16:9
 * result = 1080
 */
export function calculateHeightFromWidth(
    width,
    ratioWidth,
    ratioHeight
) {
    const w = Number(width);
    const rw = Number(ratioWidth);
    const rh = Number(ratioHeight);

    if (
        !isValidDimension(w) ||
        !isValidDimension(rw) ||
        !isValidDimension(rh)
    ) {
        return null;
    }

    return Math.round(w * (rh / rw));
}

/**
 * Calculate width while preserving a target ratio.
 *
 * Example:
 * height = 1080, ratio = 16:9
 * result = 1920
 */
export function calculateWidthFromHeight(
    height,
    ratioWidth,
    ratioHeight
) {
    const h = Number(height);
    const rw = Number(ratioWidth);
    const rh = Number(ratioHeight);

    if (
        !isValidDimension(h) ||
        !isValidDimension(rw) ||
        !isValidDimension(rh)
    ) {
        return null;
    }

    return Math.round(h * (rw / rh));
}

/**
 * Generic missing dimension calculator.
 */
export function calculateMissingDimension({
    width,
    height,
    ratioWidth,
    ratioHeight,
}) {
    const hasWidth = isValidDimension(Number(width));
    const hasHeight = isValidDimension(Number(height));

    if (!isValidDimension(Number(ratioWidth))) {
        return null;
    }

    if (!isValidDimension(Number(ratioHeight))) {
        return null;
    }

    if (hasWidth && !hasHeight) {
        return {
            width: Math.round(Number(width)),
            height: calculateHeightFromWidth(
                width,
                ratioWidth,
                ratioHeight
            ),
        };
    }

    if (!hasWidth && hasHeight) {
        return {
            width: calculateWidthFromHeight(
                height,
                ratioWidth,
                ratioHeight
            ),
            height: Math.round(Number(height)),
        };
    }

    return null;
}

/**
 * Calculate total image area in pixels.
 */
export function calculatePixelArea(width, height) {
    const w = Number(width);
    const h = Number(height);

    if (!isValidDimension(w) || !isValidDimension(h)) {
        return null;
    }

    return Math.round(w * h);
}

/**
 * Analyze dimensions in one function.
 * This is the main function the UI can use.
 */
export function analyzeAspectRatio(width, height) {
    const w = Number(width);
    const h = Number(height);

    if (!isValidDimension(w) || !isValidDimension(h)) {
        return null;
    }

    const simplified = simplifyRatio(w, h);
    const decimal = calculateDecimalRatio(w, h);
    const closest = getClosestRatio(w, h);
    const orientation = getOrientation(w, h);
    const area = calculatePixelArea(w, h);

    return {
        width: Math.round(w),
        height: Math.round(h),

        simplified,

        ratio: simplified?.label || null,

        decimal,

        orientation,

        closest,

        area,

        smartTip: getSmartTip({
            width: w,
            height: h,
            closestRatio: closest,
        }),
    };
}

/**
 * Generate useful resizing guidance.
 *
 * This is deterministic browser-side guidance,
 * so no external AI/API call is required.
 */
export function getSmartTip({
    width,
    height,
    closestRatio,
}) {
    const w = Number(width);
    const h = Number(height);

    if (
        !isValidDimension(w) ||
        !isValidDimension(h) ||
        !closestRatio
    ) {
        return "Enter valid dimensions or upload an image to get a resizing suggestion.";
    }

    const currentDecimal = w / h;

    const targetDecimal =
        closestRatio.width / closestRatio.height;

    const differencePercent =
        (Math.abs(currentDecimal - targetDecimal) /
            targetDecimal) *
        100;

    if (differencePercent < 0.1) {
        return `Your image matches ${closestRatio.label} almost perfectly. You can resize it proportionally without noticeable cropping.`;
    }

    if (differencePercent < 1) {
        return `Your image is extremely close to ${closestRatio.label}. Only a very small crop or padding adjustment is needed to make it exact.`;
    }

    if (differencePercent < 3) {
        return `Your image is close to ${closestRatio.label}. A minor crop or padding adjustment can convert it to that standard ratio while keeping most of the frame intact.`;
    }

    if (w > h) {
        return `This is a landscape image. ${closestRatio.label} is its closest common ratio. Keep width and height proportional when resizing to avoid stretching.`;
    }

    if (h > w) {
        return `This is a portrait image. ${closestRatio.label} is its closest common ratio. If you need that exact format, crop or add padding instead of stretching the image.`;
    }

    return "This is a square image. Keep width and height equal when resizing to preserve its 1:1 shape.";
}

/**
 * Check whether a dimension is usable.
 */
export function isValidDimension(value) {
    return (
        Number.isFinite(Number(value)) &&
        Number(value) > 0
    );
}