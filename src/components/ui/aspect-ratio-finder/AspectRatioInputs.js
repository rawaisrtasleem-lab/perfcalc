export default function AspectRatioInputs({
    width,
    height,
    onWidthChange,
    onHeightChange,
    onFiles,
    onDrop,
    isDragging,
    setIsDragging,
    fileInputRef,
    fileName,
    previewUrl,
    selectedRatio,
    onReset,
}) {
    const handleInputChange = (event) => {
        onFiles(event.target.files);
    };

    return (
        <div className="space-y-5">
            {/* Dimensions */}
            <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                        <h3 className="font-semibold text-slate-200">
                            Image Dimensions
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                            Enter width and height in pixels.
                        </p>
                    </div>

                    {selectedRatio && (
                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                            Locked {selectedRatio.label}
                        </span>
                    )}
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-400">
                            Width
                        </span>

                        <div className="relative">
                            <input
                                type="number"
                                inputMode="numeric"
                                min="1"
                                value={width}
                                onChange={(event) =>
                                    onWidthChange(event.target.value)
                                }
                                placeholder="1920"
                                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 pr-12 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                            />

                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500">
                                px
                            </span>
                        </div>
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-400">
                            Height
                        </span>

                        <div className="relative">
                            <input
                                type="number"
                                inputMode="numeric"
                                min="1"
                                value={height}
                                onChange={(event) =>
                                    onHeightChange(event.target.value)
                                }
                                placeholder="1080"
                                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 pr-12 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                            />

                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500">
                                px
                            </span>
                        </div>
                    </label>
                </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-800" />
                <span className="text-xs font-medium uppercase tracking-wider text-slate-600">
                    or upload
                </span>
                <div className="h-px flex-1 bg-slate-800" />
            </div>

            {/* Upload */}
            <div>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/gif,image/webp"
                    multiple
                    onChange={handleInputChange}
                    className="hidden"
                />

                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    onDragEnter={(event) => {
                        event.preventDefault();
                        setIsDragging(true);
                    }}
                    onDragOver={(event) => {
                        event.preventDefault();
                        setIsDragging(true);
                    }}
                    onDragLeave={(event) => {
                        event.preventDefault();
                        setIsDragging(false);
                    }}
                    onDrop={onDrop}
                    className={`group flex w-full flex-col items-center justify-center rounded-xl border border-dashed px-4 py-7 text-center transition sm:py-8 ${
                        isDragging
                            ? "border-cyan-400 bg-cyan-500/10"
                            : "border-slate-700 bg-slate-900/60 hover:border-cyan-500/50 hover:bg-slate-900"
                    }`}
                >
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-500/15">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 13.5v4A2.5 2.5 0 007.5 20h9a2.5 2.5 0 002.5-2.5v-4"
                            />
                        </svg>
                    </span>

                    <span className="text-sm font-semibold text-slate-200">
                        Drop images here or tap to browse
                    </span>

                    <span className="mt-1.5 text-xs leading-relaxed text-slate-500">
                        JPG, PNG, GIF or WebP • Select multiple files for bulk
                        checking
                    </span>
                </button>
            </div>

            {/* Preview */}
            {previewUrl && (
                <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                    <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-3 py-2.5">
                        <div className="min-w-0">
                            <p className="truncate text-xs font-medium text-slate-300">
                                {fileName}
                            </p>
                        </div>

                        <span className="shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                            Local preview
                        </span>
                    </div>

                    <div className="flex min-h-[190px] items-center justify-center bg-[linear-gradient(45deg,rgba(255,255,255,0.025)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.025)_75%),linear-gradient(45deg,rgba(255,255,255,0.025)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.025)_75%)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] p-3">
                        <img
                            src={previewUrl}
                            alt={
                                fileName
                                    ? `Preview of ${fileName}`
                                    : "Uploaded image preview"
                            }
                            className="max-h-64 max-w-full rounded-lg object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Privacy */}
            <div className="flex gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-3">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3l7 3v5c0 4.5-2.8 8.3-7 10-4.2-1.7-7-5.5-7-10V6l7-3z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                    />
                </svg>

                <div>
                    <p className="text-xs font-semibold text-emerald-300">
                        Privacy first
                    </p>

                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                        Images are analyzed inside your browser and are not sent
                        to a server.
                    </p>
                </div>
            </div>

            {(width || height || previewUrl) && (
                <button
                    type="button"
                    onClick={onReset}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
                >
                    Reset Tool
                </button>
            )}
        </div>
    );
}