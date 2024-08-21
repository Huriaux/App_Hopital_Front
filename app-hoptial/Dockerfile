FROM node:21.7.3-alpine3.20 AS base

WORKDIR /app-hoptial

COPY . .

FROM base

RUN npm install --silent

EXPOSE 3000

CMD ["/bin/bash", "-c", " npm run start"]