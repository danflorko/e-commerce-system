FROM node:alpine

ARG REACT_APP_HOST_PORT

RUN apk add
RUN npm i -g npm
RUN npm i -g fs json-server

WORKDIR /server

RUN chown -R node:node /server
COPY --chown=node:node package.json .

RUN npm install --omit=optional

COPY --chown=node:node . .

USER node

EXPOSE 8080

RUN npm run gen

ENTRYPOINT ["npm", "run", "server:docker"]