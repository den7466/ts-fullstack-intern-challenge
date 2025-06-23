FROM node as vite-app

WORKDIR /app/client
COPY . .

RUN npm ci

ARG VITE_IMAGE_API_BASE_URL="https://api.thecatapi.com/v1"

ARG VITE_IMAGE_API_KEY="live_cF67OsfpGgyhej375tKAolOjpAl7jAMySEIrxiRfGHf2wCD42WQ6osUReUP3f6oz"

ARG VITE_LIKES_API_BASE_URL="http://localhost:8080/api"

RUN VITE_IMAGE_API_BASE_URL=${VITE_IMAGE_API_BASE_URL} VITE_IMAGE_API_KEY=${VITE_IMAGE_API_KEY} VITE_LIKES_API_BASE_URL=${VITE_LIKES_API_BASE_URL} npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/

RUN rm -rf html && mkdir html

WORKDIR /

COPY ./nginx.conf /etc/nginx
COPY --from=vite-app ./app/client/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
