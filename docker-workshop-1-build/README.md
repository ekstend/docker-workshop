## Ein Docker-image bauen

docker build . -t agenda

## Den Container unter Port 80 starten
docker run -dp 80:80 agenda

## Den Container stoppen
docker stop <container id>

## Den gestoppten Container löschen (und Port freigeben)
docker rm <container id>