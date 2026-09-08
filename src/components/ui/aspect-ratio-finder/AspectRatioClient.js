"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import AspectRatioInputs from "./AspectRatioInputs";
import AspectRatioResults from "./AspectRatioResults";
import CommonRatios from "./CommonRatios";

import {
    analyzeAspectRatio,
    calculateHeightFromWidth,
    calculateWidthFromHeight,
} from "@/lib/calculators/aspect-ratio-finder/calculations";

import {
    COMMON_RATIOS,
} from "@/lib/calculators/aspect-ratio-finder/constants";

import {
    createFileId,
    filterSupportedImages,
} from "@/lib/calculators/aspect-ratio-finder/helpers";

export default function AspectRatioClient() {
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const [selectedRatio, setSelectedRatio] = useState(null);

    const [previewUrl, setPreviewUrl] = useState("");
    const [fileName, setFileName] = useState("");

    const [bulkResults, setBulkResults] = useState([]);

    const [isDragging, setIsDragging] = useState(false);

    const fileInputRef = useRef(null);

    const numericWidth = Number(width);
    const numericHeight = Number(height);

    /*
     * Main Aspect Ratio Result
     */
    const result = useMemo(() => {
        if (
            !numericWidth ||
            !numericHeight ||
            numericWidth <= 0 ||
            numericHeight <= 0
        ) {
            return null;
        }

        return analyzeAspectRatio(
            numericWidth,
            numericHeight
        );
    }, [numericWidth, numericHeight]);

    /*
     * Clean preview URL when component unmounts.
     */
    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    /*
     * Width Input
     *
     * If a preset ratio is selected,
     * automatically calculate height.
     */
    const handleWidthChange = (value) => {
        setWidth(value);

        const newWidth = Number(value);

        if (
            selectedRatio &&
            newWidth > 0
        ) {
            const calculatedHeight =
                calculateHeightFromWidth(
                    newWidth,
                    selectedRatio.width,
                    selectedRatio.height
                );

            if (calculatedHeight) {
                setHeight(
                    String(calculatedHeight)
                );
            }
        }
    };

    /*
     * Height Input
     *
     * If a preset ratio is selected,
     * automatically calculate width.
     */
    const handleHeightChange = (value) => {
        setHeight(value);

        const newHeight = Number(value);

        if (
            selectedRatio &&
            newHeight > 0
        ) {
            const calculatedWidth =
                calculateWidthFromHeight(
                    newHeight,
                    selectedRatio.width,
                    selectedRatio.height
                );

            if (calculatedWidth) {
                setWidth(
                    String(calculatedWidth)
                );
            }
        }
    };

    /*
     * Select Common Ratio
     */
    const handleRatioSelect = (ratio) => {
        setSelectedRatio(ratio);

        /*
         * If width already exists,
         * calculate new height.
         */
        if (numericWidth > 0) {
            const calculatedHeight =
                calculateHeightFromWidth(
                    numericWidth,
                    ratio.width,
                    ratio.height
                );

            if (calculatedHeight) {
                setHeight(
                    String(calculatedHeight)
                );
            }

            return;
        }

        /*
         * Otherwise if height exists,
         * calculate new width.
         */
        if (numericHeight > 0) {
            const calculatedWidth =
                calculateWidthFromHeight(
                    numericHeight,
                    ratio.width,
                    ratio.height
                );

            if (calculatedWidth) {
                setWidth(
                    String(calculatedWidth)
                );
            }
        }
    };

    /*
     * Read One Image
     *
     * Everything runs locally in browser.
     */
    const processSingleImage = (file) => {
        if (!file) {
            return;
        }

        const supportedFiles =
            filterSupportedImages([file]);

        if (!supportedFiles.length) {
            return;
        }

        const imageFile = supportedFiles[0];

        const objectUrl =
            URL.createObjectURL(imageFile);

        const image = new Image();

        image.onload = () => {
            setWidth(
                String(image.naturalWidth)
            );

            setHeight(
                String(image.naturalHeight)
            );

            setFileName(imageFile.name);

            setPreviewUrl((previousUrl) => {
                if (previousUrl) {
                    URL.revokeObjectURL(
                        previousUrl
                    );
                }

                return objectUrl;
            });

            /*
             * Uploaded image should use
             * its original ratio rather than
             * an active preset lock.
             */
            setSelectedRatio(null);
        };

        image.onerror = () => {
            URL.revokeObjectURL(objectUrl);
        };

        image.src = objectUrl;
    };

    /*
     * Analyze Multiple Images
     */
    const processBulkImages = async (files) => {
        const imageFiles =
            filterSupportedImages(files);

        if (!imageFiles.length) {
            setBulkResults([]);
            return;
        }

        const results = await Promise.all(
            imageFiles.map(
                (file) =>
                    new Promise((resolve) => {
                        const objectUrl =
                            URL.createObjectURL(
                                file
                            );

                        const image =
                            new Image();

                        image.onload = () => {
                            const analysis =
                                analyzeAspectRatio(
                                    image.naturalWidth,
                                    image.naturalHeight
                                );

                            URL.revokeObjectURL(
                                objectUrl
                            );

                            if (!analysis) {
                                resolve(null);
                                return;
                            }

                            resolve({
                                id: createFileId(
                                    file
                                ),

                                name: file.name,

                                width:
                                    analysis.width,

                                height:
                                    analysis.height,

                                ratio:
                                    analysis.ratio ||
                                    "—",

                                closest:
                                    analysis
                                        .closest
                                        ?.label ||
                                    "—",

                                orientation:
                                    analysis.orientation,
                            });
                        };

                        image.onerror = () => {
                            URL.revokeObjectURL(
                                objectUrl
                            );

                            resolve(null);
                        };

                        image.src = objectUrl;
                    })
            )
        );

        setBulkResults(
            results.filter(Boolean)
        );
    };

    /*
     * Handle File Selection
     */
    const handleFiles = (files) => {
        if (!files?.length) {
            return;
        }

        const supportedFiles =
            filterSupportedImages(files);

        if (!supportedFiles.length) {
            return;
        }

        /*
         * First image becomes main preview.
         */
        processSingleImage(
            supportedFiles[0]
        );

        /*
         * Multiple images get bulk results.
         */
        if (supportedFiles.length > 1) {
            processBulkImages(
                supportedFiles
            );
        } else {
            setBulkResults([]);
        }
    };

    /*
     * Drag & Drop
     */
    const handleDrop = (event) => {
        event.preventDefault();

        setIsDragging(false);

        handleFiles(
            event.dataTransfer.files
        );
    };

    /*
     * Reset Complete Tool
     */
    const handleReset = () => {
        setWidth("");
        setHeight("");

        setSelectedRatio(null);

        setFileName("");
        setBulkResults([]);

        setIsDragging(false);

        setPreviewUrl(
            (previousUrl) => {
                if (previousUrl) {
                    URL.revokeObjectURL(
                        previousUrl
                    );
                }

                return "";
            }
        );

        if (fileInputRef.current) {
            fileInputRef.current.value =
                "";
        }
    };

    return (
        <div className="space-y-5 sm:space-y-6">
            {/* Main Calculator */}
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-cyan-950/10 backdrop-blur-sm">

                {/* Header */}
                <div className="border-b border-slate-800 px-4 py-4 sm:px-6">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            Find Your Aspect Ratio
                        </h2>

                        <p className="text-sm leading-relaxed text-slate-400">
                            Enter dimensions manually
                            or upload one or multiple
                            images to detect their
                            ratios instantly.
                        </p>
                    </div>
                </div>

                {/* Inputs + Results */}
                <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <AspectRatioInputs
                        width={width}
                        height={height}
                        onWidthChange={
                            handleWidthChange
                        }
                        onHeightChange={
                            handleHeightChange
                        }
                        onFiles={
                            handleFiles
                        }
                        onDrop={
                            handleDrop
                        }
                        isDragging={
                            isDragging
                        }
                        setIsDragging={
                            setIsDragging
                        }
                        fileInputRef={
                            fileInputRef
                        }
                        fileName={
                            fileName
                        }
                        previewUrl={
                            previewUrl
                        }
                        selectedRatio={
                            selectedRatio
                        }
                        onReset={
                            handleReset
                        }
                    />

                    <AspectRatioResults
                        result={result}
                        previewUrl={
                            previewUrl
                        }
                        fileName={
                            fileName
                        }
                    />
                </div>
            </div>

            {/* Common Ratios */}
            <CommonRatios
                ratios={COMMON_RATIOS}
                selectedRatio={
                    selectedRatio
                }
                onSelect={
                    handleRatioSelect
                }
            />

            {/* Bulk Results */}
            {bulkResults.length > 1 && (
                <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80">

                    {/* Bulk Header */}
                    <div className="border-b border-slate-800 px-4 py-4 sm:px-6">
                        <h3 className="font-semibold text-white">
                            Bulk Image Results
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                            {
                                bulkResults.length
                            }{" "}
                            images analyzed locally
                            in your browser.
                        </p>
                    </div>

                    {/* Desktop / Tablet Table */}
                    <div className="hidden overflow-x-auto sm:block">
                        <table className="w-full min-w-[680px] text-left text-sm">
                            <thead className="bg-slate-900/80 text-xs uppercase tracking-wide text-slate-400">
                                <tr>
                                    <th className="px-5 py-3 font-medium">
                                        File
                                    </th>

                                    <th className="px-5 py-3 font-medium">
                                        Dimensions
                                    </th>

                                    <th className="px-5 py-3 font-medium">
                                        Exact Ratio
                                    </th>

                                    <th className="px-5 py-3 font-medium">
                                        Closest
                                    </th>

                                    <th className="px-5 py-3 font-medium">
                                        Orientation
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-800">
                                {bulkResults.map(
                                    (item) => (
                                        <tr
                                            key={
                                                item.id
                                            }
                                            className="text-slate-300"
                                        >
                                            <td className="max-w-[220px] truncate px-5 py-4 font-medium text-slate-200">
                                                {
                                                    item.name
                                                }
                                            </td>

                                            <td className="whitespace-nowrap px-5 py-4">
                                                {
                                                    item.width
                                                }{" "}
                                                ×{" "}
                                                {
                                                    item.height
                                                }
                                            </td>

                                            <td className="px-5 py-4 font-semibold text-cyan-400">
                                                {
                                                    item.ratio
                                                }
                                            </td>

                                            <td className="px-5 py-4">
                                                {
                                                    item.closest
                                                }
                                            </td>

                                            <td className="px-5 py-4">
                                                {
                                                    item.orientation
                                                }
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="divide-y divide-slate-800 sm:hidden">
                        {bulkResults.map(
                            (item) => (
                                <div
                                    key={
                                        item.id
                                    }
                                    className="space-y-3 p-4"
                                >
                                    <p className="break-all text-sm font-semibold text-slate-200">
                                        {
                                            item.name
                                        }
                                    </p>

                                    <div className="grid grid-cols-2 gap-3">
                                        <MobileResultItem
                                            label="Dimensions"
                                            value={`${item.width} × ${item.height}`}
                                        />

                                        <MobileResultItem
                                            label="Exact Ratio"
                                            value={
                                                item.ratio
                                            }
                                            highlight
                                        />

                                        <MobileResultItem
                                            label="Closest"
                                            value={
                                                item.closest
                                            }
                                        />

                                        <MobileResultItem
                                            label="Orientation"
                                            value={
                                                item.orientation
                                            }
                                        />
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </section>
            )}
        </div>
    );
}

function MobileResultItem({
    label,
    value,
    highlight = false,
}) {
    return (
        <div className="min-w-0 rounded-lg border border-slate-800 bg-slate-900/60 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                {label}
            </p>

            <p
                className={`mt-1 truncate text-sm font-semibold ${
                    highlight
                        ? "text-cyan-400"
                        : "text-slate-300"
                }`}
            >
                {value}
            </p>
        </div>
    );
}