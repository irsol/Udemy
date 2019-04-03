### Virtual Machines vs Docker Containers

Docker containers aren't VMs. Docker containers use less memory and start faster than virtual machines.
VMs good in isolating system resources and entire working inviroments, for example if you own webhosting company it's better to use VMs to separate ech customers. Docker isolates individual applications, not entire system.

#### Running apps using a VM on a server:
Starts in minutes

1. Infrastructure => Laptop, Server running in a data center, virtual private server in a cloud (for example Digital Ocean, Amazon)

2. Host Operating System => Mac Os, Windows, Linux

3. Hypervisor: 
	- Type 1: Direct link to the infrastructure (HyperKit(OSX)/Hyper-V(Win))
	- Type 2: Runs as an app on the host OS (VirtualBox/VMWare)

4. Guest Operating System

    - each Guest OS needs CPU and Memory resources as well as a disk space;
    - DB connection library;
    - Rupy, Python and NodeJS packages;

5. To isolate each apllications you need to run each one inside of his own Guest OS


#### Docker Containers
Starts in milliseconds

1. Ifrastructure => Laptop, Server running in a data center, etc.

2. Host Operating System => Mac Os, Windows, Linux

3. Docker Daemon is a service that runs in a background on Host OS and manages everything required to run and 
interact with Docker Containers

4. BINS/LIBS built-in into special packages Docker Images
	- Docker Daemon runs this Images

5. Each apps will be manage independently by the Docker Daemon
	- Docker Daemon communicates directly with Host OS;

#### VMs vs Docker

We can use VMs inside of Docker.

#### Docker's Architecture

*Docker daemon* is a service that runs on your host operating system. It runs only on Linex because it depends on a number of Linux kernel features.

*Docker daemon* itself exposes a *REST API*. From here, a number of different tools can talk to the daemon through this API. The most widespread tool is the Docker CLI. It is a command line tool that lets you talk to the Docker daemon. After Docker instalation, you get both Docker daemon and the Docker CLI tools together.

How Docker works:
![Docker architecture](docker_architecture.png)

Docker it's a Client <-> Server application. The Daemon is the server (or process), the CLI is one of many clients. There's also a number of third party clients.

#### Client -> Server Visualization 

![How the Client talks to the Server](client_server.png)

1. Client on the left side, this is where we're running various Docker commands. The client could be installed on your laptop running MacOs, Windows or a server running Linux.

2. Docker host is the host that run the Docker daemon. Typically Docker host referred to as the server running Docker daemon.

It’s very simple to configure the Docker client to connect to a remote Docker host. This is one way you’re able to run Docker on MacOS and Windows.

Docker client and Daemon can communicate over an API, network interface and etc. The client and daemon doesn't need to be on the same machine.

3. Registry is a part of the Docker ecosystem. It's not something that's already istalled by defailt with Docker, but instead a place to find and download Docker images.

Docker Daemon and CLI are both written on Golang and open source.

#### Docker Community Edition vs Docker Enterprise Edition

*Docker CE* is free and open source, has the same core feautures as Enterprise Edition.

Docker CE has 2 release channels: 
	1. *Edge* releases are every month
	2. *Stable* releases are every 3 month

*Docker EE* is integrated, certified, and supported to provide enterprises with the most secure container platform in the industry.
	- certified images and plugins;
	- Docker DataCenter;
	- recieve vulnerability scans results on Docker Images;
	- official support;
	- releases are every 3 month, ech release is supported and maintained for entire year;

#### Docker Toolbox vs Docker for Mac

Docker Toolbox is an installation tool that pulls together and configures a number of things so that Mac OS or Windows can run Docker. It installs 6 tools:
	
	1. Docker Community Edition/Enterprise Edition
	
	2. Docker Compose
	
	3. Docker Machine - is part of Docker ecosystem. It's a command tool,helps you to create servers and get Docker installed on to those servers.

	Docker Toolbox + Docker Machine == Virtual Box VM with Docker installed
	
	4. Virtual Box - Docker Daemon requaires Linux and Mac Os or Windows are not running Linux you need Virtual Box(Type 2 Hypervisor) to run Linux. Docker Toolbox will install and configurate Virtual Box for you. Than it use Docker Machine to create a Virtual Machine, this Virtual machine will be running a lightweight distribution of Linux.
	
	5. Docker QuickStart Terminal - to use Docker open Docker QuickSTart Terminal. It directly installed by Docker Toolbox. It's a special terminal that when launched it'll automatically create a new server with Docker Machine if no server already exist.
	
	6. Kitematic is a graphical tool that let you manage your Docker Images and containers, it's optional.

	Unlike the Docker Toolbox, Docker for Mac/Windows doesn't required Virtual Box. Instead it uses *Type 1 Hypervisors* that comes with your OS - for MacOs: HyperKit and for Windows: Hyper-V. It installs : 
		1. Docker CE/EE
		2. Docker Compose
		3. Docker Machine

