---
layout: post
title: "Cloudera Manager Free Edition Installation Guide"
categories:
- 
tags:
- 


---
###Install Ubuntu Server Operation System (64bit)
•	**Download installation image Ubuntu-server 12.04 from** [Ubuntu Web Site](http://www.ubuntu.com).  
•	Perform installation as per below steps.    

   

    1.  Select “Install Ubuntu Server” to start installation
 
![](https://zhuliuw.github.io/assets/images/1.jpg)

    	



    2. Select language, e.g. English
![](https://zhuliuw.github.io/assets/images/2.jpg)

    3.Select location, e.g. United States
![](https://zhuliuw.github.io/assets/images/3.jpg)
 


       4.Configure the keyboard, press <NO> to skip keyboard layout detecting and select keyboard layout from a list
![](https://zhuliuw.github.io/assets/images/4.jpg)

      5.Select a country for the keyboard, e.g. English (US)
![](https://zhuliuw.github.io/assets/images/5.jpg)

     6.	Select the matched keyboard layout for this machine, e.g. English (US)
![](https://zhuliuw.github.io/assets/images/6.jpg)

     7.Then configure the network, enter the hostname for this system.
![](https://zhuliuw.github.io/assets/images/7.jpg)

     8.Create a new user account, enter full name of this new user and his/her username and password.
![](https://zhuliuw.github.io/assets/images/8.jpg)
![](https://zhuliuw.github.io/assets/images/9.jpg)
![](https://zhuliuw.github.io/assets/images/10.jpg)
![](https://zhuliuw.github.io/assets/images/11.jpg)

     9.Select time zone, e.g. Shanghai
![](https://zhuliuw.github.io/assets/images/12.jpg)
  
     10.Partition disks, select “Guided – use entire disk”
![](https://zhuliuw.github.io/assets/images/13.jpg)
![](https://zhuliuw.github.io/assets/images/14.jpg)

     11.Press <Yes> to complete current partitioning.
![](https://zhuliuw.github.io/assets/images/15.jpg)

     12.Start installing the base system.
![](https://zhuliuw.github.io/assets/images/16.jpg)
   
     13.HTTP proxy setup.
![](https://zhuliuw.github.io/assets/images/17.jpg)

    14.Then start configuring apt and preparing software installation.
![](https://zhuliuw.github.io/assets/images/18.jpg)
![](https://zhuliuw.github.io/assets/images/19.jpg)

    15.Set up how to manage upgrades on this system, e.g. No automatic updates
![](https://zhuliuw.github.io/assets/images/20.jpg)

    16.Choose software to install, please note the OpenSSH server is required to be installed.
![](https://zhuliuw.github.io/assets/images/21.jpg)

    17.Start software installation.
![](https://zhuliuw.github.io/assets/images/22.jpg)

    18.Press <Yes> to install the GRUB boot loader to the master boot record.
![](https://zhuliuw.github.io/assets/images/23.jpg)

     19.Press <Continue> to exit installation and boot into the new system
![](https://zhuliuw.github.io/assets/images/24.jpg)

     20.You are now boot into the Ubuntu system.

**- Set up Internet Access**

    Set up IP address
There are two ways to gain IP address, either dynamically allocated or manually specified. 

    a)	DHCP setting (IP address dynamically allocated) 
The network configuration file is located at /etc/network/interfaces.
![](https://zhuliuw.github.io/assets/images/25.jpg)

     b)	Specify a static IP address by modifying the network configuration, e.g. # sudo vi /etc/network/interfaces
![](https://zhuliuw.github.io/assets/images/26.jpg)

     •	Restart network
a)	Disable network connections by the command “ifconfig eth0 down”
b)	Enable network connections by the command “ifconfig eth0 up”
    
     •	Set up DNS
Add nameserver to the DNS configuration file /etc/resolvconf/resolv.conf.d/base.
# sudo vi /etc/resolvconf/resolv.conf.d/base
![](https://zhuliuw.github.io/assets/images/27.jpg)


**Install Oracle JDK (64bit)**

   •	Download installation package jdk-6u31-linux-x64.bin from the Oracle Web Site.

•	Make this package executable by the command “chmod 744 jdk-6u31-linux-x64.bin”

•	Run jdk-6u31-linux-x64.bin to complete JDK installation, e.g. # sudo ./ jdk-6u31-linux-x64.bin

•	Configure JDK Environment variables
   
![](https://zhuliuw.github.io/assets/images/28.jpg)

Note: the recommended JDK version is 1.6.0_31, and the minimum supported version is 1.6.0_8

**Install Cloudera Manager Installer**

•	Download the installer cloudera-manager-installer.bin from the [Cloudera Downloads page](http://www.cloudera.com).

•	Make the software executable by the command “chmod 744 cloudera-manager-installer.bin”

•	Perform installation as per below steps.

    a)	Run cloudera-manager-installer.bin to start installation, select <next> to next step.
![](https://zhuliuw.github.io/assets/images/29.jpg)
![](https://zhuliuw.github.io/assets/images/30.jpg)

     b)	Select <Yes> to accept the license and then start installing.
![](https://zhuliuw.github.io/assets/images/30.jpg)

The installation of Cloudera Manager Installer is in progress
![](https://zhuliuw.github.io/assets/images/31.jpg)

    c)	After the installation is completed, you can access to Cloudera Manager Admin Console, the default port number of admin console is 7180.
![](https://zhuliuw.github.io/assets/images/32.jpg)
**
Install Cloudera Manager and Set up CDH Cluster**

•	Perform below steps to complete the installation and configuration.

    a)	Login to Cloudera Manager admin console, the default user name and password are admin.
![](https://zhuliuw.github.io/assets/images/33.jpg)

     b)	Click the “just install the latest Free Edition” button to install Cloudera Manager Free Edition.
![](https://zhuliuw.github.io/assets/images/34.jpg)

    c)	Click the “Continue” button.
![](https://zhuliuw.github.io/assets/images/35.jpg)

    d)	Input the IP addresses and separated by comma, Click the “Search” button to find out the specified hosts for the CDH cluster installation.
![](https://zhuliuw.github.io/assets/images/36.jpg)

    e)	Then install the CDH on selected hosts. 
![](https://zhuliuw.github.io/assets/images/37.jpg)

    f)	Select the version of CDH, e.g. CDH4, then go to next step.
![](https://zhuliuw.github.io/assets/images/38.jpg)

    g)	Provide SSH login credentials and start installation.
![](https://zhuliuw.github.io/assets/images/39.jpg)

    The installation is in progress.
![](https://zhuliuw.github.io/assets/images/40.jpg)

Note: If the installation is failed on some of the hosts, click the “Retry” to re-install CDH on a selected failed host, or click the “Retry Failed Hosts” to re-install CDH on all failed hosts.

    h)	Installation completed successfully, click the “Continue” button to complete the rest of steps. 

![](https://zhuliuw.github.io/assets/images/41.jpg)
![](https://zhuliuw.github.io/assets/images/42.jpg)
![](https://zhuliuw.github.io/assets/images/43.jpg)
![](https://zhuliuw.github.io/assets/images/44.jpg)

the installation is now done.