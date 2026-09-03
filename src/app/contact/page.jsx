export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-gray-100">
      <div className="space-y-10">

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center sm:text-left">
            Contact Us
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Have a question, found an issue with one of our calculators, or
            want to share feedback? We&apos;d be happy to hear from you.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Your feedback helps us improve PerfCalcPro and provide more
            accurate, useful, and easy-to-use tools.
          </p>
        </header>

        {/* Email Card */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Email Us
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            For general questions, feedback, corrections, privacy requests,
            or business inquiries, you can contact us directly by email.
          </p>

          <a
            href="mailto:rawaisrtasleem@gmail.com"
            className="inline-block text-cyan-400 font-medium hover:text-cyan-300 transition-colors break-all"
          >
            rawaisrtasleem@gmail.com
          </a>

          <p className="text-gray-500 text-sm mt-4">
            We aim to review and respond to legitimate inquiries as soon as
            reasonably possible.
          </p>
        </div>

        {/* Contact Reasons */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What You Can Contact Us About
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-400">
            <li>
              Reporting errors, bugs, or technical problems with our calculators
            </li>
            <li>
              Suggesting improvements or new calculator features
            </li>
            <li>
              Reporting inaccurate or outdated information
            </li>
            <li>
              Questions about our tools, articles, or website
            </li>
            <li>
              Privacy or personal data-related requests
            </li>
            <li>
              Advertising, partnership, or other legitimate business inquiries
            </li>
          </ul>
        </div>

        {/* Helpful Information */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Reporting a Tool Issue
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            If you are reporting a problem with one of our calculators, please
            include as much relevant information as possible, such as:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>The name or URL of the calculator</li>
            <li>The values or settings you entered</li>
            <li>The result you received</li>
            <li>What you expected the result to be</li>
          </ul>

          <p className="text-gray-400 leading-relaxed mt-4">
            Providing these details can help us investigate and correct issues
            more efficiently.
          </p>
        </div>

        {/* Privacy */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Privacy Requests
          </h2>

          <p className="text-gray-400 leading-relaxed">
            If your inquiry relates to privacy, personal information, cookies,
            or data rights, please mention &quot;Privacy Request&quot; in your
            email so that we can identify your request more easily. You can
            also review our{" "}
            <a
              href="/privacy-policy"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              Privacy Policy
            </a>{" "}
            for more information.
          </p>
        </div>

        {/* Important Notice */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-gray-500 text-sm leading-relaxed">
            Please do not send passwords, payment information, government-issued
            identification numbers, or other highly sensitive personal
            information by email.
          </p>
        </div>

      </div>
    </section>
  );
}