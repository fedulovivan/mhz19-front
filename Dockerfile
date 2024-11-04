FROM node:alpine AS builder
WORKDIR /build
COPY package.json yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine-slim AS frontend
COPY --from=builder /build/dist /usr/share/nginx/html
COPY entrypoint.sh /usr/share/nginx/html/entrypoint.sh
WORKDIR /usr/share/nginx/html
CMD ["./entrypoint.sh"]
ENTRYPOINT []