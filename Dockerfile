# docker build -t evgeniy/ssr-react .
# docker run -p 49000:8080 -d --env-file ./.env --name evgeniy-ssr-react  --network evgeniy_poznyaks_com  evgeniy/ssr-react
FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run run-webpack
EXPOSE 3000
CMD [ "node", "server.js" ]