# Simple Dockerized Portfolio App

A simplified full-stack portfolio application demonstrating Docker, PostgreSQL, Prisma ORM, and Remix working together.

## Project Structure

```
portfolio-app/
├── docker-compose.yml
├── .env
├── package.json
├── Dockerfile
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── app/
│   ├── root.tsx
│   ├── routes/
│   │   ├── _index.tsx
│   │   ├── projects.tsx
│   │   └── health.tsx
│   └── utils/
│       └── db.server.ts
└── README.md
```

## Database Schema (Simplified)

**prisma/schema.prisma**
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Project {
  id          String   @id @default(cuid())
  title       String
  description String
  technologies String[] // Simple array instead of relations
  status      String   @default("in-progress")
  demoUrl     String?
  sourceUrl   String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("projects")
}

model Experience {
  id          String   @id @default(cuid())
  company     String
  position    String
  description String
  startDate   DateTime
  endDate     DateTime?
  current     Boolean  @default(false)
  createdAt   DateTime @default(now())

  @@map("experiences")
}
```

## Docker Configuration

**docker-compose.yml**
```yaml
version: '3.8'

services:
  # PostgreSQL Database
  database:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: portfolio
      POSTGRES_PASSWORD: password
      POSTGRES_DB: portfolio_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  # Main Application
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://portfolio:password@database:5432/portfolio_db
      NODE_ENV: development
    depends_on:
      - database
    volumes:
      - .:/app
      - /app/node_modules

volumes:
  postgres_data:
```

**Dockerfile**
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Generate Prisma Client
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

## Application Code

**package.json**
```json
{
  "name": "simple-portfolio-app",
  "private": true,
  "scripts": {
    "build": "remix build",
    "dev": "remix dev --manual",
    "start": "remix-serve build/index.js",
    "db:generate": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:seed": "tsx prisma/seed.ts"
  },
  "dependencies": {
    "@prisma/client": "^5.7.0",
    "@remix-run/node": "^2.4.0",
    "@remix-run/react": "^2.4.0",
    "@remix-run/serve": "^2.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@remix-run/dev": "^2.4.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "prisma": "^5.7.0",
    "tailwindcss": "^3.3.0",
    "tsx": "^4.6.0",
    "typescript": "^5.3.0"
  }
}
```

**app/utils/db.server.ts**
```typescript
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

declare global {
  var __db__: PrismaClient
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.__db__) {
    global.__db__ = new PrismaClient()
  }
  prisma = global.__db__
}

export { prisma }
```

**app/root.tsx**
```typescript
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

**app/routes/_index.tsx**
```typescript
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { prisma } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple Portfolio App" },
    { name: "description", content: "A simple portfolio built with Remix and Docker" },
  ];
};

export const loader: LoaderFunction = async () => {
  const [projects, experiences] = await Promise.all([
    prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.experience.findMany({
      orderBy: { startDate: "desc" },
      take: 2,
    }),
  ]);

  return json({ projects, experiences });
};

export default function Index() {
  const { projects, experiences } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">My Portfolio</h1>
            <Link 
              to="/projects" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              All Projects
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Full-Stack Developer
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Building modern web applications with React, Node.js, and Docker
          </p>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 font-medium"
                    >
                      Demo
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">{exp.position}</h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm">
                      {new Date(exp.startDate).toLocaleDateString()} - 
                      {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'Present'}
                    </p>
                  </div>
                  {exp.current && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-3">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

**app/routes/projects.tsx**
```typescript
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { prisma } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return json({ projects });
};

export default function Projects() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Projects</h1>
            <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === 'completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status.replace('-', ' ')}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    Demo →
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Source Code →
                  </a>
                )}
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Created: {new Date(project.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
            <p className="text-gray-600">Add some projects to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
```

**app/routes/health.tsx**
```typescript
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return json({ status: "healthy", database: "connected" });
  } catch (error) {
    return json({ status: "unhealthy", error: "Database connection failed" }, { status: 503 });
  }
};
```

## Database Seeding

**prisma/seed.ts**
```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  console.log('🌱 Seeding database...')

  // Clean existing data
  await prisma.project.deleteMany()
  await prisma.experience.deleteMany()

  // Create sample projects
  await prisma.project.createMany({
    data: [
      {
        title: 'E-commerce Website',
        description: 'A full-stack e-commerce platform with shopping cart, payments, and admin dashboard.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        status: 'completed',
        demoUrl: 'https://demo-ecommerce.com',
        sourceUrl: 'https://github.com/user/ecommerce',
      },
      {
        title: 'Task Manager App',
        description: 'A collaborative task management application with real-time updates.',
        technologies: ['React', 'Express', 'Socket.io', 'MongoDB'],
        status: 'completed',
        demoUrl: 'https://task-demo.com',
        sourceUrl: 'https://github.com/user/task-manager',
      },
      {
        title: 'Portfolio Website',
        description: 'Personal portfolio website built with modern web technologies.',
        technologies: ['Remix', 'TypeScript', 'Prisma', 'Docker'],
        status: 'in-progress',
        sourceUrl: 'https://github.com/user/portfolio',
      },
    ],
  })

  // Create sample experiences
  await prisma.experience.createMany({
    data: [
      {
        company: 'Tech Startup',
        position: 'Full-Stack Developer',
        description: 'Built web applications using React, Node.js, and PostgreSQL. Led frontend development team.',
        startDate: new Date('2022-01-01'),
        current: true,
      },
      {
        company: 'Web Agency',
        position: 'Frontend Developer',
        description: 'Developed responsive websites and web applications for various clients.',
        startDate: new Date('2020-06-01'),
        endDate: new Date('2021-12-31'),
        current: false,
      },
    ],
  })

  console.log('✅ Database seeded successfully!')
}

seed()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

## Configuration Files

**.env**
```bash
DATABASE_URL="postgresql://portfolio:password@database:5432/portfolio_db"
NODE_ENV="development"
```

**tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**app/tailwind.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Getting Started

### 1. Setup and Run

```bash
# Clone or create the project
mkdir simple-portfolio-app && cd simple-portfolio-app

# Create all the files above, then:

# Build and start containers
docker-compose up --build

# In another terminal, run migrations and seed
docker-compose exec app npx prisma migrate dev --name init
docker-compose exec app npm run db:seed
```

### 2. Access the Application

- **App**: http://localhost:3000
- **Database**: localhost:5432 (use any PostgreSQL client)

### 3. Development Workflow

```bash
# View logs
docker-compose logs -f

# Access container shell
docker-compose exec app sh

# Stop containers
docker-compose down

# Restart with fresh database
docker-compose down -v && docker-compose up --build
```