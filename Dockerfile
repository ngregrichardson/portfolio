FROM node:16-alpine
EXPOSE 3000
CMD yarn install && yarn build && yarn serve