import React from "react"
import solidSprite from "../images/sprites/solid.svg"
import brandsSprite from "../images/sprites/brands.svg"
export default (props) => {
  return (
    <div className="sp-project">
      <h3 className="sp-project--title sp-project--title-1">{props.title}</h3>
      <div className="sp-project--meta">
        <div className="sp-project--meta-span">
          <svg fill="url(#l-grad)">
            <use href={solidSprite + "#calendar-alt"}></use>
          </svg>
          <span>{props.date}</span>
        </div>
        <div className="sp-project--meta-span">
          <svg fill="url(#l-grad)">
            <use href={solidSprite + "#tags"}></use>
          </svg>
          <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline" }}>
            <span className="project-tag">{props.tag1}</span>
            , <span className="project-tag">{props.tag2}</span>
          </span>
        </div>
      </div>
      <div className="sp-project--desc">
        {props.desc}
      </div>
      <div className="sp-project--cta">
        {props.liveLink ? <a href={props.liveLink} target="_blank" rel="noopener noreferrer" className="sp-link">{props.liveLinkText}</a> : ""}
        <a href={props.gitLink} target="_blank" rel="noopener noreferrer" className="sp-btn">
          <svg className="sp-btn--icon">
            <use href={brandsSprite + "#github"}></use>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  )
}