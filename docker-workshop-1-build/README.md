## Ein Docker-image bauen
docker build . -t agenda

## Den Container unter Port 80 starten
docker run -dp 80:80 agenda

## Den Container stoppen
docker container stop <container id>

## restart stopped docker container
docker container start <container id>

## Den gestoppten Container löschen (und Port freigeben)
docker container rm <container id>

## alle gestoppten container löschen
docker container prune

## andere Platformen, zB Paspberry PI
docker buildx create --name mybuilder
docker buildx use mybuilder
docker buildx build --platform linux/amd64,linux/arm64/v8 -t mein-image-name .
