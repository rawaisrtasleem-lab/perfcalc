import DownloadTimeCalculator from "@/components/ui/DownloadTimeCalculator"
 import DownloadTimeCalculatorSeo from "@/components/seo/download-time-calculator"
import RelatedTools from "@/components/ui/RelatedTools"

export const metadata = {
    title: "Download Time Calculator — How Long Will a File Take? | PerfCalcPro",
    description:
        "Free download time calculator. Enter your file size and internet speed to instantly estimate download time, with real-world overhead and connection comparisons.",
    alternates: { canonical: "https://perfcalcpro.com/download-time-calculator" },
    openGraph: {
        title: "Download Time Calculator | PerfCalcPro",
        description: "Instantly estimate how long any file takes to download on your connection.",
        url: "https://perfcalcpro.com/download-time-calculator",
        type: "website",
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebApplication",
            name: "Download Time Calculator",
            url: "https://perfcalcpro.com/download-time-calculator",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How is download time calculated?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Download time = file size (converted to bits) ÷ internet speed (in bits per second). Since file sizes use bytes and internet speeds use bits, the file size is multiplied by 8 first. We also apply ~8% real-world overhead for network protocols.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why is my actual download slower than my internet plan?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Internet plans advertise speed in megabits (Mbps), but browsers show megabytes (MB/s) — 8x smaller. Protocol overhead, Wi-Fi signal, server limits, and other devices on your network also reduce real speed.",
                    },
                },
            ],
        },
    ],
}

export default function Page() {
    return (
        <main className="relative bg-slate-1000 text-slate-200 overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML= {{__html: JSON.stringify(jsonLd)  }} />

            {/* glowing background */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />

            <section className="max-w-6xl mt-8 px-4 sm:px-6 lg:px-8 items-center">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h1 className="text-4xl md:text-4xl font-bold text-cyan-400 mb-4">Download Time Calculator</h1>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Enter a file size and your internet speed to instantly see how long the download
                        will take. The calculator converts bytes to bits correctly and includes real-world
                        network overhead, so the estimate matches what you actually experience.
                    </p>
                </div>
                <DownloadTimeCalculator />
            </section>

            <RelatedTools />

           <section className="max-w-4xl m-16 pt-4 px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-100">
                <DownloadTimeCalculatorSeo />
            </section> 
        </main>
    )
}