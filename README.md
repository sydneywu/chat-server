## Pre-requisite
Require Gulp.

Require Postgresql install.

Create two databases called "wedding-story" and "wedding-story-test"

## Installation
### Normal Installation
After cloning or pulling from repo. Run the following command to populate sample data in the development

npm install
gulp sample-data

This app also require a secret.js and sequelize-config.json in config/

## Test
To set up the test db, run
gulp remigrate-and-seed --env test

### Docker Installation (advanced)
docker build -t wedding-vendor-api .

####To run docker container
requirements: need to create secret.js and sequelize-config.json and link them like so
docker run -p3022:3022 -d --name wedven -v /home/penguin/docker-config/wedding-vendor-api/secret.js:/usr/src/app/config/secret.js -v /home/penguin/docker-config/wedding-vendor-api/sequelize-config.json:/usr/src/app/config/sequelize-config.json wedding-vendor-api

####To access docker container
docker exec -it wedven /bin/bash

## Usage
###Swagger
swagger for client is located at http://localhost:3022/api-docs/
change secret file SWAGGER_UI_FILE to view swagger for admin
