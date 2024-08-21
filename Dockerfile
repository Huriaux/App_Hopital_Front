FROM node:18-slim AS base

WORKDIR /app-hoptial

COPY . .

FROM base

RUN npm install --silent

EXPOSE 3000

CMD ["/bin/bash", "-c", " npm run start"]