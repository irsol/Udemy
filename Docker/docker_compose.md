Wich Docker Compose you just creat docker-compose.yml file. It is a tool for defining and running multi container Docker apps. With docker-compose.yml file you configure application’s services. Then, with a single command, you create and start all the services from your configuration. This is helpful tool for development and production.

# Create docker-compose.yml

1. Add version:
```version: 3``` 

Define services property:
``` 
services: 
    redis:
   	  image: 'redis:5.0.4-alpine'
   	  ports:
   	    - '6379:6379'
   	  volumes:
   	    - 'redis:/data'  

   	web: 
   	  build: '.'
        depends_on:
          - 'redis'
        environment:
          FLASK_DEBUG: 'true'

   	  ports:
   	    - '5000:5000'
   	  volumes:
   	    - '.:/app' 

volumes:
  redis: {}

```

could be any name (web), but the service name that choose here will be used in Docker Image and Container names. '.' means current directory.

If you had both `build:` and `images:` properties defined than Docker Compose will used `images: 'iryna/web:1.0'` property as file name.

Docker compose yml file doesn't need to be at the same directory as Dockerfile. For exaple for the multiple apps in project, you could put each to the different files with Dockerfile than supply the path to the Dockerfile in docker-compose.yml.

`redis: {}` you can set optional customer value, for example read only.

`depends_on: ` it takes a list for the value, `redis` is the value, inform Docker Compose that our service depends on redis. Docker Compose will start the redis container before starts the web container.

Add an environment variables to the web service. There are two ways to add this variables. First way is to add an enviroment property. It's expect you to add key/value pairs, where key is an evironment variable name and value is the value of that variable: `environment: FLASK_DEBUG: 'true'`. 
The second method to add an evironment property: `env_file: - '.env'` 
The `.env` file property takes a list of environment files to load and it's load from top to bottom.

#### Managing web app with Docker Compose

`docker-compose --help` lists all commands

1. `docker-compose build` to build a web Image or 
   -  `docker-compose up --build -d` to run on the background

2. `docker-compose pull` to pull down any images that Compose project requires

3. `docker-compose up` to start the project

4. `docker-compose stop`to stop containers

5. `docker-compose -ps` to list containers of the project

- **To restart** all of your containers: `docker-compose restart` 
- **To restart** with optional arguments: `docker-compose restart redis`

- To execute commands on container `docker-compose exec web ls -la`

- `docker-compose exec web sh` to run a shell

- `docker-compose run redis redis-server --version` 

- To run only redis: `docker-compose up redis`

- To remove container: 
 1. List: `docker container ls -la`
 2. Remove: `docker-compose rm` or prune command

- To overwrite CMD instruction from the Dockerfile for a specific services. For example to run 2 services from the Dockerfile: copy web and paste in the Dockerfile, rename web to worker (any name), delete host property, add `command: `

- To build Docker custom Image: `docker-compose build` and add to the Dockerfile `images: 'iryna/web:1.0'`


#### Docker Compose API v1/v2/v3

There are currently three versions of the Compose file format:

- Version 1, the legacy format. This is specified by omitting a version key at the root of the YAML.

- Version 2.x. This is specified with a version: '2' or version: '2.1', etc., entry at the root of the YAML.

- Version 3.x, the latest and recommended version, designed to be cross-compatible between Compose and the Docker Engine’s swarm mode. This is specified with a version: '3' or version: '3.1', etc., entry at the root of the YAML.

