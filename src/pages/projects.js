import React from "react"
import Layout from "../layout/layout"
import Project from "../layout/project-card"
import SEO from "../layout/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="sp-section sp-section-projects">
        <h2 className="sp-heading" id="#academic-projects">Academic Projects</h2>
        <div className="sp-project--container">
          <Project
            title="Data Simulator"
            date="July 18th '19"
            tag1="Python"
            tag2="tkinter-gui"
            desc="A data simulator gui that collects data from any input object, i.e. Mouse, JoyStick etc. and sends the data to the system which can be used as various purposes like object mapping. I did this project during an internship under Scientist-C."
            liveLink={false}
            gitLink="https://github.com/sarojkumar007/Data-Simulator--Internship-Project"
          />
          <Project
            title="Smart Irrigation System"
            date="July 23rd '20"
            tag1="Python"
            tag2="ML,IoT"
            desc="A Smart Irrigation System that collects soli parameters like Temperature, Humidity and automates the irrigation process in Crops. It also predicts Weather Conditions and Uses UI to display data to the Users. More on github ..."
            liveLink={false}
            gitLink={false}
          />
        </div>
      </section>
      <section className="sp-section sp-section-sideProjects">
        <h2 className="sp-heading" id="#side-projects">Side Projects</h2>
        <div className="sp-project--container">
          <Project
            title="GitHub Finder App"
            date="Sept 05th '18"
            tag1="JS"
            tag2="AJAX"
            desc="A simple application that uses GitHub API and finds users with there details on the Go just by using there github username!"
            liveLink="https://sarojkumar007.github.io/projects/github-finder"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/sarojkumar007.github.io/tree/master/projects/github-finder"
          />

          <Project
            title="Simple Chat App"
            date="July 17th '18"
            tag1="JS"
            tag2="WebRTC"
            desc="A simple chat application that uses WebRTC to peer to peer communication, will be updating instructions on how to use!"
            liveLink="https://sarojkumar007.github.io/projects/chat"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/sarojkumar007.github.io/tree/master/projects/chat"
          />

          <Project
            title="Google Dino Game (Redesigned)"
            date="Nov 23rd '18"
            tag1="JS"
            tag2="CSS"
            desc="Google's Offline Game, redesigned with cool background song. Lets you play anytime anywhere!!"
            liveLink="https://sarojkumar007.github.io/projects/dino"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/sarojkumar007.github.io/tree/master/projects/dino"
          />

          <Project
            title="Simple Video Call App"
            date="Feb 05th '19"
            tag1="JS"
            tag2="WebRTC"
            desc="A simple Video Call Application that uses the same technique of peer to peer connection, and lets you video chat your favourite ones."
            liveLink="https://sarojkumar007.github.io/projects/videoCall"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/sarojkumar007.github.io/tree/master/projects/videoCall"
          />

          <Project
            title="Todo-Js"
            date="June 25th '19"
            tag1="JS"
            tag2="CSS"
            desc="A Programmer's must have development, a ToDo app that lets you work smoothly and sequencially."
            liveLink="https://sarojkumar007.github.io/todo-js"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/todo-js"
          />
          <Project
            title="Portfolio 2.0"
            date="July 02nd '19"
            tag1="UX"
            tag2="CSS"
            desc="An archived Portfolio, that describes the UX principles and a little CSS work of me. Its Nice to be Upgraded!!"
            liveLink="https://sarojkumar007.github.io/portfolio-2.0"
            liveLinkText="See Live"
            gitLink=" https://github.com/sarojkumar007/portfolio-2.0"
          />
          <Project
            title="Business Landing Page"
            date="July 12th '19"
            tag1="UX"
            tag2="CSS"
            desc="A beautiful business landing template that perfect fits into any business landing page creation, built with modern UX and CSS techniques."
            liveLink="https://sarojkumar007.github.io/business-landing-page/"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/business-landing-page"
          />
          <Project
            title="Image Gallery"
            date="Nov 11th '19"
            tag1="JS"
            tag2="PHP"
            desc="An image gallery platform, that hosts your images, catagories and lets you organise according to your plan. Create Galleries with multiple names and store as many images as you want."
            liveLink={false}
            gitLink="https://github.com/sarojkumar007/imageGallery"
          />
          <Project
            title="Node Auth System"
            date="Dec 18th '19"
            tag1="Node.js"
            tag2="MongoDB"
            desc="An Authentication system using Node.js that logs in users based on local DB data or using Google/Facebook (Needs Code Extension)"
            liveLink={false}
            gitLink="https://github.com/sarojkumar007/nodeAuth"
          />
          <Project
            title="Node Blog System"
            date="Jan 06th '20"
            tag1="Node.js"
            tag2="MongoDB"
            desc="A beautiful and interactive blog system, that uses MongoDB to host images, and create blog pages. Has a feature to categorize posts based on tags and authors."
            liveLink={false}
            gitLink="https://github.com/sarojkumar007/nodeBlog"
          />
          <Project
            title="Landing Page for Adelle International"
            date="Jan 22nd '20"
            tag1="CSS"
            tag2="SCSS"
            desc="An attractive and fast landing page for adelle international. I used modern CSS techniques like Sass(SCSS) to build this beautiful site with audit rate of 97%."
            liveLink="https://sarojkumar007.github.io/adelle-home/"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/adelle-home"
          />

          <Project
            title="Sales Page | DMMB"
            date="March 05th '20"
            tag1="UX"
            tag2="CSS"
            desc="A Digital Marketing Mastery Bundle Sales Page, created just for Marketing and Demonstration purpose."
            liveLink="http://dmm-abhishek.surge.sh"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/DMMB"
          />

          <Project
            title="Dice Game"
            date="May 16th '20"
            tag1="JS"
            tag2="CSS"
            desc="A simple two player fun dice game. Be the first one to hold highest points."
            liveLink="https://sarojkumar007.github.io/dice-game/"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/dice-game/"
          />

          <Project
            title="Budgy App"
            date="May 18th '20"
            tag1="JS"
            tag2="CSS"
            desc="A simple app that keeps track of your expenses. Add incomes and expenses, keep your budget tight!"
            liveLink="https://sarojkumar007.github.io/budgy-app/"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/budgy-app/"
          />

          <Project
            title="Forkify"
            date="Aug 13th '20"
            tag1="JS"
            tag2="API"
            desc="A model Food App that search over 10,000,000 foods and finds suitable recipe for you. Add to your list for preferred sevings and crave your hunger."
            liveLink="https://forkify-sarojkumar007.netlify.app/"
            liveLinkText="See Live"
            gitLink="https://github.com/sarojkumar007/forkify/"
          />
        </div>
      </section>
      <section className="sp-section sp-section-catalogue" style={{ "minHeight": "auto" }}>
        <h2 className="sp-heading" id="#catalog">Catalogue</h2>
        <div className="sp-section-catalogue-container" style={{ "fontFamily": "Sen" }}>
          <p>Coming soon ...</p>
        </div>
      </section>
    </Layout>
  )
}
