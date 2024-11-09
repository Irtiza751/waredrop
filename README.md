# Waredrop

Waredrop is a modern e-commerce platform focused on men's fashion, offering a seamless shopping experience with a curated selection of stylish and timeless clothing. Built with a focus on performance, scalability, and user experience. [Visit](waredrop.vercel.app)

## Getting Started

Clone this repository

```
git clone https://github.com/Irtiza751/waredrop.git
```

Run `pnpm install` Note before running this command make sure you have _pnpm_ installed in your computer.
And then run

```
pnpm run dev
```

### Docker

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```
# Install dependencies
yarn install

# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create waredrop_network

# Build prod using new BuildKit engine
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build

# Start prod in detached mode
docker-compose -f docker-compose.yml up -d
```

Open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```

In order to check inside container

```
docker exec -it <mycontainer> sh
```