*Docker for Mac/Windows*
		
	- Need a type 1 hypervisor
	- Docker for Mac now lets you run Virtual Box 5+ at the same time! Window users still can't have VM
	- Yosemite 10.10.3+
	- Win 10(Pro, Ent, Stu)

*Docker Toolbox*

	- Need a type 2 hypervisor
	- Can't have HyperKit or Hyper-V already running with the Docker Toolbox 
	- Mountain Lion 10.8+
	- Windows 7+ (Home is ok)

#### Usability Concerns

*Docker for Mac/Windows*
	
	- Docker daemon running on local host
	- Access localhost
	- Any terminal you want
	- Windows subsystem for Linux can't run Docker natively

*Docker Toolbox*
	
	- Docker Daemon running on remote host, that's mean it no longer running on local host instead it'll running on local ip adress on your network

	- Access 192.168.99.100 or whatever VB gives you as a local ip adress
	- Docker QuickStart Terminal
	- Docker

#### Performance woes

*Docker for Mac/Windows*

	- Might be slower for certain use cases


*Docker Toolbox*

	- Might be faster for certain use cases

#### Docker Image vs Container?

**Docker Image** is a combination of a file system and parameters. It's a package that rolls up everything you need to run your application. No state and once build never changes. You can build a new version. Docker Image is something that you can download, buils and run.

 You can thing abount Docker Image as a class and Container is an instance of that class. One Image, many Containers.

 **Docker Containers** are immutable.

 #### Downloading and Storing Docker Images

 Running Docker Image creates a Docker Container. For example, for `docker run hello-world` you download hello-world Docker Image from the Docker Hub. **Docker Hub** is a part of Docker ecosystem, it allows you to find Docker Images and manage your own Images.

 Docker Hub is a Docker Registry. **Docker Registry** is a place where you can store Docker Images.

 *Docker Hub*
 	
 	- Store your Images
 	- Store free community Images
 	- Official Image
 	- Paid trusted images
 	- Keep tabs on paid content

#### Docker Build Process

Two ways to build Docker Images:

1. Run a Docker Container
	- Inside the container you can change and commit `docker commit `

2. Use Dockerfile, it has build steps for your application. It's a text file that you create and it read by Docker. Each step in inside the Dockerfile becomes a separate layer in your Docker Image. 

Docker Images may have one or more layers. Each layer has an id and file inside. Docker Image is a result when all years are joined.

#### Creating a Dockerfile

1. First `FROM` instruction. Use official base Docker Images. For example: `FFOM python: 3.6-alpine` from the left side is the Doker Image and fromthe right side the tag. If you skip the tag, it'll take the latest version.

2. Create a folder to store Flask app. Use `RUN` instruction, it allows you to run any script that you can normally run inside your base Images Operating System without Docker:
`RUN mkdir /app`
3. `WORKDIR /app` here we pass directory or directories.

4. `COPY requirements.txt requirements.txt` takes source and destination
5. `RUN pip install -r requirements.txt`

6. `COPY . .` first period - copy at the same level as Dockerfile and below, second period - is a destination.

#### Creating a Dockerfile steps

1. Pull from the Python alpine image

2. `RUN mkdir app` Make a folder to store the application source code
3. `WORKDIR /app` Set a working directory

4. `COPY requirements.txt requirements.txt`
5. `RUN pip install -r requirements.txt`

6. `COPY . .` Copy application source code

7. `LABEL maintainer="irsol <email>"` \
		 `version="1.0"`
	
	Expect to pass in key and value, you can attach a metadata to a Docker Image. You can retrieve with special command. Label is optional. By adding Label you can filter your Docker Container output and only add Containers that match the filter.

8. `CMD flask run --host=0.0.0.0 --port=5000`

	Defines default command that will be run when this Docker Image get started 

#### Building and Pushing Docker Images

 `docker image build -t web1 .` tag image with `-t` flag, to be `web1` 
 
###### Commands

`docker image --help`

`docker image inspect web1`

`docker image built -t web1:1.0 .`

`docker image ls`

`docker image rm web1:1.0` delete image with tag 1.0 (repository or tag)

`docker login` to authenticate

`docker image tag web1 nickname/web1:latest` tag the image with your docker hub username

`docker image push nickname/web1:latest` to push Docker Image

`docker image rm -f 4characters of image id` delete the local copy of the image

 ######To remove docker username from tag
 
 `docker image tag username/web1` to create the new tag

 `docker image rm username/web1` to delete the old tag

