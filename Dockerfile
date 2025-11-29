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
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/favicon.ico ./favicon.ico

# Strapi v5 looks for config/src in root, and admin build in /build
# Create symlinks to dist/ subfolders
RUN ln -s /app/dist/config /app/config && \
    ln -s /app/dist/src /app/src && \
    ln -s /app/dist/build /app/build

# Set ownership to node user
RUN chown -R node:node /app

# Switch to non-root user
USER node

EXPOSE 1337

# Persist uploads directory when using local provider (mount a volume in compose)
VOLUME ["/app/public/uploads"]

# Strapi v5 production start
CMD ["npm", "run", "start"]


