## Virtual Machines vs Docker Containers

Docker containers aren't VMs. Docker containers use less memory and start faster than virtual machines.

#### Running apps using a VM on a server:

1. Infrastructure => Laptop, Server running in a data center, virtual private server in a cloud (for example Digital Ocean, Amazon)

2. Host Operating System => Mac Os, Windows, Linux

3. Hypervisor: 
	- Type 1: Direct link to the infrastructure (HyperKit(OSX)/Hyper-V(Win))
	- Type 2: Runs as an app on the host OS (VirtualBox/VMWare)

4. Guest Operating System

    - each Guest OS needs CPU and Memory resources as well as a disk space;
    - DB connection library;
    - Rupy, Python and NodeJS packages;
    - to isolate each apllications you need to run each one inside of his own Guest OS; 