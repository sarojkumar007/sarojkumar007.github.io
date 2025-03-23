import IconAdobeXD from "@components/svgs/IconAdobeXD"
import IconAtom from "@components/svgs/IconAtom"
import IconBash from "@components/svgs/IconBash"
import IconFigma from "@components/svgs/IconFigma"
// import IconFirebase from "@components/svgs/IconFirebase"
import IconMySQL from "@components/svgs/IconMySQL"
import IconPyCharm from "@components/svgs/IconPyCharm"
import IconPython from "@components/svgs/IconPython"
import IconSublimeText from "@components/svgs/IconSublimeText"
import IconAWS from "@components/svgs/IconAWS"
import IconMSAzure from "@components/svgs/IconMSAzure"

// prettier-ignore
import {
  SiAngular, SiAnsible, SiBootstrap, SiCss3, SiGatsby, SiGit,
  SiHtml5, SiJavascript, SiJenkins, SiMarkdown, SiMongodb, SiNextdotjs,
  SiNodedotjs, SiPhp, SiPowershell, SiReact, SiSass, SiTypescript, SiVisualstudiocode
} from '@icons-pack/react-simple-icons'

// SiDocker

import { siteConfig } from "."

export const skills = {
  Scripting: [
    {
      icon: IconPython,
      skill: "Python",
      level: "Expert",
    },
    {
      icon: SiPowershell,
      skill: "PowerShell",
      level: "Expert",
      color: "#5391FE",
    },
    {
      icon: IconBash,
      skill: "Bash",
      level: "Expert",
    },
    {
      icon: SiPhp,
      skill: "PHP",
      level: "Expert",
      color: "#777BB4",
    },
  ],
  Web: [
    {
      icon: SiHtml5,
      skill: "HTML5",
      level: "Expert",
      color: "#E34F26",
    },
    {
      icon: SiCss3,
      skill: "CSS3",
      level: "Expert",
      color: "#1572B6",
    },
    {
      icon: SiSass,
      skill: "Sass(SCSS)",
      level: "Expert",
      color: "#CC6699",
    },
    {
      icon: SiJavascript,
      skill: "JavaScript",
      level: "Expert",
      color: "#F7DF1E",
    },
    {
      icon: SiTypescript,
      skill: "TypeScript",
      level: "Expert",
      color: "#3178C6",
    },
    {
      icon: SiBootstrap,
      skill: "Bootstrap",
      level: "Expert",
      color: "#7952B3",
    },
    {
      icon: SiNodedotjs,
      skill: "Node.js",
      level: "Expert",
      color: "#339933",
    },
    {
      icon: SiReact,
      skill: "ReactJS",
      level: "Intermediate",
      color: "#61DAFB",
    },
    {
      icon: SiAngular,
      skill: "Angular",
      level: "Expert",
      color: "#DD0031",
    },
    {
      icon: SiGatsby,
      skill: "Gatsby",
      level: "Expert",
      color: "#663399",
    },
    {
      icon: SiNextdotjs,
      skill: "Next.js",
      level: "Intermediate",
      color: "#000000",
    },
  ],
  Database: [
    {
      icon: IconMySQL,
      skill: "MySQL",
      level: "Basic",
    },
    {
      icon: SiMongodb,
      skill: "MongoDB",
      level: "Expert",
      color: "#47A248",
    },
  ],
  "DevOps and Others": [
    {
      icon: SiGit,
      skill: "Git",
      level: "Expert",
      color: "#F05032",
    },
    {
      icon: SiJenkins,
      skill: "Jenkins",
      level: "Intermediate",
    },
    {
      icon: SiAnsible,
      skill: "Ansible",
      level: "Intermediate",
      color: "#000000",
    },
    // {
    //   icon: SiDocker,
    //   skill: "Docker",
    //   level: "Beginner",
    //   color: "#2496ED",
    // },
    // {
    //   icon: IconFirebase,
    //   skill: "Firebase",
    //   level: "Intermediate",
    // },
    {
      icon: SiMarkdown,
      skill: "Markdown",
      level: "Expert",
      color: "#000000",
    },
    {
      icon: IconAWS,
      skill: "AWS",
      level: "Intermediate",
    },
    {
      icon: IconMSAzure,
      skill: "Microsoft Azure",
      level: "Intermediate",
    },
  ],
  IDEs: [
    {
      icon: SiVisualstudiocode,
      skill: "Visual Studio Code",
      level: "Expert",
      color: "#007ACC",
    },
    {
      icon: IconSublimeText,
      skill: "Sublime Text",
      level: "Expert",
    },
    {
      icon: IconPyCharm,
      skill: "PyCharm",
      level: "Intermediate",
    },
    {
      icon: IconAtom,
      skill: "Atom",
      level: "Expert",
    },
  ],
  Design: [
    {
      icon: IconFigma,
      skill: "Figma",
      level: "Intermediate",
    },
    {
      icon: IconAdobeXD,
      skill: "Adobe XD",
      level: "Basic",
    },
  ],
}

