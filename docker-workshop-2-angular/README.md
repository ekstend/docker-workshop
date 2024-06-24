# Multistage build

## Das wollen wir vermeiden:
node-installation
npm install
npm build

## Wird im Dockerfile erledigt.
docker build . -t frontend

## Starten des Images
docker run -dp 80:80 frontend
