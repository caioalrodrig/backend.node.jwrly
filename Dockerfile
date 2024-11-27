FROM node:20
WORKDIR /app
COPY package.json ./
RUN npm install && npm install typescript -g
COPY . .
RUN tsc
CMD ["npm", "run", "start"]