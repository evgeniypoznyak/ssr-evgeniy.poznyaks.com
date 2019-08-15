# docker build -t evgeniy/ssr-react .
# docker run -p 3001:8080 -d --env-file ./.env --name evgeniy-ssr-react --network evgeniy_poznyaks_com evgeniy/ssr-react
#--env-file ./.env
FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run run-webpack
EXPOSE 8080
CMD [ "node", "server.js" ]
