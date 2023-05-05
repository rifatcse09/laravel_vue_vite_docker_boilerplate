# Dockerized Laravel 8 & Vue 3 App with TypeScript

Docker development implementation for Laravel 8.\* with:

- Nginx
- MySql
- PHP8.2
- Vue
- Node
- Reddis

## Installation

- Clone this repository `git clone https://github.com/rifatcse09/laravel_vue_vite_docker_boilerplate`
- Make sure you have docker installed on your local machine, you do not need to have php / mysql / redis / node installed on your machine
- Copy `.env` file: `cp .env.example .env`
- Set the environment variables in `.env` file
- Run command: `docker-compose up --build -d`
-  Run the container in bash mode: `docker exec -it Laravel_php /bin/sh`
- Inside this container now you can run all the commands as if if you are on local environment:
- Install composer dependencies: `composer install`
- Generate key: `php artisan key:generate`
- Run migration: `php artisan migrate`
- Run seeder: `php artisan db:seed`
- Install javascript dependencies: `npm`
- Install javascript dependencies: `npm install`
- Compile the assets: `yarn dev` / `yarn watch`  / `dcoker-compose run npm run dev`
- You can access the project at: `http://localhost:8000`
- or
- Install composer dependencies: `docker-compose run php composer install`
- Install javascript dependencies: `docker-compose run npm install`


## Contributing

You can contribute to this project by following this documentation.

#Refferecn
- https://github.com/nimatrazmjo/laravel-vuejs-docker/blob/main/Dockerfile.prod