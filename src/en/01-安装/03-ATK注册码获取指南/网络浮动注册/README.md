---
title: Network Floating Registration
shortTitle: Application and Deployment
dir:
  text: Network Floating Registration
description: How network floating registration works, and the entry points for applying for a Register Id through the ATK development team and for deploying the remote service.
---

# Network Floating Registration

The Register Id of network floating registration is not bound to a single computer: it can be shared by multiple computers, with usage rights allocated dynamically over the local network, so it suits several computers on the same local network sharing one license.

## Application Method

Network floating registration does not support self-service application. Contact the ATK development team directly; for contact details see [Contact Us](../../../发布说明/联系我们.md).

## Registration Steps

Network floating registration is implemented by deploying the ATK remote service. The server holds the Register Id, and clients on the local network obtain usage rights dynamically:

1. **Deploy the server**: start the ATK server program on the server. On first startup, the terminal displays the automatically generated machine code.

2. **Apply for the Register Id**: provide the server machine code to the ATK development team and obtain the Register Id.

3. **Complete server registration**: enter the Register Id in the server terminal to complete server registration.

4. **Configure the clients**: on each client in the local network, select **Remote** in the **ATK Registration** window, fill in the server IP and port, and click <kbd>Register</kbd>.

For the complete procedure, see [Remote Service Deployment and Configuration](01-远程服务部署与配置.md).

## Notes

- The clients and the server must be on the same local network and reachable from each other; the service port defaults to 8090 and can be changed in server_config.ini on the server.

- If the server has previously completed a local registration, clean up the leftover registry entries first; see [Remote Service Deployment and Configuration](01-远程服务部署与配置.md) for details.

- The machine code changes after the server is replaced or the operating system is reinstalled, so a new Register Id must be applied for.
