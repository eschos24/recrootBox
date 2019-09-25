 cd ../eschos24.github.io

rm asset-manifest.json
rm index.html
rm manifest.json
rm service-worker.js
rm -rf static


 cd ../recrootBox


npm run build
# mv build/asset-manifest.json ../eschos24.github.io/asset-manifest.json
# mv build/manifest.json ../eschos24.github.io/manifest.json
# mv build/service-worker.js ../eschos24.github.io/service-worker.js
# mv build/index.html ../eschos24.github.io/index.html
mv -v build/* ../eschos24.github.io/

cd ../eschos24.github.io/

git add .
git commit -am 'deploying build'
git push