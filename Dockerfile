# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN pnpm build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install serve for static files
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist /app/public

EXPOSE 3000

CMD ["serve", "-s", "public", "-l", "3000"]

