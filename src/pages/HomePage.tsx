import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FeatureIcon } from '../components/ui/FeatureIcon'

export function HomePage() {
    const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true })
    const [templatesRef, templatesInView] = useInView({ threshold: 0.3, triggerOnce: true })
    const [installRef, installInView] = useInView({ threshold: 0.3, triggerOnce: true })

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
        >
            {/* Hero Section */}
            <div className="text-center items-center flex relative flex-col justify drop-shadow-md bg-yellow-200 p-10 h-screen">
                <img src="lemon.png" className='w-96' />
                <img src="peezy.png" className='w-96' />
                <p className="text-xl text-[#177455] max-w-3xl mx-auto mt-10 mb-8">
                    A next-generation CLI that transforms how developers create, maintain, and distribute modern applications.
                    From curated full-stack templates to intelligent project migrations, Peezy CLI delivers enterprise-grade
                    tooling with developer-first experience.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link
                        to="/docs"
                        className="px-8 py-3 bg-[#177455] text-white rounded-lg font-semibold hover:bg-[#177455]/80 transition-colors"
                    >
                        Get Started
                    </Link>
                    <a
                        href="https://github.com/Sehnya/peezy-cli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-[#177455] text-[#177455] rounded-lg font-semibold hover:bg-[#177455] hover:text-white transition-colors"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>

            {/* Quick Install Section */}
            <motion.section
                ref={installRef}
                initial={{ opacity: 0, y: 30 }}
                animate={installInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="py-20 bg-yellow-100"
            >
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <img src="lemon.png" alt="lemon" className="w-12 h-12" />
                        <h2 className="text-4xl font-bold text-[#177455]">Quick Install</h2>
                    </div>

                    <p className="text-lg text-[#177455] mb-8">
                        Get up and running in seconds with our native binaries
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-yellow-200 border border-yellow-300 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-[#177455] mb-4">macOS & Linux</h3>
                            <div className="bg-yellow-100 rounded-lg p-4 font-mono text-sm text-[#177455]">
                                brew install Sehnya/peezy/peezy
                            </div>
                        </div>

                        <div className="bg-yellow-200 border border-yellow-300 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-[#177455] mb-4">Windows</h3>
                            <div className="bg-yellow-100 rounded-lg p-4 font-mono text-sm text-[#177455]">
                                scoop install peezy
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="bg-yellow-200 border border-yellow-300 rounded-lg p-6 max-w-2xl mx-auto">
                            <h3 className="text-xl font-semibold text-[#177455] mb-4">Universal Installer</h3>
                            <div className="bg-yellow-100 rounded-lg p-4 font-mono text-sm text-[#177455]">
                                curl -fsSL https://get.peezy.dev | bash
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                ref={featuresRef}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="py-20 bg-yellow-200"
            >
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <img src="lemon.png" alt="lemon" className="w-12 h-12" />
                            <h2 className="text-4xl font-bold text-[#177455]">Why Choose Peezy?</h2>
                        </div>
                        <p className="text-lg text-[#177455] max-w-3xl mx-auto">
                            Built for modern developers who value speed, security, and simplicity
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                iconType: "speed" as const,
                                title: "Lightning Fast",
                                description: "Zero-network scaffolding with all templates embedded. Works completely offline."
                            },
                            {
                                iconType: "security" as const,
                                title: "Enterprise Security",
                                description: "Sigstore integration with keyless signing and transparency logs for production-grade security."
                            },
                            {
                                iconType: "developer" as const,
                                title: "Developer First",
                                description: "Interactive prompts with smart defaults and enhanced guidance for the best DX."
                            },
                            {
                                iconType: "migration" as const,
                                title: "Smart Migration",
                                description: "Intelligent project updates with conflict resolution. Never lose your customizations."
                            },
                            {
                                iconType: "platform" as const,
                                title: "Multi-Platform",
                                description: "Native binaries for macOS, Linux, and Windows. No Node.js required."
                            },
                            {
                                iconType: "production" as const,
                                title: "Production Ready",
                                description: "Deterministic builds with SHA256 verification and comprehensive health monitoring."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-yellow-100 border border-yellow-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="mb-4">
                                    <FeatureIcon type={feature.iconType} className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#177455] mb-3">{feature.title}</h3>
                                <p className="text-[#177455] text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Templates Showcase */}
            <motion.section
                ref={templatesRef}
                initial={{ opacity: 0, y: 30 }}
                animate={templatesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="py-20 bg-yellow-100"
            >
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <img src="lemon.png" alt="lemon" className="w-12 h-12" />
                            <h2 className="text-4xl font-bold text-[#177455]">Hero Templates</h2>
                        </div>
                        <p className="text-lg text-[#177455] max-w-3xl mx-auto">
                            Production-ready templates that save hours of setup with modern tooling and best practices built-in
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "nextjs-fullstack",
                                title: "Next.js Full-Stack",
                                description: "Complete Next.js app with auth, database, and modern UI",
                                features: ["Next.js 14 + App Router", "NextAuth.js", "PostgreSQL + Drizzle", "Tailwind CSS"],
                                command: "peezy new nextjs-fullstack my-app"
                            },
                            {
                                name: "express-fullstack",
                                title: "Express Full-Stack",
                                description: "Express + React full-stack with shared authentication",
                                features: ["Express.js + TypeScript", "React + Vite", "JWT Authentication", "Concurrent Dev"],
                                command: "peezy new express-fullstack my-api"
                            },
                            {
                                name: "react-spa-advanced",
                                title: "React SPA Advanced",
                                description: "Modern React SPA with all modern features",
                                features: ["React 18 + TypeScript", "Zustand State", "TanStack Query", "Framer Motion"],
                                command: "peezy new react-spa-advanced my-spa"
                            }
                        ].map((template, index) => (
                            <motion.div
                                key={template.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={templatesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-yellow-200 border border-yellow-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-semibold text-[#177455] mb-3 font-mono">{template.name}</h3>
                                <p className="text-[#177455] mb-4 text-sm">{template.description}</p>

                                <div className="space-y-2 mb-6">
                                    {template.features.map((feature) => (
                                        <div key={feature} className="flex items-center text-xs text-[#177455]/80">
                                            <div className="w-1 h-1 bg-[#177455] rounded-full mr-2"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-yellow-100 rounded-lg p-3 font-mono text-xs text-[#177455] mb-4">
                                    $ {template.command}
                                </div>

                                <Link
                                    to="/docs"
                                    className="inline-block w-full text-center px-4 py-2 bg-[#177455] text-white rounded-lg text-sm font-medium hover:bg-[#177455]/80 transition-colors"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>



            {/* Call to Action */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 bg-yellow-100"
            >
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <img src="lemon.png" alt="lemon" className="w-16 h-16" />
                        <h2 className="text-4xl font-bold text-[#177455]">Ready to Get Started?</h2>
                    </div>

                    <p className="text-xl text-[#177455] mb-8 max-w-2xl mx-auto">
                        Join thousands of developers who are building faster with Peezy CLI
                    </p>

                    <div className="bg-yellow-200 border border-yellow-300 rounded-lg p-6 max-w-2xl mx-auto mb-8">
                        <div className="font-mono text-lg text-[#177455]">
                            $ peezy new nextjs-fullstack my-next-big-thing
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/docs"
                            className="px-8 py-3 bg-[#177455] text-white rounded-lg font-semibold hover:bg-[#177455]/80 transition-colors"
                        >
                            Get Started Now
                        </Link>
                        <a
                            href="https://github.com/Sehnya/peezy-cli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border-2 border-[#177455] text-[#177455] rounded-lg font-semibold hover:bg-[#177455] hover:text-white transition-colors"
                        >
                            Star on GitHub
                        </a>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}