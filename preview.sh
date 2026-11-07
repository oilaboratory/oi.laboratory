#!/bin/sh
# Черновик: правки уходят в ветку draft (сайт не меняется). Ссылку на просмотр скрипт печатает в конце.
set -e
cd "$(dirname "$0")"
git checkout -q draft
v=$(date +%s)
sed -i -E "s#(site\.css|i18n\.js|projects\.js)(\?v=[0-9]+)?\"#\1?v=$v\"#g" *.html
git add -A
git -c user.name="oilaboratory" -c user.email="oi.lab.team@proton.me" commit -qm "${1:-Draft}" || true
git push -q -u origin draft
# ссылка на ветку у githack кэшируется надолго — даём ссылку на конкретный коммит, она всегда свежая
echo "https://raw.githack.com/oilaboratory/oi.laboratory/$(git rev-parse HEAD)/index.html"
