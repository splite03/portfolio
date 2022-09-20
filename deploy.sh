#!/usr/bin/env sh

set -env

npm run build

cd dist

git init
git add -A
git commit -m 'New deploy'
git push -f git@github.com:splite03/portfolio.git master:gh-pages

cd -

