import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Navigation } from './Navigation'

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children }: LayoutProps) {
    const location = useLocation()
    const isDocsPage = location.pathname === '/docs'

    if (isDocsPage) {
        return (
            <div className="min-h-screen bg-yellow-100">
                <Navigation />
                <main>
                    {children}
                </main>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[rgb(254,236,117)]">
            <Navigation />
            <main className="min-h-screen min-w-screen font-medium antialiased">
                {children}
            </main>
        </div>
    )
}