---
title: "Cloudera Manager Free Edition Installation Guide"
description: "在 Ubuntu Server 上安装 Cloudera Manager 免费版，并搭起 CDH 集群的步骤记录。"
pubDate: 2014-04-22
slug: 2014/04/22/cloudera-manager-free-edition-installation-guide
category: 运维
tags:
  - Hadoop
  - 运维
draft: false
---

### Install Ubuntu Server Operation System (64bit)
•	**Download installation image Ubuntu-server 12.04 from** [Ubuntu Web Site](http://www.ubuntu.com).  
•	Perform installation as per below steps.    

   

    1.  Select “Install Ubuntu Server” to start installation
 
![](/images/1.jpg)

    	



    2. Select language, e.g. English
![](/images/2.jpg)

    3.Select location, e.g. United States
![](/images/3.jpg)
 


       4.Configure the keyboard, press <NO> to skip keyboard layout detecting and select keyboard layout from a list
![](/images/4.jpg)

      5.Select a country for the keyboard, e.g. English (US)
![](/images/5.jpg)

     6.	Select the matched keyboard layout for this machine, e.g. English (US)
![](/images/6.jpg)

     7.Then configure the network, enter the hostname for this system.
![](/images/7.jpg)

     8.Create a new user account, enter full name of this new user and his/her username and password.
![](/images/8.jpg)
![](/images/9.jpg)
![](/images/10.jpg)
![](/images/11.jpg)

     9.Select time zone, e.g. Shanghai
![](/images/12.jpg)
  
     10.Partition disks, select “Guided – use entire disk”
![](/images/13.jpg)
![](/images/14.jpg)

     11.Press <Yes> to complete current partitioning.
![](/images/15.jpg)

     12.Start installing the base system.
![](/images/16.jpg)
   
     13.HTTP proxy setup.
![](/images/17.jpg)

    14.Then start configuring apt and preparing software installation.
![](/images/18.jpg)
![](/images/19.jpg)

    15.Set up how to manage upgrades on this system, e.g. No automatic updates
![](/images/20.jpg)

    16.Choose software to install, please note the OpenSSH server is required to be installed.
![](/images/21.jpg)

    17.Start software installation.
![](/images/22.jpg)

    18.Press <Yes> to install the GRUB boot loader to the master boot record.
![](/images/23.jpg)

     19.Press <Continue> to exit installation and boot into the new system
![](/images/24.jpg)

     20.You are now boot into the Ubuntu system.

**- Set up Internet Access**

    Set up IP address
There are two ways to gain IP address, either dynamically allocated or manually specified. 

    a)	DHCP setting (IP address dynamically allocated) 
The network configuration file is located at /etc/network/interfaces.
![](/images/25.jpg)

     b)	Specify a static IP address by modifying the network configuration, e.g. # sudo vi /etc/network/interfaces
![](/images/26.jpg)

     •	Restart network
a)	Disable network connections by the command “ifconfig eth0 down”
b)	Enable network connections by the command “ifconfig eth0 up”
    
     •	Set up DNS
Add nameserver to the DNS configuration file /etc/resolvconf/resolv.conf.d/base.
# sudo vi /etc/resolvconf/resolv.conf.d/base
![](/images/27.jpg)


**Install Oracle JDK (64bit)**

   •	Download installation package jdk-6u31-linux-x64.bin from the Oracle Web Site.

•	Make this package executable by the command “chmod 744 jdk-6u31-linux-x64.bin”

•	Run jdk-6u31-linux-x64.bin to complete JDK installation, e.g. # sudo ./ jdk-6u31-linux-x64.bin

•	Configure JDK Environment variables
   
![](/images/28.jpg)

Note: the recommended JDK version is 1.6.0_31, and the minimum supported version is 1.6.0_8

**Install Cloudera Manager Installer**

•	Download the installer cloudera-manager-installer.bin from the [Cloudera Downloads page](http://www.cloudera.com).

•	Make the software executable by the command “chmod 744 cloudera-manager-installer.bin”

•	Perform installation as per below steps.

    a)	Run cloudera-manager-installer.bin to start installation, select <next> to next step.
![](/images/29.jpg)
![](/images/30.jpg)

     b)	Select <Yes> to accept the license and then start installing.
![](/images/30.jpg)

The installation of Cloudera Manager Installer is in progress
![](/images/31.jpg)

    c)	After the installation is completed, you can access to Cloudera Manager Admin Console, the default port number of admin console is 7180.
![](/images/32.jpg)
**
Install Cloudera Manager and Set up CDH Cluster**

•	Perform below steps to complete the installation and configuration.

    a)	Login to Cloudera Manager admin console, the default user name and password are admin.
![](/images/33.jpg)

     b)	Click the “just install the latest Free Edition” button to install Cloudera Manager Free Edition.
![](/images/34.jpg)

    c)	Click the “Continue” button.
![](/images/35.jpg)

    d)	Input the IP addresses and separated by comma, Click the “Search” button to find out the specified hosts for the CDH cluster installation.
![](/images/36.jpg)

    e)	Then install the CDH on selected hosts. 
![](/images/37.jpg)

    f)	Select the version of CDH, e.g. CDH4, then go to next step.
![](/images/38.jpg)

    g)	Provide SSH login credentials and start installation.
![](/images/39.jpg)

    The installation is in progress.
![](/images/40.jpg)

Note: If the installation is failed on some of the hosts, click the “Retry” to re-install CDH on a selected failed host, or click the “Retry Failed Hosts” to re-install CDH on all failed hosts.

    h)	Installation completed successfully, click the “Continue” button to complete the rest of steps. 

![](/images/41.jpg)
![](/images/42.jpg)
![](/images/43.jpg)
![](/images/44.jpg)

the installation is now done.
