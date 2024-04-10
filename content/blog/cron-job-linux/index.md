---
title: "A Beginner's Guide to Cron Jobs in Ubuntu and CentOS"
description: "In this brief guide, we explore the fundamentals of cron jobs and provide a step-by-step walkthrough for configuring them in Ubuntu and CentOS environments."
date: "2024-03-30"
author: "Anshuman Bharatiya"
tags: ["Linux", "Ubuntu", "CentOS", "Automation"]
---


**Quick Summary:**

In the realm of Linux server management, cron jobs reign supreme as the go-to tool for automating repetitive tasks. But what exactly are cron jobs, and how can you set them up in popular distributions like Ubuntu and CentOS?

In this brief guide, we explore the fundamentals of cron jobs and provide a step-by-step walkthrough for configuring them in Ubuntu and CentOS environments. From understanding the syntax to executing commands at specific intervals, this blog sheds light on how cron jobs can streamline system maintenance and enhance productivity.

# Introduction

In the realm of Linux system administration, efficiency and automation are paramount. Whether you're managing a single server or a complex network of machines, finding ways to automate repetitive tasks can save time, reduce errors, and improve overall productivity. One of the most powerful tools in a Linux administrator's arsenal is the cron job.

Cron jobs, short for "chronograph jobs," are a fundamental aspect of Unix-like operating systems, including popular distributions like Ubuntu and CentOS. They provide a simple yet effective way to schedule and automate routine tasks, ranging from system maintenance to data processing and script execution. In this comprehensive guide, we'll explore the intricacies of cron jobs, from understanding their syntax to setting them up in Ubuntu and CentOS environments.

Before delving into the practical aspects, let's take a moment to understand what cron jobs are and why they are essential in Linux system administration.

# What is a Cron Job?

At its core, a cron job is a task scheduler in Unix-like operating systems. Named after the "`cron`" daemon that executes them, cron jobs allow users to schedule commands or scripts to run periodically at predetermined times, dates, or intervals. This automation capability is invaluable for managing system tasks that need to be performed regularly without manual intervention.

Cron jobs operate based on a simple yet flexible syntax, enabling users to define precise schedules for executing commands or scripts. By specifying minute, hour, day of the month, month, and day of the week parameters, users can tailor cron jobs to suit their specific needs, whether it's running a backup script every night or sending out system status reports every Monday morning.

# Why are Cron Jobs Important?

The importance of cron jobs in Linux system administration cannot be overstated. They offer several key benefits:

1. **Automation:**

    Cron jobs automate repetitive tasks, freeing up administrators' time to focus on more critical aspects of system management.

2. **Consistency:**

    By scheduling tasks to run at regular intervals, cron jobs ensure that essential maintenance activities are performed consistently, reducing the risk of overlooking critical tasks.

3. **Efficiency:**

    Automating tasks with cron jobs improves overall system efficiency by streamlining processes and reducing manual intervention.

4. **Reliability:**

    Cron jobs execute tasks reliably and predictably, minimizing the potential for human error associated with manual execution.

# Prerequisites

To complete this guide, you'll need access to a computer running CentOS 8 or Ubuntu 18.04. This could be your local machine, a virtual machine, or a virtual private server.


# Installing of Cron

Installing cron on CentOS and Ubuntu is a straightforward process. Cron is usually pre-installed on most Linux distributions, including CentOS and Ubuntu. However, if it's not installed, you can easily do so using the package manager specific to each distribution.

### 1. Installing Cron on CentOS:

To install cron on CentOS 8, you can use the yum package manager. Open a terminal and execute the following command:

```cmd
sudo yum update
sudo yum install cronie
```
This command will install the cronie package, which provides the cron daemon (cronie) and the cron job scheduler.


### 2. Installing Cron on Ubuntu:

On Ubuntu 18.04, you can use the apt package manager to install cron. Open a terminal and execute the following command:

```cmd
sudo apt update
sudo apt install cron
```
This command will ensure your package lists are up to date and then install the cron package.

### Verifying Cron Installation:

Once the installation is complete, you can verify that cron is installed and running by checking the status of the cron service:

**On CentOS:**

Check the cron status, run the following command:

```cmd
sudo systemctl status crond.service
```

To start the cron daemon, run the following command:

```cmd
sudo systemctl start crond.service
```

To set cron to run whenever the server starts up, type:

```cmd
sudo systemctl enable crond.service
```

**On Ubuntu:**

Check the cron status, run the following command:

```cmd
sudo systemctl status cron
```

To start the cron daemon, run the following command:

```cmd
sudo systemctl start cron
```

To set cron to run whenever the server starts up, type:

```cmd
sudo systemctl enable cron
```

# Understanding of How Cron Works

