FROM node:latest

ENV APPDIR /usr/src/app

RUN mkdir -p ${APPDIR}
WORKDIR ${APPDIR}

RUN npm install -g --unsafe-perm @angular/cli
ADD package.json ./
ADD package-lock.json .
RUN npm install

ADD . ${APPDIR}

WORKDIR ${APPDIR}

ENV PORT 80
EXPOSE 80

CMD ng serve --host 0.0.0.0 --port 80 --live-reload false
