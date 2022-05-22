FROM node:16.15-alpine3.14 as base

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm install

CMD [ "npm","run","start" ]
