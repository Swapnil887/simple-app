# Use Node.js 22 LTS
FROM node:22-alpine

# Application working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev && npm cache clean --force

# Copy application source
COPY . .

# Run application as non-root user
USER node

# Application port
EXPOSE 3000

# Start application
CMD ["npm", "start"]