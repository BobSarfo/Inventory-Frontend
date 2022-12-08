FROM node:16-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

RUN npm install
COPY ./ ./
RUN npm run build --prod
 
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html 
