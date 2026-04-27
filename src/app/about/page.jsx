export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10 text-gray-100">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center sm:text-left">
        About Us – GameTools
      </h1>

      <p className="text-gray-400 leading-relaxed">
        Welcome to GameTools. We provide free and easy-to-use online gaming tools designed to help gamers improve their performance and make smarter decisions. 
        Our platform includes tools like FPS Calculator, Bottleneck Calculator, DPS Calculator, and XP Calculator to give accurate insights into gaming and PC performance.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Our mission is to simplify complex calculations and provide users with instant, reliable results. 
        Whether you want to check your PC performance, calculate damage output, or track your leveling progress, our tools are built to save you time and improve your experience.
      </p>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Focus</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>Providing accurate and fast results</li>
          <li>Creating user-friendly tools</li>
          <li>Helping gamers optimize performance</li>
        </ul>
      </div>

      <p className="text-gray-400 leading-relaxed">
        All tools on our website are based on researched data, formulas, and real-world scenarios. 
        However, results may vary depending on system configuration and usage.
      </p>

      <p className="text-gray-400 leading-relaxed">
        We are continuously improving our platform by adding new tools and updating existing ones to ensure the best user experience.
      </p>

      <div className="mt-10 text-center">
        <p className="text-lg md:text-xl font-semibold text-gray-200 mb-4">
          Have Feedback?
        </p>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          If you have any questions or suggestions, feel free to reach out. We value your feedback and are always looking to improve GameTools for our community.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-colors">
          📩 Contact Us
        </button>
      </div>
    </section>
  )
}
