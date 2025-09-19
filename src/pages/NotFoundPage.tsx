import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-yellow-100 flex items-center justify-center"
        >
            <div className="max-w-2xl mx-auto px-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <img src="/lemon.png" alt="lemon" className="w-20 h-20 opacity-50" />
                    <h1 className="text-6xl font-bold text-[#177455]">404</h1>
                </div>

                <h2 className="text-3xl font-bold text-[#177455] mb-4">Page Not Found</h2>

                <p className="text-lg text-[#177455] mb-8 max-w-lg mx-auto">
                    Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-8 py-3 bg-[#177455] text-white rounded-lg font-semibold hover:bg-[#177455]/80 transition-colors"
                    >
                        Go Home
                    </Link>
                    <Link
                        to="/docs"
                        className="px-8 py-3 border-2 border-[#177455] text-[#177455] rounded-lg font-semibold hover:bg-[#177455] hover:text-white transition-colors"
                    >
                        Browse Docs
                    </Link>
                </div>

                <div className="mt-12 bg-yellow-200 border border-yellow-300 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#177455] mb-3">Quick Links</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link to="/" className="text-[#177455] hover:text-[#177455]/80">Home</Link>
                        <Link to="/docs" className="text-[#177455] hover:text-[#177455]/80">Documentation</Link>
                        <Link to="/sponsor" className="text-[#177455] hover:text-[#177455]/80">Sponsor</Link>
                        <a
                            href="https://github.com/Sehnya/peezy-cli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#177455] hover:text-[#177455]/80"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}