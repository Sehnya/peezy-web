import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GitHubButton } from '../ui/GitHubButton'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Docs', href: '/docs' },
    { name: 'Sponsor', href: '/sponsor' },
]

export function Navigation() {
    const location = useLocation()

    return (
        <nav className="bg-yellow-100 sticky aboslute top-0 z-30">
            <div className="max-screen mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-green-950">
                            <div className='flex flex-row items-center '>
                                <img src="lemon.png" className="w-16" alt="lemon-logo" />
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-8">
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
                </div>
            </div>
        </nav>
    )
}