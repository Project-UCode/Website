# # # set the base image to build from 
# # FROM node:alpine
# # # set the working directory
# # WORKDIR /app
# # # copy package files
# # COPY package.json ./
# # COPY package-lock.json ./
# # # install dependencies
# # RUN npm install
# # # copy everything to /app directory
# # COPY ./ ./
# # # run the app
# # CMD ["npm", "start"]

# FROM nginx:alpine
# COPY build/ /usr/share/nginx/html
# Stage 0, "build-stage", based on Node.js 22, to build and compile the frontend
FROM node:22-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
