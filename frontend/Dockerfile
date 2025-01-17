# Use official Node.js image
FROM node:16

# Set work directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json /app/
RUN npm install

# Copy project files
COPY . /app/

# Build the React app
RUN npm run build

# Expose port for the frontend
EXPOSE 3000
