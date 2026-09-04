import {
    GAMING_RESOLUTIONS,
    TEXTURE_QUALITY_OPTIONS,
    RAY_TRACING_OPTIONS,
    MOD_OPTIONS,
} from "@/lib/vram-calculator/vramData";

const selectClass =
    "w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10";

const labelClass =
    "mb-2 block text-sm font-medium text-slate-300";

export default function GamingInputs({
    values,
    onChange,
}) {
    return (
        <div className="space-y-6">
            {/* Resolution */}
            <div>
                <label
                    htmlFor="gaming-resolution"
                    className={labelClass}
                >
                    Resolution
                </label>

                <select
                    id="gaming-resolution"
                    value={values.resolution}
                    onChange={(event) =>
                        onChange(
                            "resolution",
                            event.target.value
                        )
                    }
                    className={selectClass}
                >
                    {GAMING_RESOLUTIONS.map(
                        (option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label} —{" "}
                                {option.width} ×{" "}
                                {option.height}
                            </option>
                        )
                    )}
                </select>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    Higher resolutions require larger
                    frame buffers and more texture memory.
                </p>
            </div>

            {/* Texture Quality */}
            <div>
                <label
                    htmlFor="texture-quality"
                    className={labelClass}
                >
                    Texture Quality
                </label>

                <select
                    id="texture-quality"
                    value={values.textureQuality}
                    onChange={(event) =>
                        onChange(
                            "textureQuality",
                            event.target.value
                        )
                    }
                    className={selectClass}
                >
                    {TEXTURE_QUALITY_OPTIONS.map(
                        (option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        )
                    )}
                </select>
            </div>

            {/* Ray tracing */}
            <div>
                <label
                    htmlFor="ray-tracing"
                    className={labelClass}
                >
                    Ray Tracing
                </label>

                <select
                    id="ray-tracing"
                    value={values.rayTracing}
                    onChange={(event) =>
                        onChange(
                            "rayTracing",
                            event.target.value
                        )
                    }
                    className={selectClass}
                >
                    {RAY_TRACING_OPTIONS.map(
                        (option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        )
                    )}
                </select>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    Ray tracing can add substantial VRAM
                    pressure at higher resolutions.
                </p>
            </div>

            {/* Mods */}
            <div>
                <label
                    htmlFor="gaming-mods"
                    className={labelClass}
                >
                    Mods / Texture Packs
                </label>

                <select
                    id="gaming-mods"
                    value={values.mods}
                    onChange={(event) =>
                        onChange(
                            "mods",
                            event.target.value
                        )
                    }
                    className={selectClass}
                >
                    {MOD_OPTIONS.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    High-resolution texture packs can add
                    several gigabytes of memory usage.
                </p>
            </div>
        </div>
    );
}