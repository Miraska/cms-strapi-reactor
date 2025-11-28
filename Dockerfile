#
# Multi-stage Dockerfile for Strapi v5 (production)
# - Builds admin and server in builder stage
# - Prunes dev deps
# - Runs with slim runtime image
#

FROM node:20-bookworm-slim AS builder

ENV NODE_ENV=development
WORKDIR /app

# Install build deps for native modules (e.g., better-sqlite3), then clean up
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Prune dev dependencies for smaller runtime
RUN npm prune --omit=dev


FROM node:20-bookworm-slim AS runner

ENV NODE_ENV=production
WORKDIR /app

# Create non-root user (node user exists by default)
USER node

# Copy only the necessary runtime files
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/dist ./dist
COPY --chown=node:node --from=builder /app/config ./config
COPY --chown=node:node --from=builder /app/public ./public
COPY --chown=node:node --from=builder /app/package*.json ./

EXPOSE 1337

# Persist uploads directory when using local provider (mount a volume in compose)
VOLUME ["/app/public"]

# Strapi v5 production start
CMD ["node", "./dist/server.js"]


