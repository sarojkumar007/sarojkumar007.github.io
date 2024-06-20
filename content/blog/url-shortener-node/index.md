---
title: "URL Shortener Using Node"
description: "A URL Shortener using Node.js is a web application that condenses long URLs into shorter, easily shareable links. It is built using Node.js."
date: "2024-06-23"
author: "Anshuman Bharatiya"
tags: ["Node", "Mongoose", "Express", "EJS"]
---

**Quick Summary:**
A URL Shortener using Node.js is a web application that condenses long URLs into shorter, easily shareable links. It is built using Node.js, a powerful JavaScript runtime for server-side applications. This project typically involves creating a RESTful API to handle URL creation and redirection.

The API accepts long URLs, generates a unique short code, and stores the mapping in a database. When the short URL is accessed, the server redirects the user to the original long URL. This type of application is useful for simplifying URLs for social media, marketing, and analytics purposes

# Introduction
URL shorteners like Bitly and Cuttly are incredibly popular. But what if we could build one ourselves?

In the age of social media and instant messaging, sharing long URLs can be cumbersome. A URL shortener provides a neat solution by converting long URLs into shorter, manageable links. This tutorial will guide you through creating a URL shortener and we are going to use Node.js, Express, Mongoose, and EJS, so you should have basic knowledge of them for this tutorial.


# Why use a URL shortener?

A URL shortener decreases the length of a URL for you. Large URLs can be complicated to remember or share with others. A shortened URL version can help you share your favorite link more easily.

A URL shortener can help you in many other ways as well. For example, links shortened with the same tool look nearly identical, at least for the domain section. This overall increases the authenticity of the URL.

Also, adding a large and complicated URL in your social media bio or where the link is clearly visible looks cluttered. Instead, a shortened URL looks professional and minimal.

A shortened URL further lets you easily track the number of clicks to the page. This is not possible using third-party websites without a URL shortener. These metrics can help you measure the performance of the link.

# Installation of Project
To get started, ensure you have Node.js and MongoDB installed on your machine. Install the necessary dependencies using npm:

## Initialize the Project

First, initialize the project using `npm`:

```bash
npm init -y
```

## Install Dependencies

Install the necessary packages:

```bash
npm install ejs express mongoose nodemon shortid
```

The `package.json` will include these dependencies:

```json
"dependencies": {
  "ejs": "^3.1.10",
  "express": "^4.19.2",
  "mongoose": "^8.4.1",
  "nodemon": "^3.1.3",
  "shortid": "^2.2.16"
}
```

## Folder Structure 

The project is organized as follows:

```
URL_SHORTENER
    |---index.js
    |---connections.js
    |
    |---views
    |    |---form.ejs
    |    |---home.ejs
    |
    |routes
    |    |---url.js
    |
    |models
    |    |---url.js
    |
    |controllers
    |    |---url.js
```

The main entry point of the application. It sets up the server and routes `index.js`.

```js
const express = require('express');
const urlRouter = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const createConnection = require('./connections');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// set the view engine to ejs
app.set('view engine', 'ejs');

createConnection('mongodb://localhost:27017/short-url')
.then(() => console.log('Mongodb Connected Succesfully'))
.catch((err) => console.log("Something Went Wrong", err.message));

app.use(express.urlencoded({extended:false}));

app.use('/url', urlRouter);
app.use('/static', staticRouter)

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
```

Database Connection file `connection.js`

Handles the connection to the MongoDB database using Mongoose.

```js
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
async function createConnection(url){
   return mongoose.connect(url);
}
module.exports = createConnection;
```

Views(`form.ejs`)

