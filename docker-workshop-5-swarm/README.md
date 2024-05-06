## Ein Schwarmcluster erstellen
docker swarm init

## Dem Schwarmcluster weitere Nodes hinzufügen
docker swarm join <token>

## Den Schwarm verlassen
docker swarm leave

## Ein Docker-compose File starten
docker stack deploy -c ./docker-compose.yml