rm -rf application.zip
rm -rf zipper.zip
npm run build
cp zipper_64.png zipper_128.png manifest.webapp dist
cd dist
zip -q ../application.zip  css/* index.html js/* zipper_64.png zipper_128.png manifest.webapp
cd ..
zip -q zipper.zip application.zip metadata.json update.webapp