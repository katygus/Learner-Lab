# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run from the **root directory**:

```bash
npm run install-all   # Install dependencies for root, client, and server
npm run dev           # Start both client (port 5173) and server (port 5000) concurrently
npm run client        # Start Vite dev server only
npm run server        # Start Express server only (with nodemon)
npm run build         # Build frontend for production
npm run lint          # Lint client-side TypeScript/React code
```

No automated tests are configured yet.

## Architecture

Full-stack monorepo: React/TypeScript frontend (`client/`) + Node/Express backend (`server/`) + MongoDB Atlas.

### Frontend (`client/src/`)

- **`App.tsx`** — Root component; owns filter state (`selectedStrengths`, `selectedChallenges`, `selectedTags`)
- **`StrategyList.tsx`** — Fetches strategies from the API and renders `StrategyCard` components
- **`Components/FilterBar.tsx`** — Multi-select dropdowns (react-select) for filtering
- **`Components/StrategyCard.tsx`** — Displays a single strategy (title, description, strengths, challenges, tags, age group)
- **`types/types.ts`** — Shared TypeScript interfaces
- **`services/api.ts`** — Axios-based API service

### Backend (`server/`)

- **`server.js`** — Express entry point with CORS and route mounting
- **`routes/strategies.js`** — Mounts `GET /api/strategies`
- **`controllers/strategyController.js`** — Reads query params (`?strengths=x,y&challenges=a,b&tags=p,q`), builds MongoDB `$in` filter, queries via Mongoose, stores results in `res.locals.strategies`
- **`models/Strategy.js`** — Mongoose schema: `title`, `description`, `strengthsLeveraged[]`, `supportsChallenges[]`, `ageGroup`, `tags[]`

### Data Flow

1. `FilterBar` updates filter state in `App.tsx`
2. `StrategyList` calls `GET /api/strategies` (with query params when filter wiring is complete)
3. Controller builds Mongoose query from params → returns JSON array
4. `StrategyList` maps results to `StrategyCard` components

## Environment

The server requires a `.env` file in `server/` (see `server/.env.example`):

```
MONGO_URI=<your MongoDB Atlas connection string>
```

## Active Work

Connecting front-end filters to the API is the current priority. Filter state exists in `App.tsx` and the backend query logic is implemented in `strategyController.js`, but `StrategyList.tsx` does not yet receive filter props or pass them as query parameters to the API.
