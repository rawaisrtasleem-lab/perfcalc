const faqs = [
    {
        question: "What is the aspect ratio?",
        answer:
            "It is the proportion between the width and the height of an image or video, written as two numbers such as 16:9. It describes the shape of the frame, not its pixel size.",
    },
    {
        question: "How do I find the aspect ratio of an image?",
        answer:
            "Upload the image, or type its width and height into the Aspect Ratio Finder. The exact ratio and the closest standard ratio are shown right away.",
    },
    {
        question: "How do I calculate an aspect ratio by hand?",
        answer:
            "Divide the width and the height by their greatest common divisor. For 1920 × 1080, the GCD is 120, which gives 16:9.",
    },
    {
        question: "What is the difference between aspect ratio and resolution?",
        answer:
            "Aspect ratio is the shape of the frame. Resolution is the amount of detail, measured in pixels or in pixels per inch for print. Two images can have very different resolutions and the same aspect ratio.",
    },
    {
        question: "Are 1280 × 720, 1920 × 1080, and 2560 × 1440 all 16:9?",
        answer:
            "Yes. All three simplify exactly to 16:9.",
    },
    {
        question: "Is 1366 × 768 exactly 16:9?",
        answer:
            "No. It reduces to 683:384, which is very close to 16:9 but not identical.",
    },
    {
        question: "What is the aspect ratio of a phone photo?",
        answer:
            "Many phone cameras save photos at 4:3, such as 4032 × 3024. It depends on the camera and the mode, so check the actual file.",
    },
    {
        question: "How do I find a missing width or height?",
        answer:
            "Select a preset ratio and enter the dimension you know. The Aspect Ratio Finder fills in the other one.",
    },
    {
        question: "Does resizing change the aspect ratio?",
        answer:
            "Not if both sides are scaled by the same amount. Scaling 4000 × 3000 down to 800 × 600 keeps the ratio at 4:3. The ratio changes only when the sides are scaled differently or the image is cropped.",
    },
    {
        question: "How do I convert 4:3 to 16:9 without cropping?",
        answer:
            "You cannot do it without a trade-off. You can crop, add padding, or stretch the image. Adding padding keeps the whole picture without distortion.",
    },
    {
        question: "Which aspect ratio is best for YouTube, Instagram, or TikTok?",
        answer:
            "16:9 is common for standard YouTube videos. 9:16 is common for TikTok, Instagram Reels, Stories, and YouTube Shorts. Instagram feed posts commonly use 1:1 and 4:5.",
    },
    {
        question: "Can I check several images at once?",
        answer:
            "Yes. Select multiple files and the Aspect Ratio Finder lists each file's dimensions, ratio, closest standard ratio, and orientation in one table.",
    },
    {
        question: "Are my images uploaded to a server?",
        answer:
            "No. Images are read inside your browser, and the calculation happens on your device.",
    },
    {
        question: "Does the Aspect Ratio Finder work on mobile?",
        answer:
            "Yes. It works in modern mobile browsers and the layout adjusts to smaller screens.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

const examples = [
    ["1280 × 720", "16:9", "Landscape", "HD video"],
    ["1920 × 1080", "16:9", "Landscape", "Full HD video"],
    ["2560 × 1440", "16:9", "Landscape", "QHD displays"],
    ["3840 × 2160", "16:9", "Landscape", "4K UHD video"],
    ["1080 × 1920", "9:16", "Portrait", "Vertical video"],
    ["1080 × 1080", "1:1", "Square", "Square social posts"],
    ["1080 × 1350", "4:5", "Portrait", "Portrait social posts"],
    ["4032 × 3024", "4:3", "Landscape", "Many phone photos"],
    ["3000 × 2000", "3:2", "Landscape", "Many camera photos"],
    ["1920 × 1200", "8:5 (16:10)", "Landscape", "Some laptop screens"],
    ["2560 × 1080", "64:27 (about 21:9)", "Landscape", "Ultrawide displays"],
    ["2048 × 1080", "256:135", "Landscape", "2K cinema"],
    ["1366 × 768", "683:384 (about 16:9)", "Landscape", "Older laptop screens"],
];

const platformRatios = [
    ["Standard YouTube video", "16:9", "1920 × 1080"],
    ["YouTube Shorts, Reels, Stories, TikTok", "9:16", "1080 × 1920"],
    ["Square social post", "1:1", "1080 × 1080"],
    ["Portrait social post", "4:5", "1080 × 1350"],
    ["Link preview image", "About 1.91:1", "1200 × 630"],
    ["Pinterest pin", "2:3", "1000 × 1500"],
    ["Common print sizes", "2:3 (4 × 6 in), 4:5 (8 × 10 in)", "–"],
];

export default function AspectRatioFinderSeo() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
                }}
            />

            <article className="space-y-12 text-slate-300">
                <section aria-labelledby="aspect-ratio-intro">
                    <h2
                        id="aspect-ratio-intro"
                        className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
                    >
                        Aspect Ratio Finder – Find Perfect Image &amp; Video Dimensions
                    </h2>
                    <p className="mt-4 leading-7 text-slate-400">
                        Enter a width and a height, or upload an image, and the Aspect Ratio Finder
                        shows the simplified ratio, decimal value, orientation, and the closest
                        standard ratio. It also calculates a missing dimension for a target ratio
                        such as 16:9.
                    </p>
                </section>

                <nav
                    aria-label="Table of contents"
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6"
                >
                    <h2 className="text-lg font-semibold text-white">On this page</h2>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {[
                            ["Overview", "overview"],
                            ["Features", "features"],
                            ["How to use the tool", "how-to-use"],
                            ["Calculate a ratio by hand", "calculate-by-hand"],
                            ["Common ratio examples", "examples"],
                            ["Ratios for popular platforms", "platform-ratios"],
                            ["Changing an image's ratio", "change-ratio"],
                            ["Common problems", "common-problems"],
                            ["Frequently asked questions", "faqs"],
                        ].map(([label, id]) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-cyan-300"
                                >
                                    <span className="text-cyan-500" aria-hidden="true">→</span>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <section id="overview" className="scroll-mt-24" aria-labelledby="overview-heading">
                    <h2 id="overview-heading" className="text-2xl font-bold text-white">
                        Overview
                    </h2>
                    <div className="mt-4 space-y-4 leading-7 text-slate-400">
                        <p>
                            Uploading a photo only to see it crop awkwardly or stretch out of shape
                            is frustrating. Guessing dimensions rarely works, and doing the math by
                            hand takes time. The Aspect Ratio Finder gives you the exact ratio,
                            orientation, and matching dimensions in seconds.
                        </p>
                        <p>
                            Aspect ratio is the proportion between the width and the height of an
                            image, video, screen, or frame. It is written as two numbers separated
                            by a colon, such as 16:9 or 4:3. A 1920 × 1080 frame and a 1280 × 720
                            frame both simplify to 16:9. Their pixel counts differ, but the shape
                            is the same.
                        </p>
                        <h3 className="pt-2 text-lg font-semibold text-slate-200">
                            Aspect ratio, dimensions, and resolution are different things
                        </h3>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>Dimensions are the pixel counts of a file, such as 4032 × 3024.</li>
                            <li>Aspect ratio is the proportion of those two numbers. For 4032 × 3024 it is 4:3.</li>
                            <li>Resolution relates pixels to physical size, such as pixels per inch when printing. It says nothing about the shape of the frame.</li>
                        </ul>
                        <p>
                            A small 640 × 480 thumbnail and a large 4032 × 3024 photo share the
                            same 4:3 ratio, even though one has far more pixels.
                        </p>
                    </div>
                </section>

                <section id="features" className="scroll-mt-24" aria-labelledby="features-heading">
                    <h2 id="features-heading" className="text-2xl font-bold text-white">Features</h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <FeatureCard title="Instant calculation" text="Enter a width and height to get the simplified ratio, decimal value, orientation, and closest common ratio." />
                        <FeatureCard title="Preset ratios" text="Choose 1:1, 4:3, 3:2, 16:9, 9:16, 4:5, 5:4, or 21:9. The proportions stay locked, so changing one dimension updates the other." />
                        <FeatureCard title="Image upload" text="Upload a JPG, PNG, GIF, or WebP file and the Aspect Ratio Finder reads its real pixel width and height." />
                        <FeatureCard title="Bulk checking" text="Select several images at once and compare their dimensions, ratios, and orientations in one table." />
                        <FeatureCard title="Visual preview" text="See a proportional preview of the result next to the numbers." />
                        <FeatureCard title="Privacy first" text="Images are read inside your browser and are not sent to a server." />
                    </div>
                    <p className="mt-5 leading-7 text-slate-400">
                        Video files cannot be uploaded. For a video, type its width and height into
                        the two boxes.
                    </p>
                </section>

                <section id="how-to-use" className="scroll-mt-24" aria-labelledby="how-to-use-heading">
                    <h2 id="how-to-use-heading" className="text-2xl font-bold text-white">
                        How to Use the Aspect Ratio Finder
                    </h2>
                    <div className="mt-7 space-y-7">
                        <HowToItem number="1" title="Find the ratio from dimensions">
                            Enter the width and height in pixels. The Aspect Ratio Finder reduces
                            them to the simplest ratio and shows the decimal value, orientation,
                            and closest standard ratio.
                        </HowToItem>
                        <HowToItem number="2" title="Find a missing dimension">
                            Choose a preset such as 16:9 and enter the one dimension you already
                            know. The other dimension is filled in automatically.
                        </HowToItem>
                        <HowToItem number="3" title="Check an image">
                            Select or drag in a JPG, PNG, GIF, or WebP file. Its natural pixel size
                            is read in your browser and the ratio is shown.
                        </HowToItem>
                        <HowToItem number="4" title="Check many images">
                            Select several files together. The results table lists each file's
                            dimensions, simplified ratio, closest common ratio, and orientation,
                            making inconsistent proportions easy to spot.
                        </HowToItem>
                    </div>
                </section>

                <section id="calculate-by-hand" className="scroll-mt-24" aria-labelledby="calculate-heading">
                    <h2 id="calculate-heading" className="text-2xl font-bold text-white">
                        How to Find an Aspect Ratio by Hand
                    </h2>
                    <div className="mt-4 space-y-4 leading-7 text-slate-400">
                        <p>To simplify a ratio, divide both numbers by their greatest common divisor (GCD).</p>
                        <p>
                            For 1920 × 1080, the GCD is 120. Then 1920 ÷ 120 = 16 and
                            1080 ÷ 120 = 9, so the ratio is 16:9.
                        </p>
                        <h3 className="pt-2 font-semibold text-slate-200">Find a missing dimension</h3>
                        <p>New height = new width × (original height ÷ original width)</p>
                        <p>
                            For example, an image is 1920 × 1080 and you need it 1600 pixels wide.
                            The new height is 1600 × (1080 ÷ 1920) = 900, so the result is
                            1600 × 900.
                        </p>
                        <p>The decimal value is simply width ÷ height. For 4:3 it is 1.333, and for 16:9 it is 1.778.</p>
                    </div>
                </section>

                <section id="examples" className="scroll-mt-24" aria-labelledby="examples-heading">
                    <h2 id="examples-heading" className="text-2xl font-bold text-white">
                        Common Aspect Ratio Examples
                    </h2>
                    <RatioTable headings={["Resolution", "Aspect ratio", "Orientation", "Common use"]} rows={examples} />
                    <p className="mt-4 leading-7 text-slate-400">
                        Not every size reduces to a familiar ratio. For example, 1366 × 768 is
                        683:384, very close to 16:9 but not exactly 16:9. The Aspect Ratio Finder
                        shows both the exact ratio and the closest standard ratio.
                    </p>
                </section>

                <section id="platform-ratios" className="scroll-mt-24" aria-labelledby="platform-heading">
                    <h2 id="platform-heading" className="text-2xl font-bold text-white">
                        Aspect Ratios for Popular Platforms
                    </h2>
                    <p className="mt-4 leading-7 text-slate-400">
                        Platforms change their recommendations from time to time, so check the
                        platform's own help page before a final export.
                    </p>
                    <RatioTable headings={["Use", "Commonly used ratio", "Example size"]} rows={platformRatios} />
                </section>

                <section id="change-ratio" className="scroll-mt-24" aria-labelledby="change-heading">
                    <h2 id="change-heading" className="text-2xl font-bold text-white">
                        Changing an Image From One Ratio to Another
                    </h2>
                    <p className="mt-4 leading-7 text-slate-400">
                        You cannot change an image's ratio without giving something up. There are
                        three options.
                    </p>
                    <div className="mt-6 space-y-4">
                        <ProblemCard title="Crop">
                            Cut away part of the picture. Turning a 1440 × 1080 image (4:3) into
                            16:9 at the same width gives 1440 × 810, so 270 pixels of height (25%)
                            are removed.
                        </ProblemCard>
                        <ProblemCard title="Add padding">
                            Keep the whole picture and fill the empty space. A 1440 × 1080 image
                            placed in a 1920 × 1080 frame gets 240 pixels of empty space on each side.
                        </ProblemCard>
                        <ProblemCard title="Stretch">
                            Force the image to the new size. This distorts the picture, so it is
                            rarely a good choice.
                        </ProblemCard>
                    </div>
                </section>

                <section id="common-problems" className="scroll-mt-24" aria-labelledby="problems-heading">
                    <h2 id="problems-heading" className="text-2xl font-bold text-white">
                        Common Aspect Ratio Problems
                    </h2>
                    <div className="mt-6 space-y-4">
                        <ProblemCard title="Distorted images">
                            Resizing without keeping the original proportions stretches or squashes
                            the picture. Check the original ratio first and scale both sides by the
                            same amount.
                        </ProblemCard>
                        <ProblemCard title="Wrong platform dimensions">
                            If your image has a different ratio from the platform's frame, it may be
                            cropped, padded, or moved when displayed.
                        </ProblemCard>
                        <ProblemCard title="Exact ratio versus nearest ratio">
                            The exact ratio describes your actual image. The nearest standard ratio
                            tells you which common format it most resembles.
                        </ProblemCard>
                        <ProblemCard title="Slow manual checks">
                            Checking many files one by one takes time. Bulk checking shows all of
                            them in one table.
                        </ProblemCard>
                    </div>
                </section>

                <section id="faqs" className="scroll-mt-24" aria-labelledby="faqs-heading">
                    <h2 id="faqs-heading" className="text-2xl font-bold text-white">
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-6 space-y-3">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="group rounded-xl border border-slate-800 bg-slate-950/50">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-medium text-slate-200 sm:px-5">
                                    <span>{faq.question}</span>
                                    <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-cyan-400 transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <div className="border-t border-slate-800 px-4 py-4 sm:px-5">
                                    <p className="leading-7 text-slate-400">{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
            </article>
        </>
    );
}

function FeatureCard({ title, text }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
            <h3 className="font-semibold text-slate-200">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
        </div>
    );
}

function HowToItem({ number, title, children }) {
    return (
        <div className="flex gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-bold text-cyan-300">
                {number}
            </div>
            <div>
                <h3 className="font-semibold text-slate-200">{title}</h3>
                <p className="mt-2 leading-7 text-slate-400">{children}</p>
            </div>
        </div>
    );
}

function ProblemCard({ title, children }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
            <h3 className="font-semibold text-slate-200">{title}</h3>
            <p className="mt-2 leading-7 text-slate-400">{children}</p>
        </div>
    );
}

function RatioTable({ headings, rows }) {
    return (
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-800">
            <div className="overflow-x-auto">
                <table className="min-w-[620px] w-full text-left text-sm">
                    <thead className="bg-slate-950 text-slate-400">
                        <tr>
                            {headings.map((heading) => (
                                <th key={heading} className="px-4 py-3 font-medium">{heading}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-950/40 text-slate-300">
                        {rows.map((row) => (
                            <tr key={row[0]}>
                                {row.map((value, index) => (
                                    <td key={`${row[0]}-${index}`} className={`whitespace-nowrap px-4 py-3 ${index === 1 ? "font-semibold text-cyan-400" : ""}`}>
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}