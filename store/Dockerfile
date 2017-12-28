FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install --production --loglevel warn

COPY . /usr/src/app

ENV NODE_ENV production
EXPOSE 80

CMD ["node", "index.js"]
