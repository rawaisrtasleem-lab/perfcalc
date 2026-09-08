"use client";

import { useEffect, useState } from "react";

export default function CopyResultButton({ text }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;

        const timer = setTimeout(() => {
            setCopied(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, [copied]);

    const handleCopy = async () => {
        if (!text) return;

        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
        } catch {
            const textarea = document.createElement("textarea");

            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";

            document.body.appendChild(textarea);

            textarea.select();
            document.execCommand("copy");

            document.body.removeChild(textarea);

            setCopied(true);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-950/70 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-300"
            aria-label="Copy aspect ratio result"
        >
            {copied ? (
                <>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12.5l4 4L19 7"
                        />
                    </svg>

                    Copied
                </>
            ) : (
                <>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                        aria-hidden="true"
                    >
                        <rect
                            x="8"
                            y="8"
                            width="11"
                            height="11"
                            rx="2"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"
                        />
                    </svg>

                    Copy Result
                </>
            )}
        </button>
    );
}