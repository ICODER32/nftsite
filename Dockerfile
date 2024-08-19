FROM node:18.3.0-alpine3.15

# Create app directory

WORKDIR /app

COPY . .

RUN npm run install

RUN npm run build


EXPOSE 3000

CMD ["npm", "run","develop"]

