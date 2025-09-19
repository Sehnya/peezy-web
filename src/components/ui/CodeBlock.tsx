import { useState } from 'react'
import { motion } from 'framer-motion'

interface CodeBlockProps {
    children: React.ReactNode
    className?: string
}

export function CodeBlock({ children, className = '' }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        // Extract text content from children
        const getTextContent = (node: React.ReactNode): string => {
            if (typeof node === 'string') return node
            if (typeof node === 'number') return node.toString()
            if (Array.isArray(node)) return node.map(getTextContent).join('')
            if (node && typeof node === 'object' && 'props' in node) {
                return getTextContent(node.props.children)
            }
            return ''
        }

        const text = getTextContent(children)

        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <div className={`relative group ${className}`}>
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 font-mono text-sm">
                {children}
            </div>

            {/* Copy Button */}
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#177455] text-white px-2 py-1 rounded text-xs hover:bg-[#177455]/80"
            >
                {copied ? (
                    <motion.span
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-1"
                    >
                        ✓ Copied
                    </motion.span>
                ) : (
                    'Copy'
                )}
            </button>
        </div>
    )
}