# Stage 1: Build the application
FROM node:18-alpine AS builder

## Set the working directory
WORKDIR /app
## Copy package.json and package-lock.json
COPY package*.json ./

## Install dependencies
RUN npm install

## Copy the rest of the application code
COPY . .

## Build the application
RUN npm run build


# Stage 2: Serve the built app with Nginx
FROM nginx:alpine

## Copy the build files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html 

## Copy the nginx configuration
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]