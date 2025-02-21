FROM node:latest

WORKDIR /home/deploy/vieiratechnology

RUN useradd -m -s /bin/bash -G sudo deploy && echo "deploy:deploy123" | chpasswd

RUN apt update -y && apt upgrade -y

RUN apt-get install -y neovim vim libxshmfence-dev libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
RUN apt-get install ncat -y

COPY . .

RUN npm i -g n pm2 && n lts

RUN npm i --prefix backend
RUN npm i --prefix frontend

RUN npm run build --prefix backend
RUN npm run build --prefix frontend


CMD bash migration_verify.bash

