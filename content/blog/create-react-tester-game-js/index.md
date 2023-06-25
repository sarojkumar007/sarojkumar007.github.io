---
title: "Create a Reaction Tester Game using JavaScript"
description: "A beginners blog, which covers concepts like DOM Manipulation to create a Reaction Tester Game using JavaScript"
date: "2020-04-05"
author: "Saroj Kumar"
tags: ["Small Projects","Javascript"]
---

Hey Guys! Here is a fun post where I'll walk you through how to create a JavaScript Game called **Reaction Tester**.

# How the Game Works

Its a really simple and exciting game. There are Circles and Squares that will popup on your screen and you have to click on them, as soon as they popup.
The best time will get recorded. You can play with your friends to see who can react on a box/circle real fast.

# Let's Build it

## Create a HTML file

So, We will write our HTML code first to get the structure of our Game.

Follow the Steps to write your code.

- Open your Favourite Code Editor
- Create a Project Directory. You can name Anything, In my case, It's *ReactionTester*.
- create a new file inside it called *index.html*
- Copy and Paste the following code below

```html:title=ReactionTester/index.html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Reaction Tester</title>
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
	<h1 style="color:red;"><b>Test Your Reaction</b></h1>
	<h3>Click on the Boxes and Circles as fast as Possible.</h3>
	<p>
		<b>Your Time : </b><span id="time"></span>
	</p>
	<p>
		<b>Best Time : </b><span id="best-time"></span>
	</p>
	<div id="shape"></div>
	<script type="text/javascript" src="main.js"></script>
</body>
</html>
```

## Add CSS

We need to style the HTML document, to change the look of the Game.

Follow the below steps to add CSS to your Game.

- Create a CSS file in your same project directory called *style.css*.
- Copy & Paste the following code below.

```CSS:title=ReactionTester/style.css
*{
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 2rem;
    height: 100vh;
    background-color: #000;
    color:#fff;
}
h1,h3,p{
    padding: 0 .5rem;
}
#shape {
    width:200px;
    height:200px;
    background-color: red;
    display: none;
    position: relative;
}
```

## Add JavaScript

Here is the Cool Part.
Let's add some JavaScript to make the Game functional.

Follow the steps below.

- Create a file called *main.js* in the same project directory.
- Copy & Paste the following Code.

```JavaScript:title=ReactionTester/main.js
var start = new Date().getTime();
// Get Random Color for Boxes
function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = "#";
	for (var i = 0; i< 6; i++) {
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}
// Box Appear
function doAppear() {
	var top = Math.random()*350;
	var left = Math.random()*1000;
	var width = (Math.random()*250)+100;
	// Get circles
	if(Math.random()>0.5) {
		document.getElementById('shape').style.borderRadius = "50%";
	}
	else {
		document.getElementById('shape').style.borderRadius = "0";
	}
	// Get Random Sized Objects
	document.getElementById('shape').style.backgroundColor = getRandomColor();
	document.getElementById('shape').style.width = width+"px";
	document.getElementById('shape').style.height = width+"px";
	document.getElementById('shape').style.top = top+"px";
	document.getElementById('shape').style.left = left+"px";
	document.getElementById('shape').style.display ="block";
	start = new Date().getTime();
}
// Box Appear again after Click
function appearAgain() {
	setTimeout (doAppear, Math.random()*2000);
}
appearAgain();
var bestTime = Infinity; // Higher Value
// Get the Click
document.getElementById('shape').onclick = function() {
	document.getElementById('shape').style.display = "none";
	var end = new Date().getTime();
	var timeTaken = (end - start)/1000;
	document.getElementById('time').innerHTML = timeTaken + " s";
	// Get the Best Time
	if (timeTaken < bestTime) {
		bestTime = timeTaken;
		document.getElementById('best-time').innerHTML = bestTime + " s";
		appearAgain();
	}
	else {
		document.getElementById('best-time').innerHTML = bestTime + " s";
		appearAgain();
	}	
}
```

# Note

> Play in Desktop for Better Experience<br/>
> You can deploy on any server and play online, or you can just open the **index.html** file and Play.

Your Game will look like that. Click on the boxes as soon as it loads

[See Live](http://reaction-tester-js.surge.sh)

![Reaction Tester](reaction-tester-live.png?v=1.6)

If you like the Post, feel free to share it.

**Thank You**