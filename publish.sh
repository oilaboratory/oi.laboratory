#!/bin/sh
# Выкладка: всё накопленное в draft разом переносится на сайт (main → GitHub Pages).
set -e
cd "$(dirname "$0")"
git checkout -q main
git merge -q --ff-only draft || git -c user.name="oilaboratory" -c user.email="oi.lab.team@proton.me" merge -q --no-edit draft
git push -q
git checkout -q draft
