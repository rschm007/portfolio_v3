import { motion } from "framer-motion";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import {
	Wrapper,
	Header,
	Subtitle,
	LinkButton,
	DownloadButton,
} from "components";

// using react-hook-form https://react-hook-form.com
// using emailjs https://dashboard.emailjs.com

export const Contact = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const form = useRef(null);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const serviceId = "service_099ykyu";
	const publicKey = "PM7WpMK3j-g1tPpJt";

	const onSubmit: SubmitHandler<FieldValues> = (data) =>
		sendForm(serviceId, "template_qxzz12l", form.current ?? "", {
			publicKey: publicKey,
		}).then(
			(res) => {
				console.log("SUCCESS!", res.status, res.text);
				console.log(data);

				setFormSubmitted(true);
			},
			(err) => {
				console.log("ERROR", err);
			},
		);

	const message = watch("message") || "";
	const messageCharactersLeft = 1500 - message.length;

	const resumeDownloadLink =
		"https://docs.google.com/document/d/e/2PACX-1vRFi-hE3U9E35kUpok8BNZIwZk9tzoJex8G1mYLrUxaebxURJjnANfeWmi3zm8pug/pub";

	return (
		<Wrapper id="contact">
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
								<input
									type="text"
									placeholder="Name"
									{...register("name", {
										required: true,
										maxLength: 30,
									})}
								/>
								{errors.name && (
									<span>This field is required</span>
								)}

								<input
									type="email"
									placeholder="Email"
									{...register("email", {
										required: true,
										pattern:
											/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									})}
								/>
								{errors.email && (
									<span>This field is required</span>
								)}

								<textarea
									placeholder="Message"
									maxLength={1500}
									{...register("message", {
										required: true,
										maxLength: 1500,
									})}
								/>
								{errors.message && (
									<span>This field is required</span>
								)}

								<span className="message-chars-left">
									{messageCharactersLeft}
								</span>

								<button className="submit_button">
									<input type="submit" value="Send" />
									<i className="fa-solid fa-envelope" />
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
