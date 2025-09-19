import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { CodeBlock } from '../components/ui/CodeBlock'
import { InlineCode } from '../components/ui/InlineCode'

const DocsPage = () => {
    const [activeSection, setActiveSection] = useState('installation')

    const sections = [
        {
            id: 'installation',
            title: 'Installation',
            subsections: [
                { id: 'homebrew', title: 'Homebrew (macOS/Linux)' },
                { id: 'scoop', title: 'Scoop (Windows)' },
                { id: 'universal', title: 'Universal Installer' },
                { id: 'npm', title: 'npm (Alternative)' }
            ]
        },
        {
            id: 'quick-start',
            title: 'Quick Start',
            subsections: [
                { id: 'hero-templates', title: 'Hero Templates' },
                { id: 'interactive-mode', title: 'Interactive Mode' },
                { id: 'first-project', title: 'Your First Project' }
            ]
        },
        {
            id: 'templates',
            title: 'Templates',
            subsections: [
                { id: 'nextjs-fullstack', title: 'Next.js Full-Stack' },
                { id: 'express-fullstack', title: 'Express Full-Stack' },
                { id: 'react-spa-advanced', title: 'React SPA Advanced' }
            ]
        },
        {
            id: 'commands',
            title: 'Commands',
            subsections: [
                { id: 'project-creation', title: 'Project Creation' },
                { id: 'migration', title: 'Migration' },
                { id: 'security', title: 'Security & Verification' },
                { id: 'management', title: 'Project Management' }
            ]
        },
        {
            id: 'features',
            title: 'Features',
            subsections: [
                { id: 'developer-experience', title: 'Developer Experience' },
                { id: 'project-management-features', title: 'Project Management' },
                { id: 'enterprise-ready', title: 'Enterprise Ready' }
            ]
        },
        {
            id: 'advanced',
            title: 'Advanced',
            subsections: [
                { id: 'database-integration', title: 'Database Integration' },
                { id: 'deterministic-builds', title: 'Deterministic Builds' },
                { id: 'ci-cd', title: 'CI/CD Integration' }
            ]
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section.id)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sections])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen bg-yellow-200 flex">
            {/* Sidebar */}
            <div className="w-80 bg-yellow-100 border-r border-yellow-300 fixed h-full overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-[#177455] mb-8">Documentation</h2>

                    <nav className="space-y-2">
                        {sections.map((section) => (
                            <div key={section.id}>
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === section.id
                                        ? 'bg-[#177455] text-white'
                                        : 'text-[#177455] hover:text-[#177455] hover:bg-yellow-50'
                                        }`}
                                >
                                    {section.title}
                                </button>

                                {section.subsections && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        {section.subsections.map((subsection) => (
                                            <button
                                                key={subsection.id}
                                                onClick={() => scrollToSection(subsection.id)}
                                                className="block w-full text-left px-3 py-1 text-xs text-[#177455]/70 hover:text-[#177455] transition-colors"
                                            >
                                                {subsection.title}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-80">
                <div className="max-w-4xl mx-auto px-8 py-12">

                    {/* Installation Section */}
                    <motion.section
                        id="installation"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <img src="lemon.png" alt="lemon" className="w-12 h-12" />
                            <h1 className="text-4xl font-bold text-[#177455]">Installation</h1>
                        </div>
                        <p className="text-[#177455] mb-8 text-lg">
                            Get Peezy CLI up and running on your system in seconds. Choose from native binaries for optimal performance,
                            or use npm for familiar package management. No Node.js required for native installations.
                        </p>

                        <div id="homebrew" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Homebrew (macOS/Linux)</h3>
                            <p className="text-[#177455] mb-4">Recommended for macOS and Linux users:</p>
                            <CodeBlock>
                                <div className="text-[#177455]">$ brew tap Sehnya/peezy</div>
                                <div className="text-[#177455]">$ brew install peezy</div>
                            </CodeBlock>
                        </div>

                        <div id="scoop" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Scoop (Windows)</h3>
                            <p className="text-[#177455] mb-4">For Windows users:</p>
                            <CodeBlock>
                                <div className="text-[#177455]">$ scoop bucket add peezy https://github.com/Sehnya/peezy-scoop</div>
                                <div className="text-[#177455]">$ scoop install peezy</div>
                            </CodeBlock>
                        </div>

                        <div id="universal" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Universal Installer</h3>
                            <p className="text-[#177455] mb-4">Works on all platforms:</p>
                            <CodeBlock>
                                <div className="text-[#177455]">$ curl -fsSL https://get.peezy.dev | bash</div>
                            </CodeBlock>
                        </div>

                        <div id="npm" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">npm (Alternative)</h3>
                            <p className="text-[#177455] mb-4">If you prefer using npm:</p>
                            <CodeBlock>
                                <div className="text-[#177455]">$ npm install -g peezy-cli</div>
                                <div className="text-[#177455]/60"># Or use with npx</div>
                                <div className="text-[#177455]">$ npx peezy-cli new</div>
                            </CodeBlock>
                        </div>
                    </motion.section>

                    {/* Quick Start Section */}
                    <motion.section
                        id="quick-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <img src="lemon.png" alt="lemon" className="w-12 h-12" />
                            <h1 className="text-4xl font-bold text-[#177455]">Quick Start</h1>
                        </div>
                        <p className="text-[#177455] mb-8 text-lg">
                            Jump straight into building with Peezy's hero templates. These production-ready scaffolds include
                            authentication, databases, modern UI components, and best practices - saving you hours of initial setup.
                        </p>

                        <div id="hero-templates" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Hero Templates</h3>
                            <p className="text-[#177455] mb-4">
                                Start with our curated full-stack templates that include everything you need:
                            </p>
                            <CodeBlock className="mb-4">
                                <div className="text-[#177455]">$ peezy new nextjs-fullstack my-startup</div>
                                <div className="text-[#177455]">$ peezy new express-fullstack my-api</div>
                                <div className="text-[#177455]">$ peezy new react-spa-advanced my-dashboard</div>
                            </CodeBlock>
                        </div>

                        <div id="interactive-mode" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Interactive Mode</h3>
                            <p className="text-[#177455] mb-4">
                                Let Peezy guide you through the setup process:
                            </p>
                            <CodeBlock>
                                <div className="text-[#177455]">$ peezy new</div>
                            </CodeBlock>
                        </div>

                        <div id="first-project" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Your First Project</h3>
                            <p className="text-[#177455] mb-4">
                                Create your first project in seconds:
                            </p>
                            <CodeBlock>
                                <div className="text-[#177455]">$ peezy new nextjs-fullstack my-first-app</div>
                                <div className="text-[#177455]">$ cd my-first-app</div>
                                <div className="text-[#177455]">$ npm run dev</div>
                            </CodeBlock>
                            <p className="text-[#177455] mt-4">
                                Your app will be running at <code className="text-[#177455] bg-yellow-100 px-1 rounded">http://localhost:3000</code>
                            </p>
                        </div>
                    </motion.section>

                    {/* Templates Section */}
                    <motion.section
                        id="templates"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <img src="lemon.png" alt="lemon" className="w-12 h-12" />
                            <h1 className="text-4xl font-bold text-[#177455]">Templates</h1>
                        </div>
                        <p className="text-[#177455] mb-8 text-lg">
                            Explore our carefully curated collection of full-stack templates. Each template is production-tested,
                            includes modern tooling, follows industry best practices, and comes with comprehensive documentation
                            to get you building immediately.
                        </p>

                        <div id="nextjs-fullstack" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Next.js Full-Stack</h3>
                            <p className="text-[#177455] mb-4">
                                Complete Next.js application with authentication, database, and modern UI components.
                            </p>
                            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4">
                                <h4 className="text-[#177455] font-semibold mb-2">Features:</h4>
                                <ul className="text-[#177455] space-y-1">
                                    <li>• Next.js 14 with App Router</li>
                                    <li>• NextAuth.js for authentication</li>
                                    <li>• PostgreSQL with Drizzle ORM</li>
                                    <li>• Tailwind CSS for styling</li>
                                    <li>• TypeScript support</li>
                                </ul>
                            </div>
                        </div>

                        <div id="express-fullstack" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Express Full-Stack</h3>
                            <p className="text-[#177455] mb-4">
                                Express.js backend with React frontend and shared authentication.
                            </p>
                            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4">
                                <h4 className="text-[#177455] font-semibold mb-2">Features:</h4>
                                <ul className="text-[#177455] space-y-1">
                                    <li>• Express.js with TypeScript</li>
                                    <li>• React frontend with Vite</li>
                                    <li>• JWT authentication</li>
                                    <li>• Concurrent development setup</li>
                                    <li>• Database integration</li>
                                </ul>
                            </div>
                        </div>

                        <div id="react-spa-advanced" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">React SPA Advanced</h3>
                            <p className="text-[#177455] mb-4">
                                Modern React single-page application with all the latest features.
                            </p>
                            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4">
                                <h4 className="text-[#177455] font-semibold mb-2">Features:</h4>
                                <ul className="text-[#177455] space-y-1">
                                    <li>• React 18 with TypeScript</li>
                                    <li>• Zustand for state management</li>
                                    <li>• TanStack Query for data fetching</li>
                                    <li>• Framer Motion for animations</li>
                                    <li>• Vitest for testing</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Commands Section */}
                    <motion.section
                        id="commands"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <img src="lemon.png" alt="lemon" className="w-12 h-12" />
                            <h1 className="text-4xl font-bold text-[#177455]">Commands</h1>
                        </div>
                        <p className="text-[#177455] mb-8 text-lg">
                            Master Peezy's powerful command-line interface. From creating new projects to managing migrations
                            and security audits, these commands provide everything you need for modern development workflows.
                            All commands support JSON output for seamless CI/CD integration.
                        </p>

                        <div id="project-creation" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Project Creation</h3>
                            <div className="space-y-4">
                                <div>
                                    <InlineCode>peezy new</InlineCode>
                                    <p className="text-[#177455] mt-1">Interactive project creation with guided setup</p>
                                </div>
                                <div>
                                    <InlineCode>peezy new [template] [name]</InlineCode>
                                    <p className="text-[#177455] mt-1">Create project with specific template</p>
                                </div>
                                <div>
                                    <InlineCode>peezy list [--remote] [--json]</InlineCode>
                                    <p className="text-[#177455] mt-1">List all available templates</p>
                                </div>
                            </div>
                        </div>

                        <div id="migration" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Migration</h3>
                            <div className="space-y-4">
                                <div>
                                    <InlineCode>peezy migrate --dry-run</InlineCode>
                                    <p className="text-[#177455] mt-1">Preview migration changes without applying them</p>
                                </div>
                                <div>
                                    <InlineCode>peezy migrate --interactive</InlineCode>
                                    <p className="text-[#177455] mt-1">Interactive migration with conflict resolution</p>
                                </div>
                                <div>
                                    <InlineCode>peezy migrate --backup</InlineCode>
                                    <p className="text-[#177455] mt-1">Safe migration with automatic backup</p>
                                </div>
                            </div>
                        </div>

                        <div id="security" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Security & Verification</h3>
                            <div className="space-y-4">
                                <div>
                                    <InlineCode>peezy verify-template [template]</InlineCode>
                                    <p className="text-[#177455] mt-1">Verify template signatures with Sigstore</p>
                                </div>
                                <div>
                                    <InlineCode>peezy audit [--json]</InlineCode>
                                    <p className="text-[#177455] mt-1">Comprehensive security audit of your project</p>
                                </div>
                                <div>
                                    <InlineCode>peezy trust list</InlineCode>
                                    <p className="text-[#177455] mt-1">Manage trusted signers and security policies</p>
                                </div>
                            </div>
                        </div>

                        <div id="management" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Project Management</h3>
                            <div className="space-y-4">
                                <div>
                                    <InlineCode>peezy reproduce [name] --lock-file</InlineCode>
                                    <p className="text-[#177455] mt-1">Reproduce project from lock file</p>
                                </div>
                                <div>
                                    <InlineCode>peezy verify --project-path</InlineCode>
                                    <p className="text-[#177455] mt-1">Verify project integrity and file checksums</p>
                                </div>
                                <div>
                                    <InlineCode>peezy doctor [--fix-lint]</InlineCode>
                                    <p className="text-[#177455] mt-1">Comprehensive health checks and diagnostics</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Features Section */}
                    <motion.section
                        id="features"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <img src="lemon.png" alt="lemon" className="w-12 h-12" />
                            <h1 className="text-4xl font-bold text-[#177455]">Features</h1>
                        </div>
                        <p className="text-[#177455] mb-8 text-lg">
                            Discover what makes Peezy CLI the ultimate tool for modern development teams. From lightning-fast
                            offline scaffolding to enterprise-grade security features, every aspect is designed to enhance
                            productivity while maintaining the highest standards of reliability and security.
                        </p>

                        <div id="developer-experience" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Developer Experience</h3>
                            <ul className="text-[#177455] space-y-3">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Zero-network scaffolding</strong> — All templates embedded, works offline</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Interactive prompts</strong> — Smart defaults with enhanced guidance</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>JSON output</strong> — Machine-consumable for automation and CI/CD</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Cross-platform</strong> — macOS, Linux, Windows with native binaries</span>
                                </li>
                            </ul>
                        </div>

                        <div id="project-management-features" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Project Management</h3>
                            <ul className="text-[#177455] space-y-3">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Deterministic builds</strong> — Reproducible projects with lock files</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>File integrity</strong> — SHA256 verification for all generated files</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Template system</strong> — Local and remote templates with versioning</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Health monitoring</strong> — Comprehensive project diagnostics</span>
                                </li>
                            </ul>
                        </div>

                        <div id="enterprise-ready" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Enterprise Ready</h3>
                            <ul className="text-[#177455] space-y-3">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Security first</strong> — Sigstore integration with transparency logs</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Migration system</strong> — Safe updates with intelligent conflict resolution</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Multi-platform</strong> — Native binaries for all major platforms</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-[#177455] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                    <span><strong>Automation friendly</strong> — Complete JSON API for CI/CD integration</span>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Advanced Section */}
                    <motion.section
                        id="advanced"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <img src="lemon.png" alt="lemon" className="w-12 h-12" />
                            <h1 className="text-4xl font-bold text-[#177455]">Advanced</h1>
                        </div>
                        <p className="text-[#177455] mb-8 text-lg">
                            Unlock Peezy's advanced capabilities for enterprise-scale development. From automated database
                            configurations to deterministic builds and CI/CD integration, these features ensure your projects
                            are production-ready from day one with enterprise-grade reliability and scalability.
                        </p>

                        <div id="database-integration" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Database Integration</h3>
                            <p className="text-[#177455] mb-4">
                                Peezy CLI automatically generates production-ready database configurations:
                            </p>
                            <CodeBlock className="mb-4">
                                <div className="text-[#177455]">$ peezy new express-typescript my-api --databases postgresql --redis</div>
                            </CodeBlock>
                            <p className="text-[#177455] mb-4">Supported databases:</p>
                            <ul className="text-[#177455] space-y-1">
                                <li>• PostgreSQL with connection pooling</li>
                                <li>• MySQL with UTF8MB4 support</li>
                                <li>• SQLite for development</li>
                                <li>• MongoDB with replica set support</li>
                                <li>• Redis for caching and sessions</li>
                                <li>• Elasticsearch for search</li>
                            </ul>
                        </div>

                        <div id="deterministic-builds" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">Deterministic Builds</h3>
                            <p className="text-[#177455] mb-4">
                                Every project includes a comprehensive lock file with checksums and metadata:
                            </p>
                            <CodeBlock className="mb-4">
                                <div className="text-[#177455]">$ peezy reproduce my-app-copy --lock-file my-app/peezy.lock.json</div>
                                <div className="text-[#177455]">$ peezy verify --project-path my-app-copy</div>
                            </CodeBlock>
                        </div>

                        <div id="ci-cd" className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#177455] mb-4">CI/CD Integration</h3>
                            <p className="text-[#177455] mb-4">
                                All commands support JSON output for automation:
                            </p>
                            <CodeBlock className="mb-4">
                                <div className="text-[#177455]">$ peezy new nextjs-app-router app --json --no-install</div>
                                <div className="text-[#177455]">$ peezy verify --project-path app --json</div>
                                <div className="text-[#177455]">$ peezy check-versions --security-only --json</div>
                            </CodeBlock>
                        </div>
                    </motion.section>

                </div>
            </div>
        </div>
    )
}

export { DocsPage }