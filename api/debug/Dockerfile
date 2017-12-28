FROM node

ENV APPDIR /usr/src/app
ENV PATH /usr/modules/node_modules:$PATH

RUN mkdir -p ${APPDIR}

RUN npm install nodemon -g

WORKDIR /usr/src
ADD package.json .
ADD package-lock.json .
RUN npm install

WORKDIR ${APPDIR}

ENV PORT 80
EXPOSE 80

CMD nodemon app.js -L
