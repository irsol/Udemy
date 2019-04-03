Wich Docker Compose you just creat docker-compose.yml file. It is a tool for defining and running multi container Docker apps. With docker-compose.yml file you configure application’s services. Then, with a single command, you create and start all the services from your configuration. This is helpful tool for development and production.

# Create docker-compose.yml

1. ```version: 3``` add version

define services property:
 ```services: 
   	  redis:
   	    image: 'redis:5.0.4-alpine'
   	    ports:
   	      - '6379:6379'

   	 web: '.'
   	  ports:
   	    - '5000:5000'
   	      volumes:
   	        - '.:/app'```

   	 could be any name, but the service name that choose here will be used in Docker Image and Container names. '.' means current directory.

Docker compose yml file doesn't need to be at the same directory as Dockerfile. For exaple for the multiple apps in project, you could put each to the different files with Dockerfile than supply the path to the Dockerfile in docker-compose.yml.

