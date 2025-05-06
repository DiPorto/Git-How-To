########################################
# 1) Собираем фронтенд
########################################
FROM node:18-alpine AS builder
WORKDIR /app

# Копируем только манифесты, ставим pnpm и зависимости
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm \
 && pnpm install

# Копируем весь исходник и билдим
COPY . .
RUN pnpm run build
# После этого в /app/dist лежит собранный фронтенд

########################################
# 2) Упаковываем сборку в nginx
########################################
FROM nginx:stable-alpine
# Чистим дефолтный контент
RUN rm -rf /usr/share/nginx/html/*

# Копируем билд из builder-этапа
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]