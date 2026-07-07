import { motion } from "framer-motion";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import {
	Wrapper,
	Header,
	Subtitle,
	LinkButton,
	DownloadButton,
	PageMeta,
} from "components";

// using react-hook-form https://react-hook-form.com
// using emailjs https://dashboard.emailjs.com

export const Contact = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [submitError, setSubmitError] = useState(false);
	const form = useRef(null);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const serviceId = "service_099ykyu";
	const publicKey = "PM7WpMK3j-g1tPpJt";

	const onSubmit: SubmitHandler<FieldValues> = () => {
		setSubmitError(false);

		return sendForm(serviceId, "template_qxzz12l", form.current ?? "", {
			publicKey: publicKey,
		}).then(
			() => setFormSubmitted(true),
			() => setSubmitError(true),
		);
	};

	const message = watch("message") || "";
	const messageCharactersLeft = 1500 - message.length;

	const resumeDownloadLink =
		"https://docs.google.com/document/d/e/2PACX-1vRFi-hE3U9E35kUpok8BNZIwZk9tzoJex8G1mYLrUxaebxURJjnANfeWmi3zm8pug/pub";

	return (
		<Wrapper id="contact">
			<PageMeta title="Contact" />
			<Wrapper className="contact_container">
				<Header
					tag="h1"
					content="Contact"
					className="header_contact__hero"
				>
					<Subtitle
						tag="p"
						content={
							formSubmitted
								? "Thanks, talk to you soon!"
								: submitError
									? "Something went wrong. Please try again."
									: "Let's get in touch."
						}
						className="contact"
					/>

					<>
						{!formSubmitted && (
							<form
								id="contact_form"
								onSubmit={handleSubmit(onSubmit)}
								ref={form}
							>
								<div className="field">
									<label htmlFor="name">Name</label>
									<input
										id="name"
										type="text"
										placeholder="Your name"
										{...register("name", {
											required: true,
											maxLength: 30,
										})}
									/>
									{errors.name && (
										<span className="field_error" role="alert">
											Please enter your name.
										</span>
									)}
								</div>

								<div className="field">
									<label htmlFor="email">Email</label>
									<input
										id="email"
										type="email"
										placeholder="you@example.com"
										{...register("email", {
											required: true,
											pattern:
												/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										})}
									/>
									{errors.email && (
										<span className="field_error" role="alert">
											{errors.email.type === "pattern"
												? "Please enter a valid email."
												: "Please enter your email."}
										</span>
									)}
								</div>

								<div className="field">
									<label htmlFor="message">Message</label>
									<textarea
										id="message"
										rows={6}
										placeholder="What's on your mind?"
										maxLength={1500}
										{...register("message", {
											required: true,
											maxLength: 1500,
										})}
									/>
									{errors.message && (
										<span className="field_error" role="alert">
											Please enter a message.
										</span>
									)}
									<span className="message-chars-left">
										{messageCharactersLeft} characters left
									</span>
								</div>

								<button type="submit" className="submit_button">
									Send <i className="fa-solid fa-paper-plane" />
								</button>
							</form>
						)}
					</>
				</Header>

				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50 }}
				>
					{" "}
					<Subtitle
						tag="p"
						content="Find me online."
						className="contact_subtitle__links"
					/>
					<Wrapper className="flex_column buttons">
						<LinkButton
							relativeLink={false}
							href="https://github.com/rschm007"
							iconClassName="fab fa-github"
							content="Github"
							className="github"
						/>
						<LinkButton
							relativeLink={false}
							href="https://www.linkedin.com/in/robert-schmahl/"
							iconClassName="fab fa-linkedin-in"
							content="LinkedIn"
						/>
					</Wrapper>
					<Subtitle
						tag="p"
						content="Check out my resume."
						className="contact_subtitle__links"
					/>
					<Wrapper className="flex_column buttons">
						<DownloadButton
							href={resumeDownloadLink}
							iconClassName="fa-solid fa-file-arrow-down"
							content="Download"
							className="download"
						/>
					</Wrapper>
				</motion.div>
			</Wrapper>
		</Wrapper>
	);
};
