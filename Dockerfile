# Grab official node image at version 16
FROM node:16

# Create working directory in container
WORKDIR /usr/src/app

# Install app dependencies specified in package.json file and also copy server.js
COPY package*.json ./
COPY server.js ./

# install node package manager to use Node.js and server.js file
RUN npm install

# Copy local files into working directory in container
# COPY . .

# Expose port 80 from container to outside source
EXPOSE 80

# Start the server
CMD node server.js