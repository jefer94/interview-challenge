FROM node:12-alpine

WORKDIR /usr/src

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . .

CMD yarn coverage