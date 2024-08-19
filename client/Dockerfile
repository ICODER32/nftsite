FROM alpine:3.10

# Set the working directory


RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173


CMD ["npm","run","dev","--host","0.0.0.0","--port","5173"]