import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GitHubRepo {
    stargazers_count: number
    forks_count: number
}

export function GitHubButton() {
    const [stars, setStars] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/Sehnya/peezy-cli')
                if (response.ok) {
                    const data: GitHubRepo = await response.json()
                    setStars(data.stargazers_count)
                }
            } catch (error) {
                console.error('Failed to fetch GitHub data:', error)
                // Fallback to a default number if API fails
                setStars(42)
            } finally {
                setLoading(false)
            }
        }

        fetchGitHubData()
    }, [])

    const formatStars = (count: number) => {
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}k`
        }
        return count.toString()
    }

    return (
        <motion.a
            href="https://github.com/Sehnya/peezy-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-[#177455] text-white rounded-lg hover:bg-[#177455]/80 transition-colors text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* GitHub Icon */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>

            <span>GitHub</span>

            {/* Star Count */}
            <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {loading ? (
                    <div className="w-6 h-3 bg-white/30 rounded animate-pulse" />
                ) : (
                    <span className="text-xs font-semibold">
                        {stars !== null ? formatStars(stars) : '—'}
                    </span>
                )}
            </div>
        </motion.a>
    )
}