# Dockerfile for company module
FROM node:20.11.1-alpine

WORKDIR /app

# Copy only the company module dependencies
COPY ./package*.json ./
COPY ./src/company/package*.json ./src/company/

# Install dependencies specific to the company module
RUN npm install

# Copy the code for the company module
COPY ./src/company ./src/company

# Expose the port used by the company module, if applicable
EXPOSE 3001

# Command to run the company module
CMD ["npm", "run", "start:company"]
