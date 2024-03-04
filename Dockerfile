FROM node:18.19.1-bullseye

WORKDIR /myapp

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]