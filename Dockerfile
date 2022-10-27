FROM node:16

# Create working directory in container
WORKDIR /usr/src/app

# Install app dependencies specified in package.json file
COPY package*.json ./

# install node package manager to use Node.js and server.js file
RUN npm install
# RUN npm install ip
RUN npm install express
# RUN npm install os

# Copy local files into working directory in container
COPY . .

# Expose port 8080 from container to outside source
EXPOSE 80
# RUN ip r
# CMD [ "node", "server.js" ]
CMD ip r && node server.js