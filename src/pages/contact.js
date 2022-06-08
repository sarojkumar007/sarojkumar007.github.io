import React, { useState } from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import contactDesignImg from '../images/contact_design.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-regular-svg-icons'
import { otherLinks } from '../data/siteData'
import { Helmet } from 'react-helmet'

const Contact = () => {

	const [isValid, setIsValid] = useState({
		name: null,
		email: null,
		captcha: null
	})
	const [isTouched, setIsTouched] = useState({
		name: false,
		email: false
	})
	const [contactData, setContactData] = useState({
		name: '',
		email: '',
		message: ''
	})
	const [submitStat, setSubmitStat] = useState(null);

	const validateInput = (val, inp) => {
		if (inp === 'text') {
			if (val.length >= 3) { return true }
			else { return false }
		}
		else if (inp === 'email') {
			// eslint-disable-next-line
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) { return true }
			else { return false }
		}
	}

	const resetForm = () => {
		setIsValid({
			name: null,
			email: null,
			captcha: null
		});
		setIsTouched({
			name: false,
			email: false
		});
		setContactData({
			name: '',
			email: '',
			message: ''
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValid.name && isValid.email) {
			window.fetch(e.target.action, {
				method: 'POST',
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(contactData)
			})
				.then(response => {
					if (response.ok) {
						setSubmitStat('success');
						resetForm();
						window.grecaptcha.reset();
						window.document.getElementById('contactSubmitBtn').disabled = true
						setTimeout(() => {
							setSubmitStat(null)
						}, 5000);
					} else {
						setSubmitStat('error');
						setTimeout(() => {
							setSubmitStat(null)
						}, 5000);
					}
				})
				.catch(err => {
					console.log(err);
					setSubmitStat('error');
					setTimeout(() => {
						setSubmitStat(null)
					}, 5000);
				})
		}
	}

	return (
		<Layout>
			<Seo title="Contact | Saroj Kumar Sahoo" />
			<Helmet>
				<script src="https://www.google.com/recaptcha/api.js" async defer></script>
				<script src="/main.js"></script>
			</Helmet>
			<section className="sec contact">
				<h2 className="sec__heading center cap">
					<span style={{ 'fontSize': '3.2rem' }}>Have some questions?</span>
				</h2>
				<p className="text_mute text_center">I would love to hear some suggestions.</p>
				<div className="contact__wrap">
					<div className="contact__design">
						<img src={contactDesignImg} alt="Contact Me" className="contact__design--img" />
						<div className="contact__design--layer"></div>
					</div>
					<div className="contact__form abs_center">
						<form action={otherLinks.api.contactAction} method="post" spellCheck="false" autoComplete="off" onSubmit={handleSubmit}>
							<div className="input__group">
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Full Name"
									className={`${isTouched.name ? `touched` : ''} ${isTouched.name && (isValid.name === false) ? `invalid` : ``}`}
									onFocus={() => {
										if (!isTouched.name)
											setIsTouched({ ...isTouched, name: true })
									}}
									onChange={(e) => {
										validateInput(e.target.value, 'text') ?
											setIsValid({ ...isValid, name: true }) :
											setIsValid({ ...isValid, name: false });
										setContactData({ ...contactData, name: e.target.value });
									}}
									value={contactData.name}
								/>
								<span className={`input__msg ${isTouched.name && (isValid.name === false) ? 'err' : ''}`}>Name should be atleast 3 letters.</span>
							</div>
							<div className="input__group">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email Address"
									className={`${isTouched.email ? `touched` : ''} ${isTouched.email && (isValid.email === false) ? `invalid` : ``}`}
									onFocus={() => {
										if (!isTouched.email)
											setIsTouched({ ...isTouched, email: true })
									}}
									onChange={(e) => {
										validateInput(e.target.value, 'email') ?
											setIsValid({ ...isValid, email: true }) :
											setIsValid({ ...isValid, email: false });
										setContactData({ ...contactData, email: e.target.value });
									}}
									value={contactData.email} />
								<span className={`input__msg ${isTouched.email && (isValid.email === false) ? 'err' : ''}`}>Please enter a valid email!</span>
							</div>
							<div className="input__group">
								<textarea
									name="message"
									id="message"
									cols="30"
									rows="4"
									placeholder="Your Message"
									spellCheck="true"
									onChange={(e) => {
										setContactData({ ...contactData, message: e.target.value });
									}}
									value={contactData.message}
								>
								</textarea>
							</div>
							<div className="input__group">
								<div className="g-recaptcha" data-sitekey="6Ld6V-EeAAAAAEptNoCI8g5wzGJ_j58tOkw9yKkI" data-callback="setCaptchaValid"></div>
							</div>
							<div className="input__cta v_center">
								{submitStat === 'success' ? (<>
									<p className="input__msg success">Thank you for your feedback.</p>
								</>) : (<></>)}
								{submitStat === 'error' ? (<>
									<p className="input__msg err">Cannot submit the feedback. Try later.</p>
								</>) : (<></>)}
								<button id="contactSubmitBtn" className="btn btn-f cap" disabled={!isValid.name || !isValid.email || !isValid.captcha} style={{ 'marginLeft': '1rem' }}>
									<span>Send</span>
									<FontAwesomeIcon icon={faHandPointUp} />
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Contact
