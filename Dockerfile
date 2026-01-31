# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.11.0

################################################################################
# Base image
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app

################################################################################
# Install production dependencies (NO BuildKit mounts)
FROM base as deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

################################################################################
# Build stage (needs devDependencies) (NO BuildKit mounts)
FROM base as build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

################################################################################
# Runtime stage
FROM base as final

ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

USER node

COPY package.json ./
COPY --from=deps /usr/src/app/node_modules ./node_modules

# Copy build output + public assets
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public

EXPOSE 8080

CMD ["npm", "start"]
