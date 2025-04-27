FROM node:18-alpine

# Install netcat (required for wait-for.sh)
RUN apk add --no-cache netcat-openbsd

WORKDIR /app

# Copy package files first for caching
COPY ../package*.json ./

# Install dependencies (including devDependencies for building)
RUN npm install

# Copy app source (including wait-for.sh from docker directory)
COPY .. .

# Build the app (if using TypeScript)
RUN npm run build

# Make wait-for.sh executable
RUN chmod +x docker/wait-for.sh

EXPOSE 3000

# Use wait-for.sh to wait for Postgres
CMD ["./docker/wait-for.sh", "postgres:5432", "--", "npm", "start"]