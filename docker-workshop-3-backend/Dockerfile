FROM node
WORKDIR /app
COPY . .
RUN npm ci 
CMD ["node", "./src/main.js"]
EXPOSE 3000