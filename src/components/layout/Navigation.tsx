import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { GitHubButton } from '../ui/GitHubButton'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Docs', href: '/docs' },
    { name: 'Sponsor', href: '/sponsor' },
]

export function Navigation() {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-yellow-100 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-green-950">
                            <div className='flex flex-row items-center'>
                                <img src="lemon.png" className="w-12 sm:w-16" alt="lemon-logo" />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`relative px-3 py-2 text-sm font-light font-mono transition-colors ${location.pathname === item.href
                                    ? 'text-orange-600'
                                    : 'text-green-800 hover:text-green-950'
                                    }`}
                            >
                                {item.name}
                                {location.pathname === item.href && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
                                        layoutId="activeTab"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                        <GitHubButton />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-green-800 hover:text-green-950 focus:outline-none focus:text-green-950 p-2"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-yellow-100 border-t border-yellow-200">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 text-base font-mono transition-colors ${location.pathname === item.href
                                    ? 'text-orange-600 bg-yellow-200'
                                    : 'text-green-800 hover:text-green-950 hover:bg-yellow-200'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="px-3 py-2">
                            <GitHubButton />
                        </div>
                    </div>
                </motion.div>
            </div>
        </nav>
    )
}