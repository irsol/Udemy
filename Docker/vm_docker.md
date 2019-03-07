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
 
