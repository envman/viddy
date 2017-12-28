FROM node:latest

ENV APPDIR /usr/src/app

RUN mkdir -p ${APPDIR}
WORKDIR ${APPDIR}

RUN npm install --unsafe-perm -g @angular/cli http-server

ADD package.json ./
ADD package-lock.json .
RUN npm install --production --verbose

ADD . ${APPDIR}

RUN ng build

WORKDIR ${APPDIR}/dist

ENV PORT 80
EXPOSE 80

CMD http-server -p 80 dist

