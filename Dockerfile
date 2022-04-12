FROM node:lts-alpine
ENV NODE_ENV=production

# App directory
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
# RUN npm install
COPY . .
EXPOSE 3000
RUN npm install
USER node
CMD ["node", "server.js"]
