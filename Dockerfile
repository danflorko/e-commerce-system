FROM node:19.7-alpine3.17

ARG REACT_APP_HOST_PORT

RUN apk add --no-cache libc6-compat curl
RUN npm i -g npm
RUN npm i -g fs

WORKDIR /node
RUN chown -R node:node /node

COPY --chown=node:node package.json .

RUN npm install --omit=optional
RUN npx browserslist@latest --update-db
RUN npx next telemetry disable

RUN npm install -g json-server

COPY --chown=node:node . .

USER node

ENV REACT_APP_HOST_PORT ${REACT_APP_HOST_PORT}
ENV REACT_APP_HOSTNAME=$(hostname)

EXPOSE "${REACT_APP_HOST_PORT}"