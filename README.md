# Nigerian Language Learning App

A gamified mobile and web application for learning Yoruba language through interactive lessons, games, progress tracking, and 1-on-1 tutoring sessions.

## Project Structure

This is a monorepo containing:

- **`apps/mobile`** - React Native mobile app built with Expo
- **`apps/web`** - React web application built with Vite
- **`packages/shared`** - Shared components, types, and utilities

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (for mobile development)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Install Husky git hooks:
```bash
npm run prepare
```

3. Build shared package:
```bash
npm run build --workspace=packages/shared
```

### Development

#### Run both apps simultaneously:
```bash
npm run dev
```

#### Run individual apps:

**Web app:**
```bash
npm run dev:web
```

**Mobile app:**
```bash
npm run dev:mobile
```

### Code Quality

The project includes:

- **ESLint** - Code linting with TypeScript and React rules
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit linting
- **TypeScript** - Type safety across all packages

Run linting:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

Format code:
```bash
npm run format
```

## Technology Stack

### Frontend
- **Mobile**: React Native with Expo
- **Web**: React with TypeScript and Vite
- **UI Libraries**: NativeBase (mobile), Chakra UI (web)
- **State Management**: Redux Toolkit

### Development Tools
- **TypeScript** - Type safety
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

## Features

- Cross-platform development (mobile and web)
- Shared component library
- Type-safe development with TypeScript
- Consistent code quality with ESLint and Prettier
- Automated git hooks with Husky

## Next Steps

This project structure is ready for implementing the core features:
1. Authentication system
2. Learning content management
3. Gamification system
4. Tutoring platform
5. Offline functionality

See the implementation plan in `.kiro/specs/nigerian-language-learning-app/tasks.md` for detailed development tasks.