Handles the user interface for submitting URLs and displaying the shortened URLs.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>URL Shortener</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        form{
            width: 50%;
        }
    </style>
  </head>
  <body class=" bg-success-subtle">
   <div class="container bg-warning-subtle p-5">
    <div class="row">
        <div class="col-12">
            <div class="d-flex justify-content-center mt-5">
        
                <!-- backend data store in locals -->
                <form method="POST" action="/url">
                    <% if (locals.message) { %>
                        <div class="alert alert-danger" role="alert">
                            <%= message %>
                          </div>
                     
                    <% } %>
                    <h2 class="mb-4">URL Shortener</h2>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Enter Your Original URL</label>
                      <input type="text" class="form-control" id="url" name="url" placeholder="http://example.com">
                    </div>
                    <button type="submit" class="btn btn-outline-danger">Generate</button>
                </form>
                
            </div>
        </div>

        <div class="col-12 mt-5">
            <h3 class="mb-4">All URLS</h3>
            <% if (locals.urls) { %>
                <table class="table table-hover table-dark">
                    <thead>
                      <tr>
                        <th scope="col">ShortID</th>
                        <th scope="col">Original Url</th>
                        <th scope="col">Short URL</th>
                        <th scope="col">Visit</th>
                      </tr>
                    </thead>
                    <tbody>
                        <% urls.forEach(url => { %>
                            <tr>
                                <th scope="row"><%= url.shortId %></th>
                                <td><%= url.redirectUrl %></td>
                                <td><a target="_blank" href="<%= 'http://localhost:8000/url/'+ url.shortId %>"><%= 'http://localhost:8000/url/'+ url.shortId %></a></td>
                                <td><%= url.visitHistory.length %></td>
                              </tr>
                        <% }) %>
                    </tbody>
                </table>
            <% } %>
        </div>
        
    </div>
   </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>

```

Router(`url.js`)

Defines the routes for handling URL creation and redirection.

```js
const express = require('express');
const {handelGeneratenewShortUrl, handelToGetAnalytics, handelRedirectUrl, staticsRenderViews} = require('../controllers/url');
const router = express.Router();

router.get('/form', staticsRenderViews);
router.post('/', handelGeneratenewShortUrl);
router.get('/analytics/:shortId', handelToGetAnalytics);
router.get('/:shortId', handelRedirectUrl);

module.exports = router;
```

Model(`url.js`)

Defines the URL schema for MongoDB using Mongoose.

```js
const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema(
    {
        shortId : {
            type : String,
            required : true,
            unique : true,
        },
        redirectUrl : {
            type : String,
            required : true,
        },
        visitHistory : [{
            timestamp : {
                type : Number
            }
        }],
    },
    {timestamps : true}
);

const URL = mongoose.model("URL", urlSchema);
module.exports = URL;
```

Controller (`url.js`)

Handles the business logic for generating short URLs, redirecting, and analytics.

```js
const shortid = require('shortid');
const URL = require('../models/url');
async function handelGeneratenewShortUrl(req, res){
    const body = req.body;
    if(!body.url){
        res.render('form',{
            message : "URL has been required."
        });
    }else{
        const shortID = shortid();

        let result = await URL.create({
            shortId:shortID,
            redirectUrl:body.url,
            visitHistory:[],
        });
        res.render('form',{
            message : `The New URL Generated - http://localhost:8000/url/${shortID}`,
            id : shortID
        });
    }
}

async function handelToGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.status(200).json({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory,
    });
}

async function handelRedirectUrl(req, res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push : {
                visitHistory : {
                    timestamp : Date.now(),
                }
            }
        }
    );

    if (entry && entry.redirectUrl) {
        res.redirect(entry.redirectUrl);
    } else {
        res.status(404).json({message: 'URL not found'});
    }
}
async function testrenderViews(req, res){
    const allUrls = await URL.find();
    res.render('home',{
        urls : allUrls,
    });
}
async function staticsRenderViews(req, res){
    const allUrls = await URL.find();
    res.render('form',{
        urls : allUrls,
    });
}
module.exports = {
    handelGeneratenewShortUrl,
    handelToGetAnalytics,
    handelRedirectUrl,
    testrenderViews,
    staticsRenderViews
}
```


### For the complete source code, visit the [GitHub repository.](https://github.com/AnshumanBharatiya/url_shortener "GitHub")


# Conclusion
In this tutorial, we've built a simple yet functional URL shortener using Node.js, Express, Mongoose, and EJS. This application not only demonstrates how to create and store short URLs but also how to handle redirects and track visit analytics. Feel free to extend this project by adding features such as user authentication, custom URL aliases, or detailed analytics.


<br>

**_Posted By ~ Anshuman Bharatiya on Sunday, 23rd Jun 2024_**

**_If you like this post, feel free to share it._**

**_Thank You_**