#### Running Docker Container

`docker container ls` list all running containers

`docker container run -it -p 5000:5000 -e FLASK_APP=app.py web1` 
-it flag, -p flag for ports it expected that you provide 2 ports, separated by a column. First port for Docker host, second port for Docker Container. -e flag stands for enviroment variable, in my example flask app. The last one is the name of Docker Image you want to run.

`docker container ls -a` to list all stopped containers
`ctrl C` to stop the process

`docker container rm name` remove containers by name

`docker container run -it --rm --name web1 -p 5000:5000 -e FLASK_APP=app.py web1` --rm remove the container after it stopped, --name container's custome name web1

`docker container run -it --rm --name web1 -p 5000:5000 -e FLASK_APP=app.py -d web1` -d to start a container in detached mode, you use -d=true or just -d option. If you use -d with --rm, the container is removed when it exits or when the daemon exits, whichever happens first.

`docker container logs 4 characters of the container id or the container name` to see log output, -f flag shows in a real time logs

`docker container stats` shows you same useful information about memory usage, CPU and other.

`docker docker container run -it --name web1_3 -p 5000 -e FLASK_APP=app.py -d --restart on-failure web1` --restart on-failure[:max-retries] Restarts only if the container exits with a non-zero exit status. Optionally, limits the number of restart retries the Docker daemon attempts.

#### Code reloading with Volumes

`docker container run -it -p 5001:5000 -e FLASK_APP=app.py --rm --name web1_2 -e FLASK_DEBUG=1 web1` add debug mode

`docker container run -it -p 5001:5000 -e FLASK_APP=app.py --rm --name web1_2 -e FLA_DEBUG=1 -v "$PWD:/app" web1` -v stands for the volume, $PWD:/app is our directory to connect to the container, take everything from the working directory and place it into app folder in running container. Use -v tag only in development mode. You can add multiple -v flag.

#### Debugging

Lynux uses *inotify* to monitoring file system for changes. If you have a bag, make change in Dockerfile: `FROM python:3.6-slim` 

If it doesn't help: 

- connect to the running container `docker container exas -it web1_2 bash` (bash for slim, sh for alpine), it executed interactive bash/sh session into the container web1_2
- `ls -la` list all the files in the current directory
- delete pyc files `rm *.pyc`
- exit `ctrl + d`

#### User flag: --user

Takes you username "$(id -u):$(id -g)" to name the new file by username instead by root(default):

`docker conatainer exec -it --user "$(id -u):$(id -g)" web1_2 touch web1_2`

- to list the files in directory: `ls -la`

#### Python prompt

`docker container run -it --rm --name testingpython python:3.6-alpine python`

#### Linking Containers with Docker Networks

*Internal networks* operate over a LAN - stands for local area network. 

*External networks* operate over a WAN - stands for wired area network.

Docker allows to run containers on multiple networks. You can use Docker's default network or create internal or external networks.

When you install Docker, it creates three networks automatically. You can list these networks using the docker network ls command. These three networks are built into Docker. When you run a container, you can use the --network flag to specify which networks your container should connect to. You can't remove them, they're requared by Docker Daemon. 

`docker network inspect name` to inspect network

**Join both containers to the Docker default bridge network**
It can talk to ech other over the local ip adress.

`docker container run --rm -itd -p 6379:6379 --name redis redis:4.0-alpine` to run. 6379 is default redis port, -itd run in a background. 

`docker container run -itd -p 5000:5000 -e FLASK_APP=app.py -e FLASK_DEBUG=1 --name web2 -v "$PWD:/app" web2`

`docker exec redis ifconfig` to check info, local ip adress.

`docker exec web2 ifconfig`

`docker exec web2 ping ip web2`

To varify if the network works, ping redis server from the flask server: `docker exec web2 ping ip redis`

`docker exec redis cat /etc/hosts` shows container id

#### Create bridge network

`docker network create --driver bridge firstnetwork` to create network

`docker network inspect firstnetwork` to inspect new network, as a containers is empty, need to stop flask app and redis and restart them on this network.

`docker container stop web2` `docker container stop redis`

`docker container run --rm -itd -p 6379:6379 --name redis --net firstnetwork redis:4.0-alpine` to run. 6379 is default redis port, -itd run in a background.

`docker container run -itd -p 5000:5000 -e FLASK_APP=app.py -e FLASK_DEBUG=1 --name web2 -v "$PWD:/app" --net firstnetwork web2`

`docker ps -a` to list docker containers

`docker exec web2 ping redis` to access docker containers by name, instead of looking for ip adress and ping with it.

