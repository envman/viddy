FROM cusspvz/node:latest

ENV APPDIR /usr/src/app

RUN mkdir -p ${APPDIR}
WORKDIR ${APPDIR}

ADD package.json ./
ADD package-lock.json ./
RUN npm install --production --loglevel warn

ADD . ${APPDIR}

ENV PORT 80
ENV NODE_ENV production
EXPOSE 80

CMD ["npm", "start"]
