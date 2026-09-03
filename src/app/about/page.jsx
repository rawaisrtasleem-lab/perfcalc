import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-gray-100">
      <div className="space-y-12">

        {/* Header */}
        <header className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-center sm:text-left">
            About PerfCalcPro
          </h1>

          <p className="text-gray-400 leading-relaxed">
            PerfCalcPro is a free online platform built to make gaming and PC
            performance calculations easier to understand. Our goal is to
            provide practical calculators and helpful resources that allow
            gamers and PC users to evaluate performance, compare scenarios,
            and make more informed decisions.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Our tools cover areas such as FPS estimates, hardware bottlenecks,
            damage-per-second calculations, experience progression, and other
            gaming-related calculations. We aim to make these calculations
            accessible without requiring users to work through complicated
            formulas manually.
          </p>
        </header>

        {/* Mission */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Our mission is to simplify technical and gaming-related
            calculations through tools that are useful, understandable, and
            easy to access. Whether you are estimating gaming performance,
            comparing hardware configurations, calculating damage output, or
            tracking progression, PerfCalcPro is designed to help you get
            useful results quickly.
          </p>
        </div>

        {/* What We Provide */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What We Provide
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-400">
            <li>
              Gaming performance calculators designed to simplify common
              calculations
            </li>
            <li>
              PC performance tools for exploring different hardware scenarios
            </li>
            <li>
              DPS and game-related calculators for comparing possible outcomes
            </li>
            <li>
              XP and progression tools for planning gaming goals
            </li>
            <li>
              Guides and articles that explain gaming and PC performance topics
              in a practical way
            </li>
          </ul>
        </div>

        {/* How Tools Are Built */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How Our Calculators Work
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            PerfCalcPro calculators use formulas, user-provided inputs,
            publicly available technical information, and relevant performance
            assumptions depending on the tool.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We aim to make our calculations as useful and consistent as
            possible. However, many gaming and hardware results are estimates
            rather than guaranteed measurements. Actual results can vary
            because of hardware configuration, game updates, graphics
            settings, drivers, background applications, cooling, optimization,
            and other factors.
          </p>
        </div>

        {/* Principles */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What We Focus On
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Useful Results
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We focus on providing calculations that help users understand
                and compare gaming or PC performance scenarios.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Simple Experience
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our tools are designed to be straightforward so users can get
                results without unnecessary complexity.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Clear Information
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We aim to explain what calculations mean and provide useful
                context instead of showing numbers without explanation.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Continuous Improvement
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We review our tools and content over time and may update them
                as games, hardware, available information, and user needs
                change.
              </p>
            </div>
          </div>
        </div>

        {/* Accuracy */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Accuracy and Limitations
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            We work to provide useful and carefully designed calculations, but
            PerfCalcPro results should be treated as estimates unless a tool
            specifically states otherwise.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Performance can differ between systems and situations, so results
            from our calculators should not be considered a guarantee of
            exact real-world performance. We encourage users to consider
            benchmarks, manufacturer specifications, game-specific information,
            and their own system conditions when making important decisions.
          </p>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Content Approach
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            In addition to calculators, PerfCalcPro publishes informational
            articles and guides related to gaming, computer hardware, and
            performance.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We aim to keep our content clear, useful, and relevant. When we
            identify outdated information, errors, or opportunities to improve
            an explanation, we may review and update the affected page.
          </p>
        </div>

        {/* Independence */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Transparency
          </h2>

          <p className="text-gray-400 leading-relaxed">
            PerfCalcPro may use advertising to support the operation and
            maintenance of the website. Advertising does not change the
            formulas or calculation results produced by our tools. Additional
            information about advertising, cookies, and data practices is
            available in our{" "}
            <Link
              href="/privacy-policy"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Feedback */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Help Us Improve
          </h2>

          <p className="text-gray-400 leading-relaxed">
            If you notice an incorrect result, outdated information, technical
            issue, or have an idea for a new tool, we welcome your feedback.
            User reports can help us identify areas that need improvement.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Questions or Feedback?
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
            If you have a question, suggestion, correction, or business
            inquiry, you can reach us through our Contact page.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}