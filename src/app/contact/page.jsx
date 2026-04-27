export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10 text-gray-100">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center sm:text-left">
        Contact Us
      </h1>

      <p className="text-gray-400 leading-relaxed">
        If you have any questions, suggestions, or feedback, feel free to contact us. 
        We value your input and are always working to improve our tools and services.
      </p>

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
        <p className="text-lg font-semibold text-white mb-2">📧 Email</p>
        <p className="text-cyan-400 font-medium">your-email@example.com</p>
        <p className="text-gray-400 text-sm mt-2">
          We try to respond to all queries within 24–48 hours.
        </p>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">You Can Contact Us Regarding:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>Website issues</li>
          <li>Tool errors or suggestions</li>
          <li>Business inquiries</li>
        </ul>
      </div>

      <p className="text-gray-400 leading-relaxed">
        We value your feedback and are always working to improve our tools and services.
      </p>
    </section>
  )
}
