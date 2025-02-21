FROM nginx:latest

RUN apt-get update -y && apt-get install certbot python3-certbot-nginx fish neovim netcat-openbsd nmap -y

COPY Configs/deploy.conf /etc/nginx/conf.d/deploy.conf
COPY Configs/nginx.conf /etc/nginx/nginx.conf
COPY Configs/vieiratechnology-backend /etc/nginx/sites-available/vieiratechnology-backend
COPY Configs/vieiratechnology-frontend /etc/nginx/sites-available/vieiratechnology-frontend
COPY Tests/healthcheck.sh /

RUN rm -rf /etc/nginx/sites-enabled/default

CMD ["nginx", "-g", "daemon off;"]