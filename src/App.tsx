import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { DocsPage } from './pages/DocsPage'
import { SponsorPage } from './pages/SponsorPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/docs" element={<DocsPage />} />
                    <Route path="/sponsor" element={<SponsorPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App