export const edu = [
  {
    title: "Bachelor of Technology",
    location: "GCEK, Biju Patnaik University of Technology (BPUT), Odisha",
    stream: "Computer Science (CSE)",
    duration: {
      from: 2016,
      to: 2020,
    },
    description: ``,
  },
  {
    title: "Higher Secondary Education",
    location: "Nayagarh, Board of Secondary Education (BSE), Odisha",
    stream: "Science (PCMB)",
    duration: {
      from: 2013,
      to: 2015,
    },
    description: ``,
  },
  {
    title: "Higher Education - School",
    location: "Raghunath Bidyapitha, Odagaon, Odisha",
    stream: "High School Certification",
    duration: {
      from: 2003,
      to: 2013,
    },
    description: ``,
  },
]

export const experience = [
  {
    role: `SDE Ⅱ`,
    location: `Accenture, India`,
    duration: {
      from: `Feb 2025`,
      to: `Present`,
    },
    desc: ``,
  },
  {
    role: `Senior Analyst`,
    location: `HCLTech, Noida`,
    duration: {
      from: `Oct 2023`,
      to: `Feb 2025`,
    },
    desc: `Promoted to senior role where I manage the automation perspective as a engineer, helping in solving customer facing tasks, workload achievements and more. Worked on AD, Wintel Tools, Python, PowerShell Advanced, Ansible, AWS Services.`,
  },
  {
    role: `Analyst / Automation Engineer`,
    location: `HCLTech, Noida`,
    duration: {
      from: `Jan 2022`,
      to: `Oct 2023`,
    },
    desc: ``,
  },
  {
    role: `Graduate Engineer Trainee`,
    location: `HCL Technologies, Noida`,
    duration: {
      from: `Oct 2020`,
      to: `Jan 2022`,
    },
    desc: `Worked on scripting technologies like PowerShell and Bash. Providing solutions to automate repetitive  and time consuming tasks. Learned a lot of tools and methods in the process.`,
  },
  {
    role: `Senior Development Intern`,
    location: "Cometa Intellect LLP (Remote)",
    duration: {
      from: "Mar 2020",
      to: `Sep 2020`,
    },
    desc: `Developed enterprise level web applications for customers while keeping performance, UX and security in mind. Contributed to building a CI/CD pipeline to automate the application deployment.`,
    // `Developed multi functionality website/webapp having features like blogs, audio/video players, forums, chat feature, content posting, podcasts, profile management, authentication and more. Learned technologies like socket, CORS and frameworks like Vue, SASS and more.`
  },
  {
    role: `Summer Intern`,
    location: "Defence Research and Development Organisation (DRDO), Chandipur",
    duration: {
      from: "Jun 2019",
      to: `Jul 2019`,
    },
    desc: `Developed a Graphical User Interface for cursor/pointer movement in 2D/3D space using Python and under guidance of Scientist-C`,
  },
  {
    role: `Committee Member`,
    location: `deCoders, GCEK's Coding Club`,
    duration: {
      from: `Aug 2017`,
      to: `Apr 2020`,
    },
    desc: ``,
  },
  {
    role: `T & P Member (CSE)`,
    location: `Training and Placements Cell, GCEK`,
    duration: {
      from: `Aug 2016`,
      to: `Apr 2020`,
    },
    desc: ``,
  },
  {
    role: `Volunteer (Group Best Cadet)`,
    location: "Junior Red Cross, Odisha",
    duration: {
      from: null,
      to: null,
    },
    desc: ``,
  },
]

