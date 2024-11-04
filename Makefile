NAME ?= mhz19-go-frontend
GIT_REV ?= $(shell git rev-parse --short HEAD)

.PHONY: run
run:
	yarn dev

.PHONY: docker-build
docker-build:
	DOCKER_CLI_HINTS=false docker build --label "git.revision=${GIT_REV}" --tag $(NAME) .

.PHONY: docker-up
docker-up:
	docker run --detach --publish 8080:80 --name=$(NAME) $(NAME)

.PHONY: docker-down
docker-down:
	docker stop $(NAME) && docker rm $(NAME)	