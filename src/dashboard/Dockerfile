# Dockerfile for dashboard module
FROM node:20.11.1-alpine

WORKDIR /app

# Copy only the dashboard module dependencies
COPY ./package*.json ./
COPY ./src/dashboard/package*.json ./src/dashboard/

# Install dependencies specific to the dashboard module
RUN npm install

# Copy the code for the dashboard module
COPY ./src/dashboard ./src/dashboard

# Expose the port used by the dashboard module, if applicable
EXPOSE 3002

# Command to run the dashboard module
CMD ["npm", "run", "start:dashboard"]
