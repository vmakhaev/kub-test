FROM node

COPY server.js .

CMD node server.js

EXPOSE 3000
