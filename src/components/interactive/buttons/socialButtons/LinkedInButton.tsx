import React from "react";
import { LinkButton } from "../linkButton";

export const LinkedInButton = () => {
	return (
		<LinkButton
			relativeLink={false}
			href="https://www.linkedin.com/in/robert-schmahl/"
			iconClassName="fab fa-linkedin-in"
			content="LinkedIn"
		/>
	);
};
