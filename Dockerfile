FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
 
# Create app directory
WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .
 
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./
 
# Install any needed packages
# RUN npm install
 
# Bundle app source
# COPY . .
 
# Stage 2 build for creating smaller image
#FROM node:carbon-alpine
#WORKDIR /usr/src/app
 
#COPY --from=builder /usr/src/app .
 
EXPOSE 4000
 
CMD [ "node", "./dist/server.js" ]