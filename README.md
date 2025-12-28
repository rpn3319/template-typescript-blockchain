# Blockchain TypeScript Template

A TypeScript template for blockchain development projects.

## Features

- TypeScript with strict mode
- ESLint + Prettier
- Environment configuration
- Pre-installed blockchain utilities (BIP32, BIP39, BigNumber.js, Zod)

## Quick Start

```bash
npx degit rpn3319/template-typescript-blockchain my-project
cd my-project
npm install
cp .env.example .env
npm run start:dev
```

## Scripts

- `npm run build` - Build the project
- `npm run start:dev` - Run in development mode
- `npm start` - Run compiled code
- `npm run lint` - Lint code
- `npm run format` - Format code
- `npm run clean` - Remove build output

## Project Structure

```
src/
├── config/       # Configuration management
├── types/        # Type definitions
├── utils/        # Utility functions
└── index.ts      # Entry point
```

## License

MIT
