import { motion } from 'framer-motion'

export function SponsorPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-yellow-100"
        >
            {/* Hero Section */}
            <div className="bg-yellow-200 py-20">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <img src="lemon.png" alt="lemon" className="w-16 h-16" />
                        <h1 className="text-5xl font-bold text-[#177455]">Sponsor Peezy CLI</h1>
                    </div>
                    <p className="text-xl text-[#177455] max-w-3xl mx-auto">
                        Help us build the future of developer tooling. Your sponsorship enables us to create better templates,
                        improve performance, and provide world-class support to the developer community.
                    </p>
                </div>
            </div>

            {/* Why Sponsor Section */}
            <div className="py-20">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#177455] mb-4">Why Sponsor Peezy CLI?</h2>
                        <p className="text-lg text-[#177455] max-w-2xl mx-auto">
                            Your support directly impacts thousands of developers worldwide
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Accelerate Development',
                                description: 'Help us create more templates and tools that save developers hours of setup time'
                            },
                            {
                                title: 'Enhance Security',
                                description: 'Fund security audits and implement enterprise-grade security features'
                            },
                            {
                                title: 'Global Impact',
                                description: 'Support a tool used by developers in over 50 countries worldwide'
                            },
                            {
                                title: 'Better Documentation',
                                description: 'Enable us to create comprehensive guides, tutorials, and learning resources'
                            },
                            {
                                title: 'Performance Improvements',
                                description: 'Fund infrastructure and optimization work to make Peezy even faster'
                            },
                            {
                                title: 'Community Support',
                                description: 'Help us provide better support and build a stronger developer community'
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-yellow-200 border border-yellow-300 rounded-lg p-6"
                            >
                                <h3 className="text-lg font-semibold text-[#177455] mb-3">{benefit.title}</h3>
                                <p className="text-[#177455] text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Current Sponsors */}
            <div className="py-20 bg-yellow-200">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#177455] mb-4">Our Amazing Sponsors</h2>
                        <p className="text-lg text-[#177455]">
                            Thank you to these organizations and individuals supporting Peezy CLI
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-12">
                            <h3 className="text-xl font-semibold text-[#177455] mb-4">Be the First Sponsor!</h3>
                            <p className="text-[#177455] mb-8 max-w-2xl mx-auto">
                                Your support helps us maintain and improve Peezy CLI for the entire developer community.
                                Every contribution, no matter the size, makes a difference.
                            </p>

                            {/* GitHub Sponsor Heart Button */}
                            <div className="flex justify-center mb-6">
                                <iframe
                                    src="https://github.com/sponsors/Sehnya/button"
                                    title="Sponsor Sehnya"
                                    height="32"
                                    width="114"
                                    style={{ border: 0, borderRadius: '6px' }}
                                />
                            </div>

                            <p className="text-[#177455] text-sm">
                                Secure sponsorship through GitHub Sponsors
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <div className="py-20">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#177455] mb-4">Your Impact</h2>
                        <p className="text-lg text-[#177455]">
                            See how your sponsorship directly contributes to the project
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-yellow-200 border border-yellow-300 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-[#177455] mb-3">Development Time</h3>
                            <p className="text-[#177455] text-sm leading-relaxed">
                                Your sponsorship allows us to dedicate more time to developing new features,
                                fixing bugs, and maintaining the codebase.
                            </p>
                        </div>

                        <div className="bg-yellow-200 border border-yellow-300 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-[#177455] mb-3">Infrastructure Costs</h3>
                            <p className="text-[#177455] text-sm leading-relaxed">
                                Help cover hosting, CI/CD, and other infrastructure costs that keep
                                Peezy CLI running smoothly for everyone.
                            </p>
                        </div>

                        <div className="bg-yellow-200 border border-yellow-300 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-[#177455] mb-3">New Templates</h3>
                            <p className="text-[#177455] text-sm leading-relaxed">
                                Fund the creation of new, cutting-edge templates that incorporate
                                the latest technologies and best practices.
                            </p>
                        </div>

                        <div className="bg-yellow-200 border border-yellow-300 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-[#177455] mb-3">Community Support</h3>
                            <p className="text-[#177455] text-sm leading-relaxed">
                                Enable us to provide better documentation, tutorials, and support
                                to help developers get the most out of Peezy CLI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="py-20 bg-yellow-200">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <img src="lemon.png" alt="lemon" className="w-12 h-12" />
                        <h2 className="text-3xl font-bold text-[#177455]">Ready to Support Peezy?</h2>
                    </div>

                    <p className="text-lg text-[#177455] mb-8 max-w-2xl mx-auto">
                        Your sponsorship makes a real difference. Join us in building better developer tools for everyone.
                    </p>

                    <div className="flex justify-center mb-6">
                        <iframe
                            src="https://github.com/sponsors/Sehnya/button"
                            title="Sponsor Sehnya"
                            height="32"
                            width="114"
                            style={{ border: 0, borderRadius: '6px' }}
                        />
                    </div>

                    <div className="text-sm text-[#177455]">
                        <p>All sponsorships are processed securely through GitHub Sponsors</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}