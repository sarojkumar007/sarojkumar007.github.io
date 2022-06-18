const social = {
	twitter: `_sarojk18`,
	twitterLink: `https://twitter.com/_sarojk18`,
	githubLink: `https://github.com/sarojkumar007`,
	instagramLink: `https://www.instagram.com/saroj_smiley/`,
	linkedinLink: `https://www.linkedin.com/in/sarojk18/`,
	youtubeLink: `#!`,//`https://www.youtube.com/channel/UCyG5IZIwPxKiG9tmM-SoCtg`,
	codepenLink: `https://codepen.io/sarojk18`,
	hackerrankLink: `https://www.hackerrank.com/sarojk18`
}

const seo = {
	// GA_TRACKING_ID: `UA-159657221-1`,
	GA4_MEASUREMENT_ID: 'G-E427YCY03W'
}

const config = {
	...social,
	...seo,
	title: `Saroj Kumar Sahoo`,
	author: {
		name: `Saroj Kumar`,
		summary: `Developer and Automation Engineer`
	},
	description: `Saroj Kumar Sahoo is a front-end web developer and designer.`,
	siteUrl: `https://sarojkumar.dev`, // no trailing slash
}

module.exports = config