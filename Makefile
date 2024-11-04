NAME ?= mhz19-front
GIT_REV ?= $(shell git rev-parse --short HEAD)

run:
	yarn dev

build:
	yarn build

docker-build:
	DOCKER_CLI_HINTS=false docker build --label "git.revision=${GIT_REV}" --tag $(NAME) .

docker-up:
	docker run --detach --env-file=.env --publish 7171:80 --name=$(NAME) $(NAME)

docker-down:
	docker stop $(NAME) && docker rm $(NAME)	