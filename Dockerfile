# Multi-stage Dockerfile for Strapi v5 (TypeScript)
# Uses Debian slim to ensure native modules (better-sqlite3, sharp) can build if needed

FROM node:20-bookworm-slim AS base
ENV NODE_ENV=production
WORKDIR /app

# Install build tools for native deps in a dedicated stage
FROM base AS deps
RUN apt-get update && apt-get install -y --no-install-recommends \
  python3 make g++ ca-certificates git \
  && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
# Install all deps (dev included) to build the admin and TS
RUN npm ci

# Build TS -> dist and admin panel
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Final runtime image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy production node_modules and built app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
COPY package*.json ./

# Strapi runs on 1337 by default
EXPOSE 1337

# Healthcheck (optional)
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=5 \
  CMD node -e "require('http').get(process.env.PUBLIC_URL || 'http://localhost:1337', res => { if(res.statusCode<400) process.exit(0); process.exit(1) }).on('error', ()=>process.exit(1))"

CMD ["npm","run","start"]


