FROM node:20.11-alpine
WORKDIR /carApp
RUN apk update && apk add curl
COPY package*.json /carApp
RUN npm install
COPY . /carApp
RUN npm run build
EXPOSE 3000
CMD npm run typeorm migration:run && node dist/src/main.js


