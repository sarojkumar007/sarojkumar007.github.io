import { Gnubash, Html5, Php, Powershell, Python, CssThree, Sass, Javascript, Bootstrap, Nodedotjs, ReactJs, Angular, Gatsby, Mysql, Mongodb, Git, Github, Bitbucket, Jenkins, Docker, Markdown, Visualstudiocode, Sublimetext, Pycharm, Atom, Figma, Adobexd } from '@icons-pack/react-simple-icons';
import { faBuilding, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons';

import AdelleImg from '../images/project/adelle.webp'
import BLPImg from '../images/project/blp.webp'
import BudgyImg from '../images/project/budgy.webp'
import DataSimImg from '../images/project/data_sim.webp'
import DemoRestImg from '../images/project/demo_rest.webp'
import DiceGameImg from '../images/project/dice_game.webp'
import ForkifyImg from '../images/project/forkify.webp'
import GlassEffectImg from '../images/project/glass_effect.webp'
import DinoImg from '../images/project/google_dino.webp'
import GUFImg from '../images/project/guf.webp'
import ImgGalleryImg from '../images/project/img_gallery.webp'
import MagicNavImg from '../images/project/magic_nav.webp'
import MemGameImg from '../images/project/memory_game.webp'
import NodeAuthImg from '../images/project/node_auth.webp'
import NodeBlogImg from '../images/project/node_blog.webp'
import Portfolio2Img from '../images/project/portfolio2.webp'
import QGameImg from '../images/project/quiz_app.webp'
import RanColorImg from '../images/project/random_color.webp'
import RPSImg from '../images/project/rps.webp'
import SChatImg from '../images/project/s_chat.webp'
import SVideoImg from '../images/project/s_video.webp'
import SaleDMMBImg from '../images/project/sale_dmmb.webp'
import SISImg from '../images/project/sis.webp'
import TodoImg from '../images/project/todo.webp'
import TTTImg from '../images/project/ttt.webp'
import WGImg from '../images/project/word_game.webp'

export const social = {
	twitterLink: `https://twitter.com/_sarojk18`,
	githubLink: `https://github.com/sarojkumar007`,
	instagramLink: `https://www.instagram.com/saroj_smiley/`,
	linkedinLink: `https://www.linkedin.com/in/sarojk18/`,
	youtubeLink: `#!`,//`https://www.youtube.com/channel/UCyG5IZIwPxKiG9tmM-SoCtg`,
	codepenLink: `https://codepen.io/sarojk18`,
	hackerrankLink: `https://www.hackerrank.com/sarojk18`
}
export const resumeLink = `#!`;

export const otherLinks = {
	work: {
		site: `https://www.hcltech.com/`,
		title: 'HCL',
		location: 'Noida,UP'
	},
	college: {
		site: `https://gcekbpatna.ac.in/`,
		title: 'GCEK, Bhawanipatna',
		location: 'Odisha'
	},
	lib: {
		site: `https://github.com/sarojkumar007/minute-css/`
	},
	api: {
		contactAction: `https://formspree.io/f/xoqrleww`
	}
}

export const skills = {
	'Scripting': [
		{
			icon: Python,
			skill: 'Python',
			level: 'Expert'
		},
		{
			icon: Powershell,
			skill: 'PowerShell',
			level: 'Expert'
		},
		{
			icon: Gnubash,
			skill: 'Bash',
			level: 'Intermediate'
		},
		{
			icon: Php,
			skill: 'PHP',
			level: 'Expert'
		}
	],
	'Web': [
		{
			icon: Html5,
			skill: 'HTML5',
			level: 'Expert'
		},
		{
			icon: CssThree,
			skill: 'CSS3',
			level: 'Expert'
		},
		{
			icon: Sass,
			skill: 'Sass(SCSS)',
			level: 'Expert'
		},
		{
			icon: Javascript,
			skill: 'JavaScript',
			level: 'Expert'
		},
		{
			icon: Bootstrap,
			skill: 'Bootstrap',
			level: 'Expert'
		},
		{
			icon: Nodedotjs,
			skill: 'Node.js',
			level: 'Intermediate'
		},
		{
			icon: ReactJs,
			skill: 'ReactJS',
			level: 'Intermediate'
		},
		{
			icon: Angular,
			skill: 'Angular',
			level: 'Beginner'
		},
		{
			icon: Gatsby,
			skill: 'Gatsby',
			level: 'Expert'
		}
	],
	"Database": [
		{
			icon: Mysql,
			skill: 'MySQL',
			level: 'Intermediate'
		},
		{
			icon: Mongodb,
			skill: 'MongoDB',
			level: 'Beginner'
		}
	],
	"DevOps and Others": [
		{
			icon: Git,
			skill: 'Git',
			level: 'Expert'
		},
		{
			icon: Github,
			skill: 'GitHub',
			level: 'Expert'
		},
		{
			icon: Bitbucket,
			skill: 'BitBucket',
			level: 'Expert'
		},
		{
			icon: Jenkins,
			skill: 'Jenkins',
			level: 'Intermediate'
		},
		{
			icon: Docker,
			skill: 'Docker',
			level: 'Beginner'
		},
		{
			icon: Markdown,
			skill: 'Markdown',
			level: 'Expert'
		}
	],
	"IDEs": [
		{
			icon: Visualstudiocode,
			skill: 'Visual Studio Code',
			level: 'Expert'
		},
		{
			icon: Sublimetext,
			skill: 'Sublime Text',
			level: 'Expert'
		},
		{
			icon: Pycharm,
			skill: 'PyCharm',
			level: 'Intermediate'
		},
		{
			icon: Atom,
			skill: 'Atom',
			level: 'Intermediate'
		}
	],
	"Design": [
		{
			icon: Figma,
			skill: 'Figma',
			level: 'Intermediate'
		},
		{
			icon: Adobexd,
			skill: 'Adobe XD',
			level: 'Beginner'
		}
	]
}

export const edu = [
	{
		title: 'Bachelor of Technology',
		info: 'Govt. College of Engineering, Bhawanipatna',
		icon: faUniversity,
		duration: {
			from: '2016',
			to: '2020'
		},
		description: `I came here for my graduation after 1 year of JEE preparation. This college taught me how to tackle life situations being an engineer.`
	},
	{
		title: 'Council of Higher Secondary Education',
		info: 'Nayagarh Junior College, Nayagarh',
		icon: faBuilding,
		duration: {
			from: '2013',
			to: '2015'
		},
		description: `After my High school, I went to town for my intermediate +2. It was quite the experience about everything that will change your life. I learned a lot and did all stuff I can do with my friends. the final year was all about geting your career set, we all focused towards competitives.`
	},
	{
		title: 'Higher Secondary Education',
		info: 'Raghunath Bidyapitha, Odagaon',
		icon: faBuilding,
		duration: {
			from: '2009',
			to: '2013'
		},
		description: `This was the best schooling life, I ever had. I studied 8th to 10th here. I had a lot of friends and teachers were super friendly. I had my times with Junior Red Cross and got chance to join campus training at Bhubaneswar. I was the best cadet in my final year.`
	},
	{
		title: 'Pre High School',
		info: 'Govt. M.E. School, Odagaon',
		icon: faSchool,
		duration: {
			from: '2003',
			to: '2009'
		},
		description: `After the primary education from std. 1, I joined this school for rest of my classes from std. 2 to std. 7. I was curious to learn. I got my 5th and 7th std. scholarship there.`
	}
]

export const exp = [
	{
		role: `Graduate Engineer Trainee`,
		location: `HCL Technologies, Noida`,
		duration: {
			from: `Oct 2020`,
			to: `Present`
		}
	},
	{
		role: `Developer Intern`,
		location: 'Cometa Intellect LLP',
		duration: {
			from: 'May 2020',
			to: `Jul 2020`
		}
	},
	{
		role: `Summer Intern`,
		location: 'DRDO, Chandipur',
		duration: {
			from: 'Jun 2019',
			to: `Jul 2019`
		}
	},
	{
		role: `Committee Member`,
		location: `deCoders, GCEK's Coding Club`,
		duration: {
			from: `Aug 2017`,
			to: `Apr 2020`
		}
	},
	{
		role: `T & P Member (CSE)`,
		location: `Training and Placements Cell, GCEK`,
		duration: {
			from: `Aug 2016`,
			to: `Apr 2020`
		}
	},
	{
		role: `Voluteer(Group Best Cadet)`,
		location: 'Junior Red Cross, Odisha',
		duration: {
			from: null,
			to: null
		}
	}
]

export const projectsList = {
	'academic': [
		{
			id: 'data-simulator',
			name: 'Data Simulator',
			date: '18-Jul-2019',
			tags: ['Python', 'tkinter-gui'],
			image: DataSimImg,
			desc: `A data simulator gui that collects data from any input object, i.e. Mouse, JoyStick etc. and sends the data to the system which can be used as various purposes like object mapping. I did this project during an internship under Scientist-C.`,
			liveLink: null,
			gitLink: `https://github.com/sarojkumar007/Data-Simulator--Internship-Project`
		},
		{
			id: 's-i-s',
			name: 'Smart Irrigation System',
			date: '23-Jul-2020',
			tags: ['Python', 'ML', 'IoT'],
			image: SISImg,
			desc: `A Smart Irrigation System that collects soli parameters like Temperature, Humidity and automates the irrigation process in Crops. It also predicts Weather Conditions and Uses UI to display data to the Users.`,
			liveLink: null,
			gitLink: null
		}
	],

	'sideProjects': [
		{
			id: 'g-u-f',
			name: 'GitHub UserFinder App',
			date: '05-Sep-2018',
			tags: ['JavaScript', 'AJAX'],
			image: GUFImg,
			desc: `A simple application that uses GitHub API and finds users with there details on the Go just by using there github username!`,
			liveLink: `https://sarojkumar007.github.io/projects/github-finder`,
			gitLink: `https://github.com/sarojkumar007/sarojkumar007.github.io/tree/master/projects/github-finder`
		},
		{
			id: "simple-chat",
			name: 'Simple Chat App',
			date: '17-Jul-2018',
			tags: ['JavaScript', 'WebRTC'],
			image: SChatImg,
			desc: `A simple chat application that uses WebRTC to peer to peer communication, will be updating instructions on how to use!`,
			liveLink: `https://sarojkumar007.github.io/projects/chat`,
			gitLink: `https://github.com/sarojkumar007/sarojkumar007.github.io/tree/master/projects/chat`
		},
		{
			id: "simple-video",
			name: 'Simple VideoCall App',
			date: '05-Feb-2019',
			tags: ['JavaScript', 'WebRTC'],
			image: SVideoImg,
			desc: `A simple Video Call Application that uses the same technique of peer to peer connection, and lets you video chat your favourite ones.`,
			liveLink: `https://sarojkumar007.github.io/projects/videoCall`,
			gitLink: `https://github.com/sarojkumar007/sarojkumar007.github.io/tree/master/projects/videoCall`
		},
		{
			id: "todo-js",
			name: 'ToDo - JS',
			date: '25-Jun-2019',
			tags: ['JavaScript', 'CSS'],
			image: TodoImg,
			desc: `A Programmer's must have development, a ToDo app that lets you work smoothly and sequencially.`,
			liveLink: `https://sarojkumar007.github.io/todo-js`,
			gitLink: `https://github.com/sarojkumar007/todo-js`
		},
		{
			id: "portfolio-2",
			name: 'Portfolio 2.0',
			date: '02-Jul-2019',
			tags: ['UX', 'CSS'],
			image: Portfolio2Img,
			desc: `An archived Portfolio, that describes the UX principles and a little CSS work of me. Its Nice to be Upgraded!!`,
			liveLink: `https://sarojkumar007.github.io/portfolio-2.0`,
			gitLink: `https://github.com/sarojkumar007/portfolio-2.0`
		},
		{
			id: 'b-l-p',
			name: 'Business Landing Page',
			date: '12-Jul-2019',
			tags: ['UX', 'CSS'],
			image: BLPImg,
			desc: `A beautiful business landing template that perfect fits into any business landing page creation, built with modern UX and CSS techniques.`,
			liveLink: `https://sarojkumar007.github.io/business-landing-page/`,
			gitLink: `https://github.com/sarojkumar007/business-landing-page`
		},
		{
			id: "img-gallery",
			name: 'Image Gallery',
			date: '11-Nov-2019',
			tags: ['JavaScript', 'PHP'],
			image: ImgGalleryImg,
			desc: `An image gallery platform, that hosts your images, catagories and lets you organise according to your plan. Create Galleries with multiple names and store as many images as you want.`,
			liveLink: null,
			gitLink: `https://github.com/sarojkumar007/imageGallery`
		},
		{
			id: "node-auth",
			name: 'Node Auth System',
			date: '18-Dec-2019',
			tags: ['Node.js', 'MongoDB'],
			image: NodeAuthImg,
			desc: `An Authentication system using Node.js that logs in users based on local DB data or using Google/Facebook (Needs Code Extension)`,
			liveLink: null,
			gitLink: `https://github.com/sarojkumar007/nodeAuth`
		},
		{
			id: "node-blog",
			name: 'Node Blog System',
			date: '06-Jan-2020',
			tags: ['Node.js', 'MongoDB'],
			image: NodeBlogImg,
			desc: `A beautiful and interactive blog system, that uses MongoDB to host images, and create blog pages. Has a feature to categorize posts based on tags and authors.`,
			liveLink: null,
			gitLink: `https://github.com/sarojkumar007/nodeBlog`
		},
		{
			id: "lp-adelle",
			name: 'Landing Page for Adelle International',
			date: '22-Jan-2020',
			tags: ['CSS', 'SCSS'],
			image: AdelleImg,
			desc: `An attractive and fast landing page for adelle international. I used modern CSS techniques like Sass(SCSS) to build this beautiful site with audit rate of 97%.`,
			liveLink: `https://sarojkumar007.github.io/adelle-home/`,
			gitLink: `https://github.com/sarojkumar007/adelle-home`
		},
		{
			id: "sale-dmmb",
			name: 'Sales Page | DMMB',
			date: '05-Mar-2020',
			tags: ['CSS', 'UX'],
			image: SaleDMMBImg,
			desc: `A Digital Marketing Mastery Bundle Sales Page, created just for Marketing and Demonstration purpose.`,
			liveLink: `http://dmm-abhishek.surge.sh/`,
			gitLink: `https://github.com/sarojkumar007/DMMB`
		},
		{
			id: "budgy-app",
			name: 'Budgy App',
			date: '18-Mar-2020',
			tags: ['CSS', 'JavaScript'],
			image: BudgyImg,
			desc: `A simple app that keeps track of your expenses. Add incomes and expenses, keep your budget tight!`,
			liveLink: `https://sarojkumar007.github.io/budgy-app/`,
			gitLink: `https://github.com/sarojkumar007/budgy-app/`
		},
		{
			id: "forkify-app",
			name: 'Forkify',
			date: '13-Aug-2020',
			tags: ['REST API', 'JavaScript'],
			image: ForkifyImg,
			desc: `A model Food App that search over 10,000,000 foods and finds suitable recipe for you. Add to your list for preferred sevings and crave your hunger.`,
			liveLink: `https://forkify-sarojkumar007.netlify.app/`,
			gitLink: `https://github.com/sarojkumar007/forkify/`
		},
		{
			id: "glass-effect",
			name: 'Glass Effect (Only CSS)',
			date: '28-Dec-2021',
			tags: ['CSS'],
			image: GlassEffectImg,
			desc: `A new CSS property used to create glass effect, and with respect to new design system`,
			liveLink: `https://sarojkumar007.github.io/Mini-Projects/GlassEffect/`,
			gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/GlassEffect`
		},
		{
			id: "magic-nav",
			name: 'Magic Navigation Bar',
			date: '29-Dec-2021',
			tags: ['CSS', 'JavaScript'],
			image: MagicNavImg,
			desc: `An approachable mobile nav with magic transition. You can take this idea for navigations and create your own styling. :)`,
			liveLink: `https://sarojkumar007.github.io/Mini-Projects/MagicNav/`,
			gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/MagicNav`
		},
		{
			id: "random-color",
			name: 'Random Color Generater',
			date: '11-Dec-2021',
			tags: ['CSS', 'JavaScript'],
			image: RanColorImg,
			desc: `A simple and handy application for designer/developers which provides random colors for your next projects while maintaining a record of colors. Its sort of a DJ itself, you know!`,
			liveLink: `https://sarojkumar007.github.io/Mini-Projects/RandomColor/`,
			gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/RandomColor`
		},
		{
			id: "demo-rest",
			name: 'Demo Restaurant Page',
			date: '28-Dec-2021',
			tags: ['CSS', 'JavaScript'],
			image: DemoRestImg,
			desc: `A model restaurant page for beginners who want to learn modern design and theme changing.`,
			liveLink: `https://sarojkumar007.github.io/Mini-Projects/RestaurantMenu/`,
			gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/RestaurantMenu`
		},
	],

	'miniGames': [
		{
			id: "google-dino",
			name: 'Google Dino Game (Redesigned)',
			date: '23-Nov-2018',
			tags: ['CSS', 'JavaScript'],
			image: DinoImg,
			desc: `Google's Offline Game, redesigned with cool background song. Lets you play anytime anywhere!!`,
			liveLink: `https://sarojkumar007.github.io/projects/dino`,
			gitLink: `https://github.com/sarojkumar007/sarojkumar007.github.io/tree/master/projects/dino`
		},
		{
			id: "dice-game",
			name: 'Dice Game',
			date: '16-May-2020',
			tags: ['CSS', 'JavaScript'],
			image: DiceGameImg,
			desc: `A simple two player fun dice game. Be the first one to hold highest points.`,
			liveLink: `https://sarojkumar007.github.io/dice-game/`,
			gitLink: `https://github.com/sarojkumar007/dice-game/`
		},
		{
			id: "memory-game",
			name: 'Memory Game',
			date: '30-Dec-2021',
			tags: ['CSS', 'JavaScript'],
			image: MemGameImg,
			desc: `A classic memory game to test your memory and react time. Give it a try through! ;)`,
			liveLink: `https://sarojkumar007.github.io/Mini-Projects/MemoryGame/`,
			gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/MemoryGame`
		},
		{
			id: "quiz-game",
			name: 'Quiz Game',
			date: '05-Jan-2022',
			tags: ['SPA', 'JavaScript', 'AJAX'],
			image: QGameImg,
			desc: `A quiz game for knowledge and fun, implemented as a Single Page Application (SPA).`,
			liveLink: `https://sarojkumar007.github.io/Mini-Projects/QuizApp/`,
			gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/QuizApp`
		},
		{
			id: "rps",
			name: 'Rock Paper Scissors',
			date: '06-Dec-2021',
			tags: ['JavaScript', 'CSS'],
			image: RPSImg,
			desc: `The classic Rock Paper Scissors Game implemented with JavaScript. Lets see who has the luck, you or the Computer!`,
			liveLink: `https://sarojkumar007.github.io/Mini-Projects/RockPaperScissors/`,
			gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/RockPaperScissors`
		},
		{
			id: "ttt",
			name: 'Tic Tac Toe',
			date: '11-Dec-2021',
			tags: ['JavaScript', 'CSS'],
			image: TTTImg,
			desc: `Have nothing to do with your friend? Try this one, anytime, anywhere.`,
			liveLink: `https://sarojkumar007.github.io/Mini-Projects/TicTacToe/`,
			gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/TicTacToe`
		},
		{
			id: "word-game",
			name: 'Word Game',
			date: '28-Dec-2021',
			tags: ['CSS', 'JavaScript'],
			image: WGImg,
			desc: `Guess the word. Yes, that's the Game. Use your hint and other perks wisely to make a high score.`,
			liveLink: `https://sarojkumar007.github.io/Mini-Projects/WordGame/`,
			gitLink: `https://github.com/sarojkumar007/Mini-Projects/tree/main/WordGame`
		},
	]
}