`docker inspect network firstnetwork`

- `docker exec -it redis redis-cli` redis-cli is a program, to interact with redis server directly. It's like use SQL to connect and iteract with DB.
- `KEYS *` 
- `INCRBY web2_counter 1000000` Increments the number stored at key by one. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers.
- `ctrl d` to exit

**Bridge driver can only connect containers that are on the same docker host!**

**Use Overlay driver to connect containers in a multiple hosts.**

#### Persisting Data to Docker Host 

Docker containers are immutable, after stopping redis and flask app we don't have counter data.

Restart redis and flask app, start redis before flask, redis is dependency of flask app:

- `docker container run --rm -itd -p 6379:6379 --name redis --net firstnetwork redis:4.0-alpine`

- `docker container run -itd -p 5000:5000 -e FLASK_APP=app.py -e FLASK_DEBUG=1 --name web2 -v "$PWD:/app" --net firstnetwork web2`

**Set up a volume for redis:**
`web2_redis:/data` Named valumes allow to supply a name instead of file path, Docker manage it's valume for you on it's own valumes directory. It's helpful when you need safe and load data for db.

- `docker container stop redis`
- `docker volume create web2_redis` to create named volume
- `docker volume ls` to list volumes
- `docker volume inspect web2_redis` to list details. "Mountpoint" is where data will be srored. 
- `docker container run --rm -itd -p 6379:6379 --name redis --net firstnetwork -v web2_redis:/data  redis:4.0-alpine` restart redis, add `-v web2_redis/data`, `/data` directory where redis will be looking for by default to restore data.

- **Manually save redis data**: `docker exec redis redis-cli SAVE`
- stop and restart redis with -v web2_redis/data flag, reload localhost:5000 to see that previous data saved.

#### Sharing Data Between Containers

We used named volume to store data from the container on the docker host.

Learn how to link data between containers without docker host. Popular usecase for this will be web apps that have static files such as: JS, CSS, Images, etc. Most web frameworks have built-in server for development mode which serve this files. In production you need to serve this files through a proper server such as **ngnix/Apache**.

At the Dockerfile added new instruction: `VOLUME ["/app/public"]` this line says that docker to expose /app/public folder as a valume when the container runs. It's possible to add more volumes, just put each on the new line.

- `docker image build -t web .` build new Docker Image, since we changed Dockerfile
- `docker container run -itd -p 5000:5000 -e FLASK_APP=app.py -e FLASK_DEBUG=1 --name web2 -v "$PWD:/app" --net firstnetwork web2` run Flask container
- `docker container run --rm -itd -p 6379:6379 --name redis --net firstnetwork -v web2_redis:/data --volumes-from web2 redis:4.0-alpine` add `--volumes-from web2` web2 is container name where volume, run redis
- `docker container exec -it redis sh` drop to the redis container, to check if the volume is working: 
		- `cd /app/public`  
		- `ls -la`
		- `cat main.css` to check css file

You can see all changes in redis container immediatly without restarting the container.

**Volume instructions**

- `docker container stop web2` `docker container stop redis` stop containers
- comment VOLUME line in the Dockerfile
- `docker image build -t web2 .` build new image
- `docker container run -itd -p 5000:5000 -e FLASK_APP=app.py -e FLASK_DEBUG=1 --name web2 -v "$PWD:/app" -v /app/public --net firstnetwork web2` run Flask container with `-v /app/public`
- `docker container run --rm -itd -p 6379:6379 --name redis --net firstnetwork -v web2_redis:/data --volumes-from web2 redis:4.0-alpine` add `--volumes-from web2` run redis 
- `docker container exec redis cat /app/public/main.css` to check 


#### Optimizing Docker Images

Create `.dockerignore` file and add necessery patterns:

`.dockerignore`

`.git/`

`.foo/*`

`**/*.swp`  useful when use vim as a text editor

`**/*.txt` ignore text file 
`!special.txt` except this text file, could have any name

Build new Image:

- `docker image build -t weboptimized .`
- `docker image ls` to list all images
- add dependency `postgresql-dev \` to the Dockerfile

#### ENTRYPOINT

ENTRYPOINT [" "] instructions allows you to execute a script after Docker Container starts.

For example, you want to use 1 image for different projects, each project has different set ups, ENV variables let you configure this.

ENTRYPOINT steps in Dockerfile: 

- `COPY docker-entrypoint.sh /` add an entrypoint script to the Dockerdile.

- `RUN chmod +x /docker-entrypoint.sh` check if an entrypoint script is executable because it'll be run from within a Docker Image and this is how Linux file permission is work.

- `ENTRYPOINT ["/docker-entrypoint.sh"]` point where script is located.