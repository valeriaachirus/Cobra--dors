FROM node:16

WORKDIR /app

COPY ./website/package.json .

RUN npm install --force

COPY ./website .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]