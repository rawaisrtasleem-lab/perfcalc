function ProgressBar({ value }) {
    return (
        <div className="mt-4">
            <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                    className="
          h-full
          bg-linear-to-r
          from-indigo-500
          to-emerald-400
          transition-all
          duration-500
          "
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}

export default ProgressBar;