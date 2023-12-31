---
title: "Getting Started with PowerShell"
description: "Day to day tasks take a lot of manual efforts and time, which we can reduce by automation using scripts. Here's How."
date: "2022-04-03"
author: "Saroj Kumar"
tags: ["Automation", "Windows", "Powershell"]
---

**Automation is the FUTURE!**

Day to day tasks take a lot of manual efforts and time, which we can reduce by automation using scripts like PowerShell,Python,Bash and more.

PowerShell proves to be the versatile scripting language for Windows Devices and Cloud Apps to automate simple and repeatitive task. Let's discuss how we can take this opportunity.

# Why PowerShell ?

As per Microsoft, with PowerShell we can sequentially execute multiple commands at once or pipe output commands to automate common tasks. It i s designed for app makers and administrators to automate tasks with environments and associated apps, flows, and connectors.

This increases the productivity of admins, engineers in just matter of time.

With system level access, the performance is high and with a lot of built in features, the scope is vast. This makes PowerShell the No.1 tool of Automation for Windows.

# Advantages and ways of Use

Powershell is most useful for managing and automating Microsft environments. It helps users automate repeatitive and time-consuming tasks and tasks such as user management, CI/CD, managing cloud services, finding, filtering, expoorting information, interacting with system apps and more.

Let's see how we can use it.

Every windows device such as Windows 7,8,10, Windows Server 2008, Windows Server 2012 R2 and more have pre-installed PowerShell.

## Checking if powershell installed or not

On your system, click on `Win` key and type 'powershell'. You will see some suggestions as below:

![PowerShell](powershell-search.png?v=1)

You see a bunch of powershell apps such as _Windows PowerShell_ and _Windows PowerShell ISE_.

_ISE_ stands for _Integrated Scripting Environment_.

_Windows PowerShell ISE_ provides you a environment for writing scripts while you can use _Windows PowerShell_ as a command shell.

> Other than running commands or writing script, we can test, debug our scripts in ISE.

Now that you know powershell is installed, let's write some scripts.

## Writing PowerShell Script

Open _PowerShell ISE_. You will see something like this:

![PowerShell App](powershell-app.png?v=1)

On the script pane, type `hostname`. Then, on the top you can see two little green play buttons. 1<sup>st</sup> one is for running whole file and 2<sup>nd</sup> one is for running only the selected script.

Click on the first play button, to run whole script. You will see your HostName on the left side PowerShell Terminal.

# PowerShell Syntax

Powershell can run Command Prompt commands as well as PowerShell Code.

Unlike other programming/scripting languages, it also has DATATYPES, OPERATORS, DATA STRUCTURES, FUNCTIONS, CONDITIONALS(If, For, ForEach, While, Do-While), CLASSES. Additionally, It has commandlets(cmdlets),libraries and modules.

## Variables and Datatypes

We declare varibales or assign values in PowerShell, in this way,

```powershell
$Var_Text = "Hello World!"
$Var_Number = 0
$Var_Bool = $true
$Var_null = $null

# Single Line Comment

<#
Multi
Line
Comment
#>

# Printing a variable to terminal
$Var_Text
Write-Host $Var_Text
```

Here, Write-Host is a builtin cmdlet in PowerShell, that prints a variable to terminal. More on cmdlets later.

## Conditinals and Functions

The basic systax is similar to the other programming/scripting languages, only with Capitalization ;p

```powershell
If($true<#Condition#>){
	# Action
}else{
	#Action
}

for ($i = 1; $i -lt 10; $i++){
	Write-Host $i
}

foreach ($Item in @(1,2,3,4,5)){ # @(1,2,3,4,5) creates an Array of 1,2,3,4,5
  Write-Host $Item
}

function MyFunction ($Param1, $Param2){
	#Action
}

# Calling a Function
# MyFunction -Param1 <Param1Value> -Param2 <Param2Value>
```

## Using CommandLets(cmdlets)

PowerShell has a builtin cmdlet for Every Operation you might perform on a Windows Device.

E.g. _Fetching a list of files present in a Folder_ (Similar to _dir_ for cmd.)

```powershell
Get-ChildItem -Path "path/to/folder"
```

To Avail all the list of cmdlets we can run below command:

```powershell
Get-Command -CommandType Cmdlet
```

OR to check if a specific command exists or not, type:

```powershell
Get-Command -Name <command_name>
```

To Learn more about PowerShell scripting, refer:

[Microsoft PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)

[PowerShell.org Free Resources](https://powershell.org/free-resources/)

If you want to read book:

[Learn Windows PowerShell in a Month of Lunches](https://www.amazon.in/dp/1617294160/ref=cm_sw_r_tw_dp_9ATD76GQM5NE4YV30YRH)

# Bonus Tips

> PowerShell is built on .NET. So, it has support of .NET which we can use to extend our possibility of automation and _Save the Day!_

> Use can install powershell on other platforms like linux and run powershell scripts/cmdlets.

[Powershell Gallery](https://www.powershellgallery.com/) provides a wide range of Modules/Packages that can be installed to PowerShell.

That's it for this post. Let me know if you find these useful. See you on the next one.

If you like the post, feel free to share it.

**Thank You**
