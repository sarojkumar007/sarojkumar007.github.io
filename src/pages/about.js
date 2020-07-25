import React from "react"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
// import profile from "../images/saroj-kumar-sahoo.webp"
import solidSprite from "../images/sprites/solid.svg"

export default () => {
  return (
    <Layout>
      <SEO title="About" />
      <section className="sp-section sp-section-about">
        <h2 className="sp-heading">About Me</h2>
        <div className="sp-about-container">
          <div className="sp-about-img">
            <img loading="lazy" src="/saroj-kumar-sahoo.webp" alt="Saroj Kumar Sahoo" />
          </div>
          <div className="sp-about-details">
            <h4 className="sp-heading-3">About</h4>
            <p>Hey! Thanks for being here.<br />I'm Saroj Kumar Sahoo, graduate in Computer Science and Engineering from <em><a className="sp-link" href="https://www.gcekbpatna.ac.in/" aria-label="https://www.gcekbpatna.ac.in/">GCEK, Bhawanipatna</a>, Odisha</em>.<br />I make simple and attractive websites, landing pages, Site Optimization and SEO for Businesses.</p>
            <h4 className="sp-heading-3">Hobbies</h4>
            <p>In my leisure, I read short news. Painting is my hobby, so I do paint when ever I get time.<br />I love to play Online Games more often. I like to explore a lot about places for inspiration.</p>
            <h4 className="sp-heading-3">Personality</h4>
            <p>I am a good listener. I believe <q><em>Patience and Hard Work is the key to success</em></q>, so I never stop chasing after my dream.<br />I like to make friends and I love to discuss things with them.</p>
          </div>
        </div>
      </section>
      <section className="sp-section sp-section-edu" id="education">
        <h2 className="sp-heading">Education</h2>
        <div className="container">
          <ul>
            <li>
              <span></span>
              <div className="timel-title">Pre High School Education</div>
              <div className="timel-info">
                <svg className="timel-icon" fill="url(#l-grad)">
                  <use href={solidSprite + "#building"}></use>
                </svg> Govt. M.E. School, Odagaon
            </div>
            {/* <div className="timel-details">
                After the primary education from std. 1, I joined this school for rest of my classes from std. 2 to std. 7. I was curious to learn. I got my 5th and 7th std. scholarship there.
            </div> */}
              <div className="time">
                <span>2003</span>
                <span>2009</span>
              </div>
            </li>
            <li>
              <span></span>
              <div className="timel-title">Higher Secondary Education</div>
              <div className="timel-info">
                <svg className="timel-icon" fill="url(#l-grad)">
                  <use href={solidSprite + "#building"}></use>
                </svg> Raghunath Bidyapitha, Odagaon
            </div>
            {/* <div className="timel-details">This was the best schooling life, I ever had. I studied 8th to 10th here. I had a lot of friends and teachers were super friendly. I had my times with Junior Red Cross and got chance to join campus training at Bhubaneswar. I was the best cadet in my final year.
            </div> */}
              <div className="time">
                <span>2009</span>
                <span>2013</span>
              </div>
            </li>
            <li>
              <span></span>
              <div className="timel-title">Council of Higher Secondary Education</div>
              <div className="timel-info">
                <svg className="timel-icon" fill="url(#l-grad)">
                  <use href={solidSprite + "#building"}></use>
                </svg> Nayagarh Junior College, Nayagarh
            </div>
            {/* <div className="timel-details">After my High school, I went to town for my intermediate +2. It was quite the experience about everything that will change your life. I learned a lot and did all stuff I can do with my friends. the final year was all about geting your career set, we all focused towards competitives.
            </div> */}
              <div className="time">
                <span>2013</span>
                <span>2015</span>
              </div>
            </li>
            <li>
              <span></span>
              <div className="timel-title">Bachelor of Technology</div>
              <div className="timel-info">
                <svg className="timel-icon" fill="url(#l-grad)">
                  <use href={solidSprite + "#building"}></use>
                </svg> Govt. College of Engineering, Bhawanipatna
            </div>
            {/* <div className="timel-details">I came here for my graduation after 1 year of JEE preparation. This college taught me how to tackle life situations being an engineer.
            </div> */}
              <div className="time">
                <span>2016</span>
                <span>2020</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="sp-section sp-section-exp">
        <h2 className="sp-heading">Experience</h2>
        <div className="sp-section-exp--container">
          <div className="sp-section-exp-item">
            <div><h4 className="sp-heading-3">Courses</h4></div>
            <ul className="sp-section-exp--ul">
              <li>Core Java Training <b>/</b> Lakhshya Institute, Bhubaneswar</li>
              <li>Advanced Java Training <b>/</b> Lakhshya Institute, Bhubaneswar</li>
              <li>Complete Web Developer Bootcamp <b>/</b> Udemy</li>
              <li>Advanced CSS and Sass <b>/</b> Udemy</li>
              <li>The Complete JavaScript Course 2020 <b>/</b> Udemy</li>
              <li>Full Stack MERN <b>/</b> LearnCodeOnline</li>
            </ul>
          </div>
          <div className="sp-section-exp-item">
            <div><h4 className="sp-heading-3">Works / Responsiblities</h4></div>
            <ul className="sp-section-exp--ul">
              <li>Intern <b>/</b> DRDO, Chandipur</li>
              <li>Voluteer(Group best cadet) <b>/</b> Junior Red Cross</li>
              <li>Committee Member <b>/</b> deCoders, GCEK's Coding Club</li>
              <li>T & P Member (CSE) <b>/</b> Training and Placements, GCEK</li>
              <li>Intern <b>/</b> Cometa Intellect LLP</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
