#!/bin/sh

sed -i "s~localhost:7070~$API_BASE~g" /usr/share/nginx/html/index.html && nginx -g "daemon off;"