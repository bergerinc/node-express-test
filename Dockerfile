FROM keymetrics/pm2:latest-stretch
WORKDIR /app
COPY ./package.json /app
ENV PORT=80
RUN npm install --production
COPY . /app
CMD ["pm2-runtime", "start", "pm2.config.js"]