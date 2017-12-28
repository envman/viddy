FROM node:latest

ENV APPDIR /usr/src/app

RUN npm install --unsafe-perm -g @angular/cli

WORKDIR /usr/src
ADD package.json .
ADD package-lock.json .
RUN npm install

RUN mkdir -p ${APPDIR}
WORKDIR ${APPDIR}

ADD . ${APPDIR}

ENV PORT 80
EXPOSE 80

CMD ng serve --host 0.0.0.0 --port 80 --live-reload false
