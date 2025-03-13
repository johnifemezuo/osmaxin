
FROM node:22.14.0-alpine3.20 as dependencies

WORKDIR /osmaxin-landing-page
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

FROM node:22.14.0-alpine3.20 as builder
WORKDIR /osmaxin-landing-page
COPY . .
COPY --from=dependencies /osmaxin-landing-page/node_modules ./node_modules
RUN pnpm build

FROM node:22.14.0-alpine3.20 as runner
WORKDIR /osmaxin-landing-page
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /osmaxin-landing-page/next.config.js ./
COPY --from=builder /osmaxin-landing-page/public ./public
COPY --from=builder /osmaxin-landing-page/.next ./.next
COPY --from=builder /osmaxin-landing-page/node_modules ./node_modules
COPY --from=builder /osmaxin-landing-page/package.json ./package.json

EXPOSE 5500
CMD ["pnpm", "start"]