Cron operates through a daemon called cron, which continuously checks the `/etc/crontab` file and the `/etc/cron.d/` directory for scheduled tasks. It also reads per-user crontab files located in `/var/spool/cron/crontabs/`. Each line in these files represents a cron job, specifying when and what command or script to execute. The cron daemon evaluates these cron jobs and executes them accordingly.

Cron jobs follow a specific syntax for defining the schedule at which they should run. The syntax consists of five fields, each representing a unit of time: `minute`, `hour`, `day of the month`, `month`, `and day of the week`. These fields are separated by spaces and can contain numerical values, wildcard characters, and ranges.

**A typical cron job entry looks like this:**

```cmd
* * * * * command_to_execute
- - - - -
| | | | |
| | | | +----- Day of the week (0 - 7) (Sunday is 0 or 7)
| | | +------- Month (1 - 12)
| | +--------- Day of the month (1 - 31)
| +----------- Hour (0 - 23)
+------------- Minute (0 - 59)
```

# Special Syntax

**Example: 1**

Here’s a functional example of a cron expression. This expression runs the command curl `http://www.google.com` every Tuesday at 5:30 PM:

```cmd
30 17 * * 2 curl http://www.google.com
```

**Example: 2**

Every Day Restart Apache in Moring at 5.30 AM:

```cmd
30 5 * * * root systemctl restart httpd.service
```

**_Here are some more examples of how to use cron’s scheduling component:_**

```cmd
* * * * * - Run the command every minute.

12 * * * * - Run the command 12 minutes after every hour.

0,15,30,45 * * * * - Run the command every 15 minutes.

*/15 * * * * - Run the command every 15 minutes.

0 4 * * * - Run the command every day at 4:00 AM.

0 4 * * 2-4 - Run the command every Tuesday, Wednesday, and Thursday at 4:00 AM.

20,40 */8 * 7-12 * - Run the command on the 20th and 40th minute of every 8th hour every day of the last 6 months of the year.
```

There are also several shorthand commands you can use in your crontab file to help streamline job scheduling. They are essentially shortcuts for the equivalent numeric schedule specified:

```cmd
Shortcut	             Shorthand
@hourly	--------------   0 * * * *
@daily	--------------   0 0 * * *
@weekly	--------------   0 0 * * 0
@monthly--------------   0 0 1 * *
@yearly	--------------   0 0 1 1 *
```


# Managing Crontabs
Crontabs are files that contain a list of cron jobs for individual users. These files are located in the `/var/spool/cron/crontabs/` directory. Users can manage their crontabs using the crontab command-line utility.

To edit the current user's crontab, you can use the following command:

```cmd
crontab -e
```

This command opens the user's crontab file in the default text editor, allowing them to add, modify, or remove cron jobs as needed. Once the changes are saved and the file is closed, the cron daemon automatically reloads the user's crontab, and the new cron jobs take effect.

Additionally, users can list their crontab contents without editing them using the following command:

```cmd
crontab -l
```

# Restricting Access

You can manage which users are allowed to use the `crontab` command with the `cron.allow` and `cron.deny` files, both of which are stored in the `/etc/` directory. If the `cron.deny` file exists, any user listed in it will be barred from editing their crontab. If `cron.allow` exists, only users listed in it will be able to edit their crontabs. If both files exist and the same user is listed in each, the `cron.allow` file will override `cron.deny` and the user will be able to edit their `crontab`.

For example, to deny access to all users and then give access to the user saroj, you could use the following command sequence:

```cmd
sudo echo ALL >>/etc/cron.deny
sudo echo saroj >>/etc/cron.allow
```

First, we lock out all users by appending `ALL` to the `cron.deny` file. Then, by appending the username to the `cron.allow` file, we give the saroj user profile access to execute cron jobs.

Note that if a user has `sudo` privileges, they can edit another user’s `crontab` with the following command:

```cmd
sudo crontab -u user -e
```

However, if `cron.deny` exists and user is listed in it and they aren’t listed in `cron.allow`, you’ll receive the following error after running the previous command:

```cmd
Output:
The user user cannot use this program (crontab)
```

By default, most `cron` daemons will assume all users have access to cron unless either `cron.allow` or `cron.deny` exists.

<br>

# Conclusion

Cron jobs are invaluable tools in Ubuntu and CentOS for automating tasks, saving time, and ensuring system efficiency. By mastering cron jobs, administrators can streamline their workflow, enhance productivity, and focus on more critical aspects of server management. With just a few simple commands, you can schedule tasks to run at specific intervals and take full control of your Linux server environment.

<br>

**_Posted By ~ Anshuman Bharatiya on Saturday, 30 March 2024_**

**_If you like this post, feel free to share it._**

**_Thank You_**