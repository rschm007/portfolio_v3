import React from "react";
import { LinkButton } from "../linkButton";

export const GithubButton = () => {
	return (
		<LinkButton
			relativeLink={false}
			href="https://github.com/rschm007"
			iconClassName="fab fa-github"
			content="Github"
			className="github"
		/>
	);
};
