# docker build -t evgen1y/ssr-react .
# docker tag 9f1945e7bc33 evgen1y/ssr-react
# docker push evgen1y/ssr-react

# docker run -p 3001:8080 -d --env-file ./.env --name evgeniy-ssr-react --network evgeniy_poznyaks_com evgen1y/ssr-react
#--env-file ./.env
FROM node:10
WORKDIR /usr/src/app
#RUN chown -R root:root /usr/src/app
#WORKDIR /usr/src/app
#USER root
COPY package*.json ./
RUN npm install
#RUN chown -R root:root /usr/src/app
COPY . .
#RUN chown root:root /usr/local/bin/node
#RUN chmod -R 777 /usr/local/bin/node
#RUN chown -R root:root /usr/src/app
RUN  npm run run-webpack
EXPOSE 8080
CMD [ "node", "server.js" ]
