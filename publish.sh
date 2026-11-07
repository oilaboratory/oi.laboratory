#!/bin/sh
# Выкладка: всё накопленное в draft разом переносится на сайт (main → GitHub Pages).
set -e
cd "$(dirname "$0")"
git checkout -q main
B=${1:-draft}   # какой черновик выкладывать: ./publish.sh draft2
git merge -q --ff-only "$B" || git -c user.name="oilaboratory" -c user.email="oi.lab.team@proton.me" merge -q --no-edit "$B"
git push -q
git checkout -q "$B"
