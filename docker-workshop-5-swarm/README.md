## Einen Schwarmcluster erstellen
docker swarm init

## Einem Schwarm beitreten
docker swarm init-token worker|manager

## Die Nodes untersuchen
docker node ls

## Eine Compose-Datei deployen
docker stack deploy -c docker-compose.yml <mein-stack>

## Den Stack untersuchen
docker stack ls
docker stack ps <name>