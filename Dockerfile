FROM node:16-alpine
CMD yarn install && yarn build && yarn serve