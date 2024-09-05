FROM node:20.11.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY ./src/company ./src/company

RUN npm run build:company

EXPOSE 3002

CMD ["node", "dist/company/main.ts"]

