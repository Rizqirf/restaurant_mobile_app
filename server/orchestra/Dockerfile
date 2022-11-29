FROM node:16.16
WORKDIR /server/orchestra
COPY package*.json ./
RUN npm install && npm cache clean –force
ENV PORT=4000
ENV NODE_ENV=production
ENV REDIS_PASS=PqYDPRDANrXOA2FuTgzLXs2DStDcthjj
RUN npm install -g nodemon
COPY ./ ./
CMD ["node","app.js"]