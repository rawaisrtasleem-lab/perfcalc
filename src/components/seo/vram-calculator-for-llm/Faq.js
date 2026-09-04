export default function Faq({ items }) {
    return (
        <section
            id="faq"
            className="scroll-mt-24"
        >
            <h2 className="text-2xl font-bold text-slate-100">
                Frequently Asked Questions
            </h2>

            <div className="mt-6 divide-y divide-slate-800 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50">
                {items.map((item) => (
                    <div
                        key={item.question}
                        className="p-5 sm:p-6"
                    >
                        <h3 className="font-semibold leading-6 text-slate-200">
                            {item.question}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-slate-400">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}