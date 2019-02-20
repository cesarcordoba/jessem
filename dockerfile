FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/jessem
WORKDIR /usr/src/jessem

# Install app dependencies
COPY package.json /usr/src/jessem
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . /usr/src/jessem

EXPOSE 8080

CMD [ "npm", "start" ]

