const faqs = [
    {
        question: "What is aspect ratio?",
        answer:
            "Aspect ratio is the proportional relationship between an image or video's width and height, shown as two numbers like 16:9. It describes the shape of the frame rather than its actual pixel size.",
    },
    {
        question: "How do I convert 4:3 to 16:9 without cropping?",
        answer:
            "You cannot change a 4:3 image to 16:9 without either cropping, adding padding, or stretching the image. Adding letterbox padding preserves the entire original image without distortion.",
    },
    {
        question:
            "Which aspect ratio is best for YouTube, Instagram, or TikTok?",
        answer:
            "16:9 is widely used for standard YouTube videos. Vertical 9:16 is common for TikTok, Instagram Reels, Stories, and YouTube Shorts. Instagram feed posts also commonly use ratios such as 1:1 and 4:5.",
    },
    {
        question: "Does this tool work on mobile?",
        answer:
            "Yes. The Aspect Ratio Finder works directly in modern mobile browsers and its layout automatically adapts to smaller screens.",
    },
    {
        question: "How do I find my aspect ratio?",
        answer:
            "Enter the width and height of your image or video into the Aspect Ratio Finder. The tool simplifies the dimensions into their exact aspect ratio and also shows the closest common ratio.",
    },
    {
        question: "Is 1280x720 a 16:9 aspect ratio?",
        answer:
            "Yes. 1280x720 simplifies exactly to 16:9, which is one of the most common widescreen HD aspect ratios.",
    },
    {
        question: "Is 1920x1080 a 16:9 aspect ratio?",
        answer:
            "Yes. 1920x1080, commonly known as Full HD, simplifies exactly to 16:9.",
    },
    {
        question: "Is 2560x1440 a 16:9 aspect ratio?",
        answer:
            "Yes. 2560x1440, commonly known as QHD or 1440p, also simplifies exactly to 16:9.",
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
                {/* Intro */}
                <section aria-labelledby="aspect-ratio-intro">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                            Last Updated: September 2026
                        </span>
                    </div>

                    <h2
                        id="aspect-ratio-intro"
                        className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
                    >
                        Aspect Ratio Finder – Find Perfect Image &amp; Video
                        Dimensions
                    </h2>

                    <p className="mt-4 leading-7 text-slate-400">
                        Uploading a photo only to watch it crop awkwardly or
                        stretch out of shape is frustrating, especially when a
                        deadline is close. Guessing dimensions rarely works, and
                        manual math wastes time you do not have. An{" "}
                        <strong className="font-semibold text-slate-200">
                            aspect ratio finder
                        </strong>{" "}
                        removes that guesswork. Enter your width and height, and
                        you will get the exact ratio, orientation, and matching
                        resolution in seconds, with no separate calculator
                        needed.
                    </p>
                </section>

                {/* Table of Contents */}
                <nav
                    aria-label="Table of contents"
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6"
                >
                    <h2 className="text-lg font-semibold text-white">
                        Table of Contents
                    </h2>

                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {[
                            ["Overview", "overview"],
                            ["Features", "features"],
                            ["How to Use This Tool", "how-to-use"],
                            ["Common Problems", "common-problems"],
                            ["FAQs", "faqs"],
                        ].map(([label, id]) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className="group flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-cyan-300"
                                >
                                    <span className="text-cyan-500">
                                        →
                                    </span>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Overview */}
                <section
                    id="overview"
                    className="scroll-mt-24"
                    aria-labelledby="overview-heading"
                >
                    <h2
                        id="overview-heading"
                        className="text-2xl font-bold text-white"
                    >
                        Overview
                    </h2>

                    <div className="mt-4 space-y-4 leading-7 text-slate-400">
                        <p>
                            Aspect ratio is the proportion between the width and
                            height of an image, video, display, or frame. It is
                            normally written as two numbers separated by a
                            colon, such as{" "}
                            <strong className="font-semibold text-slate-200">
                                16:9
                            </strong>{" "}
                            or{" "}
                            <strong className="font-semibold text-slate-200">
                                4:3
                            </strong>
                            .
                        </p>

                        <p>
                            For example, a resolution of 1920 × 1080 pixels and
                            a resolution of 1280 × 720 pixels have the same
                            aspect ratio because both dimensions simplify to
                            16:9. Their pixel counts are different, but the shape
                            of the frame is identical.
                        </p>

                        <p>
                            People search for this calculation under several
                            different names. You may know it as an{" "}
                            <strong className="font-semibold text-slate-200">
                                image ratio finder
                            </strong>
                            ,{" "}
                            <strong className="font-semibold text-slate-200">
                                pixel ratio calculator
                            </strong>
                            ,{" "}
                            <strong className="font-semibold text-slate-200">
                                aspect ratio calc
                            </strong>
                            , picture ratio calculator, or simply a way to check
                            an image's aspect ratio.
                        </p>

                        <p>
                            Whatever term you use, the underlying calculation is
                            the same. This{" "}
                            <strong className="font-semibold text-slate-200">
                                aspect ratio finder
                            </strong>{" "}
                            is designed for designers, video editors, social
                            media creators, photographers, developers, and
                            anyone who needs accurate dimensions quickly.
                        </p>
                    </div>
                </section>

                {/* Features */}
                <section
                    id="features"
                    className="scroll-mt-24"
                    aria-labelledby="features-heading"
                >
                    <h2
                        id="features-heading"
                        className="text-2xl font-bold text-white"
                    >
                        Features
                    </h2>

                    <p className="mt-4 leading-7 text-slate-400">
                        A useful aspect ratio calculator should provide more
                        than a single number. This tool combines several common
                        image and video dimension tasks in one interface.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <FeatureCard
                            title="Instant Calculation"
                            text="Enter width and height to get the simplified aspect ratio, decimal value, orientation, and closest common ratio immediately."
                        />

                        <FeatureCard
                            title="Preset Ratios"
                            text="Choose common presets such as 16:9, 9:16, 4:3, 3:2, 1:1, 4:5, and 21:9 while keeping dimensions proportional."
                        />

                        <FeatureCard
                            title="Image Upload Support"
                            text="Upload a JPG, PNG, GIF, or WebP image and the tool automatically detects its actual pixel width and height."
                        />

                        <FeatureCard
                            title="Bulk Image Checking"
                            text="Select multiple images and compare their dimensions, exact ratios, closest standard ratios, and orientations in one place."
                        />

                        <FeatureCard
                            title="Clear Ratio Output"
                            text="View the simplified ratio, decimal value, orientation, closest preset, and a proportional visual preview side by side."
                        />

                        <FeatureCard
                            title="Privacy First"
                            text="Image dimensions are analyzed directly inside your browser. Your selected images do not need to be uploaded to a remote server for the calculation."
                        />
                    </div>
                </section>

                {/* How to Use */}
                <section
                    id="how-to-use"
                    className="scroll-mt-24"
                    aria-labelledby="how-to-use-heading"
                >
                    <h2
                        id="how-to-use-heading"
                        className="text-2xl font-bold text-white"
                    >
                        How to Use This Aspect Ratio Finder
                    </h2>

                    <p className="mt-4 leading-7 text-slate-400">
                        There are several ways to check an aspect ratio,
                        depending on the information you already have.
                    </p>

                    <div className="mt-7 space-y-7">
                        <HowToItem
                            number="1"
                            title="Find aspect ratio from dimensions"
                        >
                            Enter the width and height values into the two input
                            boxes above. The tool automatically reduces them to
                            their simplest proportional form and displays the
                            exact ratio, decimal value, orientation, and nearest
                            common format.
                        </HowToItem>

                        <HowToItem
                            number="2"
                            title="Calculate a missing dimension for a target ratio"
                        >
                            Select a preset ratio such as 16:9 and enter the one
                            dimension you already know. The missing width or
                            height updates automatically while keeping the
                            selected proportions locked.
                        </HowToItem>

                        <HowToItem
                            number="3"
                            title="Check aspect ratio by uploading an image"
                        >
                            Select or drag a JPG, PNG, GIF, or WebP image into
                            the upload area. The picture aspect ratio calculator
                            reads its natural pixel dimensions in your browser
                            and displays the exact and closest standard ratio.
                        </HowToItem>

                        <HowToItem
                            number="4"
                            title="Check multiple images at once"
                        >
                            Select several supported image files together. The
                            bulk results table displays each file's dimensions,
                            simplified ratio, closest common ratio, and
                            orientation without checking every file manually.
                        </HowToItem>
                    </div>
                </section>

                {/* Common Problems */}
                <section
                    id="common-problems"
                    className="scroll-mt-24"
                    aria-labelledby="common-problems-heading"
                >
                    <h2
                        id="common-problems-heading"
                        className="text-2xl font-bold text-white"
                    >
                        Common Aspect Ratio Problems
                    </h2>

                    <p className="mt-4 leading-7 text-slate-400">
                        Most image and video dimension problems come from a few
                        common mistakes. Understanding them can help you avoid
                        unnecessary cropping and distortion.
                    </p>

                    <div className="mt-6 space-y-4">
                        <ProblemCard title="Distorted Images">
                            Resizing an image without keeping its original
                            proportions can stretch or squash the content. Check
                            the original ratio before changing dimensions and
                            resize both sides proportionally.
                        </ProblemCard>

                        <ProblemCard title="Incorrect Platform Dimensions">
                            Social and video platforms often use specific frame
                            shapes. If your source image has a different ratio,
                            parts of it may be cropped, padded, or repositioned
                            when it is displayed.
                        </ProblemCard>

                        <ProblemCard title="Exact vs. Nearest Ratio Confusion">
                            Not every photo reduces to a familiar preset such as
                            16:9 or 4:3. The exact ratio describes the actual
                            image, while the closest standard ratio tells you
                            which common format it most closely resembles.
                        </ProblemCard>

                        <ProblemCard title="Manual Bulk Workflows">
                            Checking image dimensions individually becomes slow
                            when working with many files. Bulk analysis lets you
                            compare several images in one pass and quickly spot
                            files with inconsistent proportions.
                        </ProblemCard>
                    </div>
                </section>

                {/* Useful Examples */}
                <section aria-labelledby="examples-heading">
                    <h2
                        id="examples-heading"
                        className="text-2xl font-bold text-white"
                    >
                        Common Aspect Ratio Examples
                    </h2>

                    <div className="mt-5 overflow-hidden rounded-xl border border-slate-800">
                        <div className="overflow-x-auto">
                            <table className="min-w-[620px] w-full text-left text-sm">
                                <thead className="bg-slate-950 text-slate-400">
                                    <tr>
                                        <th className="px-4 py-3 font-medium">
                                            Resolution
                                        </th>
                                        <th className="px-4 py-3 font-medium">
                                            Aspect Ratio
                                        </th>
                                        <th className="px-4 py-3 font-medium">
                                            Orientation
                                        </th>
                                        <th className="px-4 py-3 font-medium">
                                            Common Use
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-800 bg-slate-950/40 text-slate-300">
                                    <RatioRow
                                        resolution="1920 × 1080"
                                        ratio="16:9"
                                        orientation="Landscape"
                                        use="Full HD video"
                                    />

                                    <RatioRow
                                        resolution="1280 × 720"
                                        ratio="16:9"
                                        orientation="Landscape"
                                        use="HD video"
                                    />

                                    <RatioRow
                                        resolution="2560 × 1440"
                                        ratio="16:9"
                                        orientation="Landscape"
                                        use="QHD displays"
                                    />

                                    <RatioRow
                                        resolution="1080 × 1920"
                                        ratio="9:16"
                                        orientation="Portrait"
                                        use="Vertical video"
                                    />

                                    <RatioRow
                                        resolution="1080 × 1080"
                                        ratio="1:1"
                                        orientation="Square"
                                        use="Square social posts"
                                    />

                                    <RatioRow
                                        resolution="1080 × 1350"
                                        ratio="4:5"
                                        orientation="Portrait"
                                        use="Portrait social posts"
                                    />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section
                    id="faqs"
                    className="scroll-mt-24"
                    aria-labelledby="faqs-heading"
                >
                    <h2
                        id="faqs-heading"
                        className="text-2xl font-bold text-white"
                    >
                        Frequently Asked Questions
                    </h2>

                    <div className="mt-6 space-y-3">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-xl border border-slate-800 bg-slate-950/50"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-medium text-slate-200 sm:px-5">
                                    <span>{faq.question}</span>

                                    <span
                                        aria-hidden="true"
                                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-cyan-400 transition-transform group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </summary>

                                <div className="border-t border-slate-800 px-4 py-4 sm:px-5">
                                    <p className="leading-7 text-slate-400">
                                        {faq.answer}
                                    </p>
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
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12.5l4 4L19 7"
                    />
                </svg>
            </div>

            <h3 className="font-semibold text-slate-200">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
                {text}
            </p>
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
                <h3 className="font-semibold text-slate-200">
                    {title}
                </h3>

                <p className="mt-2 leading-7 text-slate-400">
                    {children}
                </p>
            </div>
        </div>
    );
}

function ProblemCard({ title, children }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
            <h3 className="font-semibold text-slate-200">
                {title}
            </h3>

            <p className="mt-2 leading-7 text-slate-400">
                {children}
            </p>
        </div>
    );
}

function RatioRow({ resolution, ratio, orientation, use }) {
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-3">
                {resolution}
            </td>

            <td className="px-4 py-3 font-semibold text-cyan-400">
                {ratio}
            </td>

            <td className="px-4 py-3">
                {orientation}
            </td>

            <td className="px-4 py-3 text-slate-400">
                {use}
            </td>
        </tr>
    );
}