# Peezy CLI Website

The official website for Peezy CLI - a next-generation CLI tool for modern developers.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Build & Deploy

### Local Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Vercel Deployment

This project is optimized for Vercel deployment:

1. **Automatic Deployment**: Connect your GitHub repository to Vercel for automatic deployments
2. **Manual Deployment**: Use the Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

### Build Configuration

- **Framework**: Vite + React + TypeScript
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 18.x (recommended)

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI

### Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Build Tool**: Vite
- **Testing**: Vitest + Testing Library

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components
│   └── ui/             # UI components
├── pages/              # Page components
├── store/              # Zustand stores
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── App.tsx             # Main app component
```

## 🌐 Deployment

### Environment Variables

No environment variables are required for the basic setup.

### Vercel Configuration

The project includes a `vercel.json` file with optimized settings:

- SPA routing support
- Asset caching headers
- Build optimization

### Performance Optimizations

- Code splitting with React.lazy()
- Image optimization
- Asset compression
- CDN caching via Vercel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Peezy CLI GitHub](https://github.com/Sehnya/peezy-cli)
- [Documentation](https://peezy.dev/docs)
- [Sponsor](https://github.com/sponsors/Sehnya)
