# Romantic Message Board Application

## Overview

This is a romantic-themed message board web application that features a playful entrance gate followed by a message board where users can share messages of love. The application emphasizes classic romantic aesthetics with elegant typography, warm colors, and charming interactive elements.

The application consists of two main screens:
1. **Entrance Gate**: A full-screen interactive "yes/no" prompt where the "no" button playfully moves away from the cursor
2. **Message Board**: A public message board where users can post and delete romantic messages

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management
- Custom CSS variables for theming (romantic color palette with primary accent color at HSL 345°)

**Design System**
- Typography: Serif fonts (Playfair Display for headings, Lora for body text) for romantic aesthetic
- Spacing system based on Tailwind's 4px grid (units: 4, 8, 12, 16)
- Custom color scheme focused on romantic neutrals and rose/pink accent colors
- Responsive design with mobile-first approach

**State Management**
- React Query for asynchronous server state (messages data)
- Local component state with React hooks for UI interactions
- Form state management via React Hook Form with Zod validation

**Key Interactive Features**
- Entrance gate with animated "no" button that repositions away from cursor/touch
- Real-time message posting with optimistic updates
- Toast notifications for user feedback
- Character count validation (500 character maximum for messages)

### Backend Architecture

**Runtime & Framework**
- Node.js with Express.js web framework
- TypeScript for type safety across the full stack
- ESM modules (type: "module" in package.json)

**API Design**
- RESTful API endpoints under `/api` namespace:
  - `GET /api/messages` - Retrieve all messages (ordered by creation date, descending)
  - `POST /api/messages` - Create a new message
  - `DELETE /api/messages/:id` - Delete a message by ID
- JSON request/response format
- Zod schema validation for incoming data
- Standard HTTP status codes (200, 201, 204, 400, 404, 500)

**Data Layer**
- Drizzle ORM for type-safe database operations
- Storage abstraction layer (`IStorage` interface) for potential future database swapping
- Database schema defined in shared TypeScript file for client/server type sharing

**Development vs Production**
- Separate entry points for dev (`index-dev.ts`) and production (`index-prod.ts`)
- Development mode integrates Vite dev server as Express middleware for HMR
- Production mode serves pre-built static assets from `dist/public`

### Data Storage

**Database Configuration**
- PostgreSQL via Neon serverless driver (WebSocket-based connection)
- Connection pooling for efficient resource usage
- Drizzle Kit for schema migrations

**Schema Design**
- `messages` table with columns:
  - `id`: UUID primary key (auto-generated)
  - `name`: Optional text field for author name (nullable)
  - `content`: Required text field for message content
  - `createdAt`: Timestamp with automatic default value
- Zod schemas for runtime validation matching database schema

**Data Validation**
- Shared validation schemas between client and server
- Content must be 1-500 characters
- Name field is optional
- Type inference from Zod schemas ensures consistency

### External Dependencies

**Database Service**
- Neon Serverless PostgreSQL (via `@neondatabase/serverless` package)
- Requires `DATABASE_URL` environment variable
- WebSocket connections via `ws` package for Neon compatibility

**Third-Party UI Libraries**
- Radix UI primitives for accessible component foundations (20+ component packages)
- Embla Carousel for potential carousel features
- Lucide React for icon system
- date-fns for timestamp formatting

**Form & Validation**
- React Hook Form for form state management
- Zod for schema validation
- @hookform/resolvers for Zod integration with React Hook Form
- drizzle-zod for generating Zod schemas from Drizzle tables

**Development Tools**
- Replit-specific plugins for development environment integration
- TypeScript for static type checking
- ESBuild for production bundling
- PostCSS with Autoprefixer for CSS processing

**Font Loading**
- Google Fonts integration for custom typography (Playfair Display, Lora, and other romantic fonts)

**Static Assets**
- Background image stored in `attached_assets/generated_images/` directory
- Used for entrance gate romantic backdrop (rose petals theme)