FROM node:22.14.0-alpine3.20 as dependencies


ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable


WORKDIR /osmaxin-landing-page
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:22.14.0-alpine3.20 as builder
WORKDIR /osmaxin-landing-page
COPY . .
COPY --from=dependencies /osmaxin-landing-page/node_modules ./node_modules

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_API_TIMEOUT
ARG NEXT_PUBLIC_HYGRAPH_BASE_URL
ARG NEXT_PUBLIC_HYGRAPH_TOKEN

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_TIMEOUT=$NEXT_PUBLIC_API_TIMEOUT
ENV NEXT_PUBLIC_HYGRAPH_BASE_URL=$NEXT_PUBLIC_HYGRAPH_BASE_URL
ENV NEXT_PUBLIC_HYGRAPH_TOKEN=$NEXT_PUBLIC_HYGRAPH_TOKEN
ENV NODE_ENV=production

ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN pnpm build

FROM node:22.14.0-alpine3.20 as runner
WORKDIR /osmaxin-landing-page




# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /osmaxin-landing-page/next.config.ts ./
COPY --from=builder /osmaxin-landing-page/public ./public
COPY --from=builder /osmaxin-landing-page/.next ./.next
COPY --from=builder /osmaxin-landing-page/node_modules ./node_modules
COPY --from=builder /osmaxin-landing-page/package.json ./package.json

ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

EXPOSE 5500
CMD ["pnpm", "start"]