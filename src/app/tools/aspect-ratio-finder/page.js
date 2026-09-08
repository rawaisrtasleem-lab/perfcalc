import AspectRatioFinder from "@/components/ui/aspect-ratio-finder/AspectRatioFinder";
import RelatedTools from "@/components/ui/RelatedTools";
import AspectRatioFinderSeo from "@/components/seo/aspect-ratio-finder";

export default function Page() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-1000 text-slate-200">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-4 top-20 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl sm:left-10 sm:h-72 sm:w-72 md:left-20 md:h-96 md:w-96" />

            <div className="pointer-events-none absolute bottom-20 right-4 h-64 w-64 rounded-full bg-cyan-600/15 blur-3xl sm:right-10 sm:h-72 sm:w-72 md:right-20 md:h-96 md:w-96" />

            {/* Hero + Tool */}
            <section className="relative z-10 mx-auto mt-6 max-w-6xl px-4 sm:mt-8 sm:px-6 lg:px-8">
                <div className="mx-auto mb-6 max-w-4xl text-center md:mb-10">
                    <h1 className="mb-4 text-3xl font-bold leading-tight text-cyan-400 sm:text-4xl md:text-5xl">
                        Aspect Ratio Finder – Find Perfect Image & Video Dimensions
                    </h1>

                    <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base">
                        Find your image or video aspect ratio instantly. Enter
                        dimensions or upload an image to detect its width, height,
                        simplified ratio, orientation, and closest standard aspect
                        ratio.
                    </p>
                </div>

                <AspectRatioFinder />
            </section>

            {/* Related Tools */}
            <div className="relative z-10">
                <RelatedTools />
            </div>

            {/* SEO Content */}
            <section className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <AspectRatioFinderSeo />
            </section>
        </main>
    );
}