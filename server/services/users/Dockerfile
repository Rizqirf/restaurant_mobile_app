FROM node:16.16
WORKDIR /server/services/users
COPY package*.json ./
RUN npm install && npm cache clean –force
ENV PORT=4001
ENV ATLAS_URI=mongodb+srv://admin:TnYHpJz8gAXWt6pk@bekdi.tsrhqig.mongodb.net/?retryWrites=true&w=majority
RUN npm install -g nodemon
COPY ./ ./
CMD ["node","app.js"]