FROM node:alpine

ARG REACT_APP_HOST_PORT

RUN apk add --no-cache libc6-compat
RUN npm i -g npm

WORKDIR /client
RUN chown -R node:node /client

COPY --chown=node:node package.json .

RUN npm install --omit=optional
RUN npx browserslist@latest --update-db
RUN npx next telemetry disable

COPY --chown=node:node . .

USER node

ENV REACT_APP_HOST_PORT ${REACT_APP_HOST_PORT}
ENV REACT_APP_HOSTNAME=$(hostname)

EXPOSE 3000

ENTRYPOINT npm run build && npm run start