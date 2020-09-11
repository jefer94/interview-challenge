FROM node:12-alpine

WORKDIR /usr/src

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --production

COPY . .

CMD yarn after-30-days
