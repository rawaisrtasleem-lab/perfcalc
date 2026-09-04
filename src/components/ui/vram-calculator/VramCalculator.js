import CalculatorTabs from "./CalculatorTabs";

export default function VramCalculator() {
    return (
        <div className="mx-auto w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
                {/* Top glow */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-2/3 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative p-4 sm:p-6 md:p-8">
                    <CalculatorTabs />
                </div>
            </div>

            <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
                VRAM results are estimates. Actual memory usage can vary by
                model architecture, inference engine, game, driver, and
                workload.
            </p>
        </div>
    );
}