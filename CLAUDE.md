# Project Management Software - Architecture & Conventions

## Project Overview
Enterprise-grade SaaS Project Management Platform built with Next.js 15, TypeScript, PostgreSQL, and Prisma. The project implements 6 core modules in MVP phase, with a roadmap for 12 total modules.

## Architecture Principles
- **Clean Architecture**: Separation of concerns between data, business logic, and presentation
- **Feature-Based Organization**: Code organized by business features, not technical layers
- **Repository Pattern**: Abstract data access layer for clean dependencies
- **Service Layer**: Business logic isolated from API routes
- **Modular Design**: Independent, reusable modules with minimal coupling
- **Type Safety**: TypeScript with strict mode enabled

## Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── (auth)/             # Auth-related routes
│   ├── (dashboard)/        # Dashboard routes
│   ├── api/                # API routes and server actions
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
│
├── modules/                 # Feature modules
│   ├── auth/               # Authentication & User Management
│   ├── projects/           # Project Management
│   ├── tasks/              # Task & Workflow Management
│   ├── scheduling/         # Scheduling & Time Tracking
│   ├── collaboration/      # Collaboration (Comments, Activity Feed)
│   └── resources/          # Resource Management
│
├── lib/                     # Shared utilities
│   ├── api/                # API helpers
│   ├── db/                 # Database utilities
│   ├── auth/               # Auth utilities
│   └── validation/         # Zod schemas
│
├── components/             # Shared UI components
│   ├── ui/                 # Base UI components (shadcn)
│   ├── layout/             # Layout components
│   └── common/             # Commonly reused components
│
└── styles/                 # Global styles
```

## Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand + React hooks
- **Data Fetching**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Animation**: Framer Motion
- **Charts**: Recharts

### Backend
- **Runtime**: Node.js
- **API**: Next.js Server Actions + API Routes
- **Authentication**: NextAuth.js (OAuth + Email + JWT)

### Database
- **Primary**: PostgreSQL
- **ORM**: Prisma

### DevOps
- **Container**: Docker
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel

## Coding Standards

### TypeScript
- Strict mode enabled, no `any` types
- Explicit return types on functions
- Interfaces for object contracts

### Components
- Functional components with hooks
- Typed props with interfaces
- Use React.memo for expensive components

### Database
- Always use Prisma for queries
- Use indexes for frequently queried fields
- Eager load related data to avoid N+1

### File Naming
- Components: PascalCase (e.g., `TaskCard.tsx`)
- Functions/Utils: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase (e.g., `Task.ts`)

## Development Workflow

### Setup
```bash
npm install
cp .env.example .env.local
npx prisma migrate dev
npm run dev
```

### Creating a Feature
1. Define types in `modules/[feature]/types.ts`
2. Create Prisma models
3. Implement repository layer
4. Implement service layer
5. Create API route/server action
6. Create React components
7. Add tests

### Database Changes
```bash
npx prisma migrate dev --name <name>
```

## API Response Format

**Success:**
```json
{
  "success": true,
  "data": {},
  "message": "Success"
}
```

**Error:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message"
  }
}
```

## Module Reference

Each module contains:
- `components/` - React components
- `services/` - Business logic
- `repositories/` - Data access layer
- `types.ts` - TypeScript types
- `index.ts` - Module exports

## MVP Modules

1. **Authentication & User Management** - OAuth, Email, RBAC
2. **Project Management** - Create, edit, archive projects
3. **Task Management** - Tasks, subtasks, multiple views
4. **Scheduling** - Gantt, sprints, time tracking
5. **Collaboration** - Comments, activity feed, mentions
6. **Resource Management** - Allocation, utilization tracking

## Environment Variables

```
DATABASE_URL=postgresql://user:password@localhost:5432/pm_software
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<generate with: openssl rand -base64 32>
GOOGLE_ID=...
GOOGLE_SECRET=...
GITHUB_ID=...
GITHUB_SECRET=...
```

## Useful Commands

```bash
npx prisma generate       # Generate Prisma client
npx prisma studio        # Open database UI
npm run format            # Format code
npm run lint              # Lint code
npm run type-check        # Check types
npm run test              # Run tests
npm run test:e2e          # Run E2E tests
```

## References

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [NextAuth.js Docs](https://next-auth.js.org)
- [React Query Docs](https://tanstack.com/query)
- [shadcn/ui](https://ui.shadcn.com)
