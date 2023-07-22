import { SiCss3, SiHtml5, SiJavascript } from "@icons-pack/react-simple-icons"

// prettier-ignore
import {
  Activity, Droplet, Hash, Image, Layout, PenTool, Settings, Smile, Tool
} from 'react-feather';

export const resources = [
  {
    cat: "Tools",
    icon: Tool,
    resources: [
      {
        title: "Visual Studio Code Setup",
        description: "My Visual Studio Code Settings",
        // "image": `/r/vscode.svg`,
        link: "https://gist.github.com/sarojkumar007/fc60bb1dc87d02aac899d2c82e08c6ea",
      },
      {
        title: "Codepen",
        description:
          "It's a tool for Practicing HTML,CSS,JS without worrying about the setup",
        link: `https://codepen.io/`,
      },
      {
        title: "Dev CheatSheats",
        description:
          "Collected Developer's CheatSheat of different languages and tools.",
        link: `https://github.com/sarojkumar007/Dev-Cheatsheets`,
      },
    ],
  },
  {
    cat: "HTML",
    icon: SiHtml5,
    resources: [
      {
        title: "W3 Schools",
        description: "Best website to start learning HTML.",
        link: `https://www.w3schools.com/html/`,
      },
      {
        title: "HTML5 Elements Reference",
        description:
          "This site will get you updated about the use and best practices for HTML.",
        link: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element`,
      },
      {
        title: "HTML5 Entities Reference",
        description:
          "List of symbols and Entities you will be using in your projects.",
        link: `https://www.toptal.com/designers/htmlarrows/`,
      },
    ],
  },
  {
    cat: "CSS",
    icon: SiCss3,
    resources: [
      {
        title: "CSS Almanac",
        description:
          "Provides you the best information/knowledge about CSS and how you can use it.",
        link: `https://css-tricks.com/almanac/`,
      },
      {
        title: "Jonas's Advanced CSS Course",
        description:
          "The best CSS Course till now, which will make you a PRO in css.",
        link: `https://www.udemy.com/advanced-css-and-sass/`,
      },
      {
        title: "CSS Reference by Codedrops",
        description: "Another almanac from codedrops. Hope you find it useful.",
        link: `https://tympanus.net/codrops/css_reference/`,
      },
      {
        title: "30 CSS Selectors Guide by Tutplus",
        description:
          "This will help you get a better understanding of CSS Selectors",
        link: `https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048`,
      },
      {
        title: "Clippy",
        description:
          "A small tool to help you using the new and powerful clip-path property.",
        link: `http://bennettfeely.com/clippy/`,
      },
      {
        title: "CSS Easing  Functions",
        description:
          "Easing functions for transition and animation. Can be used with cubic-bezier.com.",
        link: `https://easings.net/`,
      },
    ],
  },
  {
    cat: "Javascript",
    icon: SiJavascript,
    resources: [
      {
        title: "JavaScript Reference by MDN",
        description:
          "Best JavaScript Documentation for learning key terms and pretty much everything.",
        link: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference`,
      },
      {
        title: "JavaScript Operator Precedence Table",
        description:
          "Very handy cheatsheet to determine which JavaScript operators are evaluated first.",
        link: `https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence`,
      },
      {
        title: "DOM Manipulation Reference",
        description: "A complete DOM manipulation reference",
        link: `http://youmightnotneedjquery.com/`,
      },
      {
        title: "JavaScript KeyCodes Reference",
        description:
          "Get keyboard codes, unicodes and keycodes. Vital reference for keypress event handling.",
        link: `http://keycodes.atjayjo.com/`,
      },
      {
        title: "Principles of Writing Good JavaScript",
        description:
          "While I don't follow this 100%, it's good to have a style guide to write better code.",
        link: `https://github.com/rwaldron/idiomatic.js`,
      },
      {
        title: "JavaScript Design Patterns",
        description: "Javascript design patterns for advanced study.",
        link: `https://addyosmani.com/resources/essentialjsdesignpatterns/book/`,
      },
    ],
  },
  {
    cat: "Icons",
    icon: Smile,
    resources: [
      {
        title: "Feather",
        description: "React feather, best for minimal beautiful icons.",
        link: `https://feathericons.com/`,
      },
      {
        title: "Google Material Icons",
        description:
          "Best utility icons and more, specifically designed web fonts.",
        link: `https://fonts.google.com/icons`,
      },
      {
        title: "Font Awesome",
        description:
          "A wide range and variety of icons. Can be used as both SVG and Web Font.",
        link: `https://fontawesome.com/icons`,
      },
      {
        title: "IonIcons",
        description: "Open-Source, Handcrafted Icons.",
        link: `https://ionic.io/ionicons`,
      },
      {
        title: "Hero Icons",
        description: "Another set of free icons from makers of Tailwind CSS",
        link: `https://heroicons.com/`,
      },
      {
        title: "Phosphor Icons",
        description: "Yet another flexible icon set for your next project.",
        link: `https://phosphoricons.com/`,
      },
      {
        title: "IcoMoon",
        description:
          "This one is best suited, if you want to use IconPacks/Sprites.",
        link: `https://icomoon.io/`,
      },
    ],
  },
  {
    cat: "Colors",
    icon: Droplet,
    resources: [
      {
        title: "Color Hunt",
        description:
          "Thousands of color palettes to choose that will suit your project.",
        link: `https://colorhunt.co/`,
      },
      {
        title: "Coolors",
        description: "Another color palette generator.",
        link: `https://coolors.co/`,
      },
      {
        title: "Open Color",
        description: "An open-source color scheme, optimized for UI.",
        link: `https://yeun.github.io/open-color/`,
      },
      {
        title: "UI Gradients",
        description:
          "Collection of beautiful color gradients for you to choose from and export to your project.",
        link: `https://uigradients.com/`,
      },
      {
        title: "Tint and Shade Generator",
        description:
          "Easily create lighter and darker versions of any base color. Perfect for hovers, borders and gradients.",
        link: `https://maketintsandshades.com/`,
      },
      {
        title: "Color Contrast Checker",
        description:
          "Calculate the contrast ratio of text and background colors.",
        link: `https://coolors.co/contrast-checker/`,
      },
    ],
  },
  {
    cat: "Fonts",
    icon: PenTool,
    resources: [
      {
        title: "Google Fonts",
        description:
          "The #1 resource for free and easy-to-use webfonts. Has a huge library of fonts.",
        link: `https://www.google.com/fonts`,
      },
      {
        title: "1001 Fonts",
        description:
          "Want to download old/retro fonts or display fonts. Chec this out.",
        link: `https://www.1001freefonts.com/`,
      },
      {
        title: "Fontsquirrel",
        description:
          "The best, 100% free fonts for commercial use. Another well-known huge font library.",
        link: `https://www.fontsquirrel.com/`,
      },
      {
        title: "MyFonts",
        description:
          "World's largest library of premium fonts, if you need more than free fonts for your next project.",
        link: `https://www.myfonts.com/`,
      },
    ],
  },
  {
    cat: "Media",
    icon: Image,
    resources: [
      {
        title: "Unsplash",
        description:
          "#1 resource for free high-resolution photos. There are more photos here than you can imagine!",
        link: `https://unsplash.com/`,
      },
      {
        title: "Pexels",
        description:
          "Another great resource for free stock photos and videos, created by photographers around the world.",
        link: `https://www.pexels.com/`,
      },
      {
        title: "UnDraw",
        description:
          "Hundreds of free and open-source illustrations for your websites, and colors are even customizable.",
        link: `https://undraw.co/illustrations`,
      },
      {
        title: "ISO Republic",
        description:
          "Thousands of Free High-Resolution Stock CC0 Images and Videos",
        link: `https://isorepublic.com/`,
      },
      {
        title: "DrawKit",
        description:
          "Hand-drawn vector illustration and icon resources, perfect for your next project.	",
        link: `https://www.drawkit.io/`,
      },
      {
        title: "UI Faces",
        description:
          "Avatar photos, perfect for mockups or placeholders. Don't use them for real people...",
        link: `https://www.uifaces.co/`,
      },
      {
        title: "Coverr",
        description:
          "Best resource for beautiful and free videos about every imaginable topic, easily searchable.",
        link: `http://www.coverr.co/`,
      },
    ],
  },
  {
    cat: "Design",
    icon: Layout,
    resources: [
      {
        title: "One Page Love",
        description:
          "Gallery of beautiful websites, sorted into multiple categories.",
        link: `https://onepagelove.com/inspiration`,
      },
      {
        title: "Dribble",
        description:
          "Most well-known destination to find design inspiration, not just web design.",
        link: `https://dribbble.com/`,
      },
      {
        title: "Awwwards",
        description:
          "The awards of design, creativity and innovation on the internet. This one features more creative designs.",
        link: `https://www.awwwards.com/websites/`,
      },
      {
        title: "Screenlane",
        description:
          "Inspiration for individual elements and mobile components.",
        link: `https://screenlane.com/`,
      },
    ],
  },
  {
    cat: "Automation",
    icon: Settings,
    resources: [
      {
        title: "PowerShell Documentation",
        description:
          "Microsoft's PowerShell Documentation for learning powershell scripting and for reference.",
        link: `https://docs.microsoft.com/en-us/powershell/`,
      },
      {
        title: "PowerShell Gallery",
        description:
          "Similar to NPM, provides Modules/Packages for PowerShell.",
        link: `https://www.powershellgallery.com/`,
      },
      {
        title: "For Python Automation",
        description:
          "If you are starting python full-stack automation. Check this.",
        link: `https://towardsdatascience.com/10-python-modules-for-full-stack-automation-and-testing-eabccd2f025c`,
      },
      {
        title: "Linux Terminal CheatSheat",
        description: "Linux cheatsheat for productive while writing scripts.",
        link: `https://www.loggly.com/wp-content/uploads/2015/05/Linux-Cheat-Sheet-Sponsored-By-Loggly.pdf`,
      },
    ],
  },
  {
    cat: "Optimize",
    icon: Activity,
    resources: [
      {
        title: "HTML Validator by W3C",
        description:
          "Check if your HTML markup is valid and contains no errors. Official W3C tool.",
        link: `https://validator.w3.org/`,
      },
      {
        title: "CSS Validator by W3C",
        description:
          "Check if your CSS markup is valid and contains no errors. Official W3C tool.",
        link: `https://jigsaw.w3.org/css-validator/`,
      },
      {
        title: "Website Speed Optimization Guide",
        description:
          "An excellent guide to optimize your webpage speed. This is something many devs overlook!",
        link: `https://kinsta.com/learn/page-speed/`,
      },
      {
        title: "Google PageSpeed Insights",
        description:
          "Easy tool to test your webpage for performance. You can also use it in Chrome DevTools (Lighthouse).",
        link: `https://developers.google.com/speed/pagespeed/insights/`,
      },
      {
        title: "Google Analytics",
        description:
          "Get free insights about website traffic, visitors and conversions. A must for every website.",
        link: `http://www.google.com/analytics`,
      },
      {
        title: "Woorank",
        description:
          "Get a SEO review of your website to address common issues, and get ahead of your competition.",
        link: `https://www.woorank.com/`,
      },
      {
        title: "Squoosh",
        description:
          "Compressing images is the most important performance optimization. This is my #1 tool to do so!",
        link: `https://squoosh.app/`,
      },
      {
        title: "Optimizilla",
        description:
          "Another tool to compress up to 20 JPEG and PNG images while keeping a good level of quality.",
        link: `http://optimizilla.com/`,
      },
      {
        title: "Real favicon Generator",
        description:
          "Just upload an image and this tool creates favicons for your website for all platforms.",
        link: `http://realfavicongenerator.net/`,
      },
    ],
  },
  {
    cat: "Miscellaneous",
    icon: Hash,
    resources: [
      {
        title: "Haikei App",
        description:
          "A wholesome site to create a lot of things including images for dots, waves, masks etc.",
        link: `https://app.haikei.app/`,
      },
    ],
  },
]
