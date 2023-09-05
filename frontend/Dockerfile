# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the container
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend source code to the container
COPY frontend/ ./

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
