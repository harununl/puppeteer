FROM satantime/puppeteer-node
WORKDIR /usr/src/app
COPY restapi /usr/src/app/
RUN npm install   --production --silent && mv node_modules  ..
ENV DISPLAY=host.docker.internal:0.0
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD npm run start


