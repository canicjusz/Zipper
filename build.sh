rm -rf application.zip
rm -rf Zipper.zip
npm run build
cp assets/zipper_64.png assets/zipper_128.png assets/manifest.webapp dist
cd dist
zip -q ../application.zip  css/* index.html js/* zipper_64.png zipper_128.png manifest.webapp
cd ..
zip -qj Zipper.zip application.zip assets/metadata.json assets/update.webapp
rm -rf application.zip