FROM node:20-alpine AS build

WORKDIR  /app

COPY package*.json ./

RUN npm install

COPY . .

ENV AN_PORT=3000 \
    AN_DB_HOST=db \
    AN_DB_DATABASE=nodean \
    AN_DB_USERNAME=root \
    AN_DB_PASSWORD=Alpha

EXPOSE 3000

CMD ["npm", "start"]
