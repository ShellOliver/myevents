startdb:
	docker-compose up
stopdb:
	docker-compose down

startpsql:
	docker-compose exec db psql -U postgres