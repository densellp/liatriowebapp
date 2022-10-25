FROM node:16

# Create working directory in container
WORKDIR /usr/src/app

# Install app dependencies specified in package.json file
COPY package*.json ./

# install node package manager to use Node.js and server.js file
RUN npm install

# Copy local files into working directory in container
COPY . .

# Expose port 8080 from container to outside source
EXPOSE 8080
CMD [ "node", "server.js" ]