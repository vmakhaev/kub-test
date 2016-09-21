FROM node

ADD . /app

WORKDIR /app

CMD node server.js

EXPOSE 8000
