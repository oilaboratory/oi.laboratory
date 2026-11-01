#!/bin/sh
# Обновляет метку версии у site.css / i18n.js / projects.js во всех страницах,
# чтобы браузеры сразу брали свежие файлы, а не старые из кэша, затем коммит и push.
set -e
cd "$(dirname "$0")"
v=$(date +%s)
sed -i -E "s#(site\.css|i18n\.js|projects\.js)(\?v=[0-9]+)?\"#\1?v=$v\"#g" *.html
git add -A
git -c user.name="oilaboratory" -c user.email="oi.lab.team@proton.me" commit -qm "${1:-Update site}" || true
git push -q
