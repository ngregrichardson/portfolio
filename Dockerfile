FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
EXPOSE 3000
CMD yarn install && yarn build && yarn serve