export const projectsList = {
  sideProjects: [
    {
      id: "g-u-f",
      name: "GitHub UserFinder App",
      date: "05-Sep-2018",
      tags: ["REST API", "AJAX"],
      image: `/img/project/guf.webp`,
      desc: `A simple application that uses GitHub API and finds users with there details on the Go just by using there github username!`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/GithubFinder`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/GithubFinder`,
    },
    {
      id: "simple-chat",
      name: "Simple Chat App",
      date: "17-Jul-2018",
      tags: ["JavaScript", "WebRTC"],
      image: `/img/project/s_chat.webp`,
      desc: `A simple chat application that uses WebRTC to peer to peer communication, will be updating instructions on how to use!`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/chat`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/chat`,
    },
    {
      id: "todo-js",
      name: "ToDo - JS",
      date: "25-Jun-2019",
      tags: ["JavaScript", "CSS"],
      image: `/img/project/todo.webp`,
      desc: `A Programmer's must have development, a ToDo app that lets you work smoothly and sequencially.`,
      liveLink: `${siteConfig.homepage}/todo-js`,
      gitLink: `https://github.com/sarojkumar007/todo-js`,
    },
    {
      id: "img-gallery",
      name: "Image Gallery",
      date: "11-Nov-2019",
      tags: ["JavaScript", "PHP"],
      image: `/img/project/img_gallery.webp`,
      desc: `An image gallery platform, that hosts your images, catagories and lets you organise according to your plan. Create Galleries with multiple names and store as many images as you want.`,
      liveLink: null,
      gitLink: `https://github.com/sarojkumar007/imageGallery`,
    },
    {
      id: "random-color",
      name: "Random Color Generater",
      date: "11-Dec-2021",
      tags: ["CSS", "JavaScript"],
      image: `/img/project/random_color.webp`,
      desc: `A simple and handy application for designer/developers which provides random colors for your next projects while maintaining a record of colors. Its sort of a DJ itself, you know!`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/RandomColor/`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/RandomColor`,
    },
    {
      id: "web-note",
      name: "Web Note",
      date: "21-Jul-2022",
      tags: ["HTML", "CSS", "JavaScript"],
      image: `/img/project/web_note.webp`,
      desc: `A simple sticky note of your own on the web. Personalize with theme. adjust sizes, spell check and save your note easily.`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/WebNote/`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/WebNote/`,
    },
    {
      id: "local-image-editor",
      name: "Local Image Editor",
      date: "10-Apr-2023",
      tags: ["CSS", "JavaScript"],
      image: `/img/project/l_i_e.webp`,
      desc: `A locally available and basic image editing tool, for your quick image editing.`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/ImageEditor/`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/ImageEditor/`,
    },
    {
      id: "emi-calc",
      name: "EMI Calculator",
      date: "24-Mar-2024",
      tags: ["HTML", "CSS", "JavaScript"],
      image: `/img/project/emi_calc.webp`,
      desc: `Calculator your reducing interest EMI and other informations with just few inputs. Easy and convenient way to track your repayments.`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/EMICalculator/`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/EMICalculator/`,
    },
  ],

  miniGames: [
    {
      id: "google-dino",
      name: "Google Dino Game (Redesigned)",
      date: "23-Nov-2018",
      tags: ["CSS", "JavaScript"],
      image: `/img/project/google_dino.webp`,
      desc: `Google's Offline Game, redesigned with cool background song. Lets you play anytime anywhere!!`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/DinoGame`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/DinoGame`,
    },
    {
      id: "dice-game",
      name: "Dice Game",
      date: "16-May-2020",
      tags: ["CSS", "JavaScript"],
      image: `/img/project/dice_game.webp`,
      desc: `A simple two player fun dice game. Be the first one to hold highest points.`,
      liveLink: `${siteConfig.homepage}/dice-game/`,
      gitLink: `https://github.com/sarojkumar007/dice-game/`,
    },
    {
      id: "memory-game",
      name: "Memory Game",
      date: "30-Dec-2021",
      tags: ["HTML", "CSS", "JavaScript"],
      image: `/img/project/memory_game.webp`,
      desc: `A classic memory game to test your memory and react time. Give it a try through! ;)`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/MemoryGame/`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/MemoryGame`,
    },
    {
      id: "quiz-game",
      name: "Quiz Game",
      date: "05-Jan-2022",
      tags: ["CSS", "JavaScript", "AJAX"],
      image: `/img/project/quiz_app.webp`,
      desc: `A quiz game for knowledge and fun, implemented as a Single Page Application (SPA).`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/QuizApp/`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/QuizApp`,
    },
    {
      id: "rps",
      name: "Rock Paper Scissors",
      date: "06-Dec-2021",
      tags: ["HTML", "JavaScript", "CSS"],
      image: `/img/project/rps.webp`,
      desc: `The classic Rock Paper Scissors Game implemented with JavaScript. Lets see who has the luck, you or the Computer!`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/RockPaperScissors/`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/RockPaperScissors`,
    },
    {
      id: "ttt",
      name: "Tic Tac Toe",
      date: "11-Dec-2021",
      tags: ["JavaScript", "CSS"],
      image: `/img/project/ttt.webp`,
      desc: `Have nothing to do with your friend? Try this one, anytime, anywhere.`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/TicTacToe/`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/TicTacToe`,
    },
    {
      id: "word-game",
      name: "Word Game",
      date: "28-Dec-2021",
      tags: ["HTML", "CSS", "JavaScript"],
      image: `/img/project/word_game.webp`,
      desc: `Guess the word. Yes, that's the Game. Use your hint and other perks wisely to make a high score.`,
      liveLink: `${siteConfig.homepage}/Mini-Projects/WordGame/`,
      gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/WordGame`,
    },
  ],
}
