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

# Copy runtime files (as root first)
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/package*.json ./
COPY --from=builder --chown=node:node /app/favicon.ico ./favicon.ico

# Strapi v5 looks for config/src in root, and admin build in /build
# Copy compiled files to expected locations (symlinks can fail in some environments)
RUN mkdir -p ./config ./src ./build && \
    cp -r ./dist/config/* ./config/ 2>/dev/null || true && \
    cp -r ./dist/src/* ./src/ 2>/dev/null || true && \
    cp -r ./dist/build/* ./build/ 2>/dev/null || true && \
    chown -R node:node ./config ./src ./build

# Switch to non-root user
USER node

EXPOSE 1337

# Persist uploads directory when using local provider (mount a volume in compose)
VOLUME ["/app/public/uploads"]

# Strapi v5 production start
CMD ["npm", "run", "start"]


