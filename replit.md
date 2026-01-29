# PaidPortfolio

## Overview

PaidPortfolio is a premium platform for buying portfolio website templates and requesting custom portfolio websites. The application targets students, developers, and creators who need professional portfolio sites to land jobs or attract clients. Built with a futuristic black and white design theme featuring glassmorphism, subtle glowing effects, and smooth animations.

## Recent Changes (January 2026)

- Built complete MVP with futuristic black & white theme
- Implemented Homepage with 3D portfolio carousel, hero section, testimonials, features, pricing
- Created Templates Store page with filtering and search
- Added Custom Portfolio Service request form
- Built Contact page with form submission
- Configured SEO optimization with React Helmet
- Set up API endpoints for templates, custom requests, and contact

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll and interaction animations
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration
- **SEO**: React Helmet for meta tags

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Design**: RESTful endpoints under `/api` prefix
- **Development Server**: Vite dev server integrated with Express via middleware

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Current Implementation**: In-memory storage class (`MemStorage`) with seeded template data

### Key Data Models
- Users (authentication)
- Portfolio Templates (products for sale)
- Orders (template purchases)
- Custom Requests (custom portfolio inquiries)
- Contact Messages (user inquiries)
- Testimonials (social proof)

### Pages
- `/` - Homepage with hero, 3D carousel, features, testimonials, pricing
- `/templates` - Template store with filtering
- `/custom` - Custom portfolio request form
- `/contact` - Contact form
- `/*` - 404 page (futuristic styled)

### API Endpoints
- `GET /api/templates` - List all templates
- `GET /api/templates/:id` - Get single template
- `GET /api/templates/featured` - Get featured templates
- `POST /api/orders` - Create order
- `POST /api/custom-requests` - Submit custom request
- `POST /api/contact` - Submit contact message
- `GET /api/testimonials` - Get testimonials

### Project Structure
```
client/           # React frontend
  src/
    components/   # Reusable UI components (navbar, footer, sections)
    pages/        # Route-level page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data access layer with in-memory storage
shared/           # Shared code between client/server
  schema.ts       # Drizzle schema and Zod validation
```

### Design Theme
- **Color Palette**: Pure black (#000000), dark grays (#0f0f0f, #141414), pure white (#ffffff), soft grays
- **Typography**: Space Grotesk (headings), Inter (body)
- **Effects**: Glassmorphism (.glass, .glass-strong), glowing borders (.glow, .glow-lg), grid/dot patterns
- **Animations**: Fade-in, slide-in, scale-in, floating elements, pulse glow

### Build System
- Development: `tsx` for TypeScript execution with Vite HMR
- Production: Custom build script using esbuild for server, Vite for client
- Output: Combined bundle in `dist/` directory

## External Dependencies

### UI/UX Libraries
- Radix UI primitives (via shadcn/ui)
- Framer Motion for animations
- Lucide React for icons

### Form Handling
- React Hook Form
- Zod for schema validation (extends shared schemas)
- drizzle-zod for Drizzle-to-Zod schema generation

### Fonts
- Google Fonts: Space Grotesk, Inter (loaded via CDN in index.html)

### Development Tools
- Replit-specific Vite plugins for error overlay and dev banner
- TypeScript with strict mode enabled
