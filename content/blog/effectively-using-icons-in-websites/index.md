---
title: "Effectively using Icons in Websites ✌🏻"
description: "A icon to website is like cherry to a cake. It makes 'em look better. Know how you can use them effectively."
date: "2021-07-25"
author: "Saroj Kumar"
tags: ["Tips & Tricks","Web"]
---

Hello World !!<br>I hope most of your Quarantine Time is as fruitful as mine and you are learning something new daily.

So, in this topic, I gonna state important points of using icons in a website.

# Quick Intro

In the Modern days of Web Design and Development, you’ll see icons—often either in support of text, or completely replacing it. So it plays an important role in user interaction and experience.

> Goal: To efficiently communicate a message via a commonly understood visual language.

# Uses

The main purpose of using Icons in a website is to draw attention to a new feature.

It can be used to showcase different applications and products.

Icons will be really helpful to engage readers on pages with extra long content.

# Do's and Don'ts

Here are the things that you should follow while using icons.

## Do's

- Simplicity is attractive and practical. So, icons should be *minimal*. Icons are
Universaly recognized and Explanation-free. So, make them *natural*.

- *Monochromatic* icons can help accent content without being distracting

## Don'ts

- Don’t use icons just because they look cool. Choose ones that really match your style and brand.

# Icon Fonts or SVGs (can be SVG Sprites)

There are various ways of using icons i.e. Icon Fonts or SVGs/SVG Sprites. The debate goes on if we discuss about it.<br>
I am stating some of the factors to look into while choosing one of the methods.

## File Size

 As far as file size is concerned Icon font has a slight advantage over SVG. Because SVGs need to be imported separatly for different files.<br>
 SVG Sprites somehow reduce the file size by importing all in one. But, it all depends on the their use in website.

 ## Accessibility

 One major advantage of SVG icons over Icon fonts is their superior accessibility. SVGs are armed with built in semantic elements which can also be used with increased accessibility for screen readers.

 ## Performance

 SVGs / SVG Sprites do not make any additional server requests, however it cannot be cached by the browser like Icon fonts.

 ## Scalability

 In terms of Scalability, SVGs have a big advantage over Icon fonts. Because SVGs are *Vector* in nature where as Icon fonts are *Raster* in nature.

 ## Animation

Due to XML format and Vector nature, SVGs over a much higher degree of versatility as compared to Icon fonts in terms of modifications and styling control.<br>How ever both methods of using icons can be modified according to their respective natures.

## Positioning

SVGs have image nature, So, it is much easier to position SVGs as compared to Icon fonts.

## Cross Browser Compatibility

All modern browsers support SVG/SVG Sprites. Except IE. However, you can try to plug this gap by either using necessary fallbacks or Polyfills.<br>
Icon fonts tend to have some [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Cross-Origin Resource Sharing) issues. But, if we solve that, Icon fonts enjoy much wider Cross browser Compatibility support as compared to SVGs.

In the end, I would say each of these methods have their own way of dealing with icons. So, choose your way according to your project needs.

# Examples

## Icon Font

```html
<i class="classProvidedByIconFontVendor"></i>
```
Which turns into an icon after Render.

## SVG Sprite

```html
<svg>
	<use href="/path/to/vendorSpite.svg#iconName"></use>
	
</svg>
```
Which turns into an svg element.

>**Note:**<br>*`<use xlink:href=""></use>`* is deprecated. How ever some browsers still support it.<br>Check compatibility table before using it.

# Resources

The following are some resources that provide solutions to use Icon fonts / SVG Sprites.

- [Font Awesome](https://fontawesome.com/)
- [Ico Moon](https://icomoon.io/app/)
- [Flat Icons](https://www.flaticon.com/)
- [Feather Icons](https://feathericons.com/)
- [Icons8](https://icons8.com/)
- [Material Icons](https://material.io/resources/icons/)
- [Fontastic](http://fontastic.me/)
- [Fontello](http://fontello.com/)

and Many more ...

<hr>

If you like the post, feel free to share it.

**Thank You**