FROM node:22 AS build-stage
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build 

FROM nginx AS production-stage
COPY --from=build-stage /app/dist/my-fisrt-project/browser /usr/share/nginx/html
EXPOSE 80