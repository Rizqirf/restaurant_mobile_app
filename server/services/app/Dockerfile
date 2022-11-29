FROM node:16.16
WORKDIR /server/services/app
COPY package*.json ./
RUN npm install && npm cache clean –force
ENV PORT=4002
ENV NODE_ENV=production
ENV DATABASE_URL=postgresql://postgres:CbuNTx811LH4dlB0@db.fkiyznjdryqgoyujhpam.supabase.co:5432/postgres
RUN npm install -g nodemon
COPY ./ ./
CMD ["node","app.js"]