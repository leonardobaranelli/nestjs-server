# Dockerfile for main application
FROM node:20.11.1-alpine

WORKDIR /app

# Copy the general dependencies of the entire application
COPY package*.json ./

# Install the main application dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Expose the main application port
EXPOSE 3000

# Command to run the main application
CMD ["npm", "run", "start"]
