# Running PostHog locally

## Requirements

- Docker with at least 4 CPU cores and 8 GB RAM
- Flox 1.19.1 or newer (provides Python, Node.js 26 and pnpm 11.28 from `.flox/`)

## Start

1. `flox activate`
2. `hogli up -d`, then `hogli wait` (or `hogli start` for the interactive process view).
   This starts the Docker services (Postgres, ClickHouse, Kafka, Redis, ...), runs the
   migrations and starts Django, the frontend and the workers.
3. Open http://localhost:8010

## Demo data

- `hogli dev:demo-data` generates an organization, a project, events, persons and
  insights. Log in as `test@posthog.com` / `12345678`.
- `hogli dev:sync-flags` syncs PostHog's own feature flags so flag-gated UI is visible.

## Conventions

- Timezone UTC, locale en-US.
