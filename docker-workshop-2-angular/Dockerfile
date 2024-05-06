FROM node:18.20 as build-stage
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build 

FROM nginx as production-stage
COPY --from=build-stage /app/dist/my-fisrt-project/browser /usr/share/nginx/html
EXPOSE 80