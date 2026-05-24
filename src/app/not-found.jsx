'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-1000 text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block"
          >
            <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              404
            </div>
          </motion.div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
          Page Not Found
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        <div className="space-y-4">
          <p className="text-gray-300">
            Here are some helpful links instead:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/" 
                className="block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                🏠 Home
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/tools/fps-calculator" 
                className="block px-6 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
              >
                📊 FPS Calculator
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/tools/bottleneck-calculator" 
                className="block px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
              >
                ⚙️ Bottleneck
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
              >
                💬 Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyan-400/20">
          <p className="text-gray-500 text-sm">
            Error Code: 404 | <a href="/contact" className="text-cyan-400 hover:text-cyan-300">Report this issue</a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
