# Use the official Node.js LTS image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy only the backend folder
COPY backend ./backend

# Navigate to the backend folder
WORKDIR /usr/src/app/backend

# Copy package.json and package-lock.json from the backend folder
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY backend .

# Expose the application port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
