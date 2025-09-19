import { useState } from 'react'
import { motion } from 'framer-motion'

interface InlineCodeProps {
    children: string
    className?: string
}

export function InlineCode({ children, className = '' }: InlineCodeProps) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(children)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <div className={`inline-flex items-center group ${className}`}>
            <code
                className="text-[#177455] font-mono bg-yellow-100 px-2 py-1 rounded cursor-pointer hover:bg-yellow-200 transition-colors"
                onClick={copyToClipboard}
            >
                {children}
            </code>

            {copied && (
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="ml-2 text-xs text-[#177455] bg-yellow-100 px-2 py-1 rounded"
                >
                    ✓ Copied
                </motion.span>
            )}
        </div>
    )
}