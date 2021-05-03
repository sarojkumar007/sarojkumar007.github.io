import React from "react"
import Header from "../layout/header"
import Footer from "../layout/footer"
import "../styles/style.min.css"

export default (props) => {
	return (
		<>
			<svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
				<linearGradient id="l-grad" x2="1" y2="1">
					<stop offset="0%" stopColor="#EE5522" />
					<stop offset="100%" stopColor="#FFBB33" />
				</linearGradient>
			</svg>
			<svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
				<linearGradient id="insta-grad" x2="1" y2="1">
					<stop offset="0%" stopColor="#515BD4" />
					<stop offset="25%" stopColor="#8134AF" />
					<stop offset="50%" stopColor="#DD2A7B" />
					<stop offset="75%" stopColor="#FEDA77" />
					<stop offset="100%" stopColor="#F58529" />
				</linearGradient>
			</svg>
			<Header />
			<main className="sp-main">
				{props.children}
			</main>
			<Footer />
		</>
	)
}
