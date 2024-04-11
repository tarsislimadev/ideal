FROM nginx:alpine

WORKDIR  /etc/nginx/conf.d/

COPY default.conf ./default.conf

WORKDIR /usr/share/nginx/html

COPY html .
