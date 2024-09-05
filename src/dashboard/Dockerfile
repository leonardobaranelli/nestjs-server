FROM node:20.11.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY ./src/dashboard ./src/dashboard

RUN npm run build:dashboard

EXPOSE 3003

CMD ["node", "dist/dashboard/main.ts"]
