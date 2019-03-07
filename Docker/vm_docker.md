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

![How the Client telks to the Server](client_server.png)

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