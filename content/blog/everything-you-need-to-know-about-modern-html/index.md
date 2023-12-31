---
title: "Everything you need to know about modern HTML"
description: "For web dev. HTML is a must. Here's how you can learn and use modern HTML in your projects."
date: "2021-05-22"
author: "Saroj Kumar"
tags: ["Tips & Tricks", "Web"]
---

Helloo Guys !!<br>Hope you are all in Good Health and Enjoying the Quarantine.

This post is about beginners who are just starting their career as a Web developer. As part of the "How to start front-end Web Development" series, I'll walk you though everything you need to know about modern HTML. Let's dive in.

# Quick Intro

> HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.<br>- _MDN_

Though, there are limited restrictions in writing HTML code. But, following the general conventions of programming is recommended.

# Basic Rules to Follow

While writing HTML markup or any programming language in general, you need to follow the basics that i'm listing below.

- Always use proper indentation and spacing
- Write some comments whenever possible. This helps other developers to understand your code better.
- Use semantics. (Use meaningful variables or functions in programming or use semantic tags in case of HTML)

# Overview

HTML is a markup language that is used for creating web pages that displaying content on a browser.<br>
It consists of some elements called tags that describe the structure of that web page.

Some of the basics tags that are used to create a web page are _`html`_, _`head`_, _`body`_, _`h1`_ ... _`h6`_, _`p`_, _`a`_, _`img`_ etc.<br>
Some tags are paired tags that have an opening tag and an closing tag, some tags are self closed.

A basic html code will look like this:

```html
<html>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph</p>
  </body>
</html>
```

There are a ton of resources where you can learn more about HTML.

# What's new ?

After you learn the basics of HTML and How to write documents or web pages using the tags, lets look into what are the new features that we should know and implement in our coding.

- Semantics: Writing meaningful tags about our content.
- Connectivity: Allowing to communicate with server in new ways.
- Offline and Storage: Allowiing webpages to store data locally and work in offline efficiently.
- Multimedia: New tags that support multimedia in simpler ways.
- 2D/3D: More diverse ways of presentation
- There are additional features in new HTML5 like Performance improvement, More device access and Better styling.

## Semantics

HTML5 introduced some semantic tags that replaced the old school way of writing HTML code. Earlier we used a tag called _`div`_ for outlining and sectioning in the Web, which replaced by tags like _`header`_, _`section`_, _`article`_, _`main`_, _`aside`_, _`footer`_ etc.<br>These tags are just same as _`div`_ but provide meaning to the content.

## Connectivity

New _Web sockets_ and _WebRTC (Web Real-Time-Communication)_ features let client and server interaction along with peer to peer communication possible without installing any extensions.

## Offline and Storage

New _Online and Offline events_ let webpages know whether there is active internet connection or not.

Now clientStorages like _sessionStorage_, _localStorage_, _indexedDB_ provide client side persistent data storage and better caching.

## Multimedia

New HTML5 _`audio`_ and _`video`_ tags allow embedding and controlling audio and video media directly in the web page.

There are additional tags like _`source`_ and _`track`_ which is used to add more functionality to the web component.

Camera API and WebRTC features allow using computer's camera and comunicating through video conferencing respectively.

## 2D/3D

New _`canvas`_ tag is now used to draw objects and animations in the web.

By using new [_WebGL_](https://developer.mozilla.org/en-US/docs/WebGL) we can now bring 3D Graphics in the Web.

_SVG_ images now can be directly embedded in the Web Pages. More on it later.

## Additional

We have performance improvement like _Web Worker_, _XMLHttpRequest_, _History and FullScreen API_, _Drag and Drop_ etc. and Device Access like _touch events_, _geolocations_, and _Camera API_ are the important features.

There is a huge improvement in CSS referred as CSS3 which now has a lot of new Features in background styling, animations and Typography.

I really want to teach you more on these Topics. So, I am keeping them for future and more specific posts.

# New useful Tags

Apart from semantic tags discussed above, Here are some of the new HTML tags that you should possibly replace while writing HTML Code.

| Tag             | Description                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------- |
| &lt;bdi>        | Isolates a part of text that might be formatted in a different direction from other text outside it |
| &lt;details>    | Defines additional details that the user can view or hide                                           |
| &lt;summary>    | Defines a visible heading for a &lt;details> element                                                |
| &lt;dialog>     | Defines a dialog box or window                                                                      |
| &lt;figure>     | Defines self-contained content                                                                      |
| &lt;figcaption> | Defines a caption for a &lt;figure> element                                                         |
| &lt;mark>       | Defines marked/highlighted text                                                                     |
| &lt;meter>      | Defines a scalar measurement within a known range (a gauge)                                         |
| &lt;progress>   | Represents the progress of a task                                                                   |
| &lt;time>       | Defines a date/time                                                                                 |
| &lt;wbr>        | Defines a possible line-break                                                                       |
| &lt;datalist>   | Specified options show as suggestions while typing in an input field                                |

# Using Attributes

As now you know where and how to use new HTML5 tags, let's see how you can write attributes.

Attributes are very important for any tag to be effectiively useful for the web page. General attributes like _`bgcolor`_, _`height`_, _`align`_, _`cellpadding`_ etc are no longer used and replaced by CSS. So, it's a good practice to keep track of what attribute to use and what not. There are alternative attributes like _`style`_ which provide the same functionality. There are some attributes which does not require any value. e.g.- _`controls`_, _`allowfullscreen`_, _`autoplay`_, _`autocomplete`_.

There are special attributes like _data-\*_ and _aria-\* (Accessible Rich Internet Applications)_. <br> data-_ is used to store custom data private to web page.<br>aria-_ is used for accessibility support like screen readers, text-to-speech, magnifiers etc.

[Read More about _data-\*_](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)<br>
[Read More about _aria-\*_](https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility)

> Learn about writing better meta/information about the web page you are developing. Its always a good practice to write as much as additional information about the page in the `head`.

That's it for this post. Let me know if you find these useful.

# References:

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)

If you like the post, feel free to share it.

**Thank You**
