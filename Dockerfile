FROM node:10.7

ADD . /app
WORKDIR /app

RUN npm install

ARG APP_NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}
RUN npm run build

EXPOSE 3000

ENV HOST 0.0.0.0
CMD ["npm", "run", "start"]
