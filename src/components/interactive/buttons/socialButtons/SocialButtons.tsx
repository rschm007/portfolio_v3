import { Wrapper } from "components";
import { GithubButton } from "./GithubButton";
import { LinkedInButton } from "./LinkedInButton";
import React from "react";

export interface SocialButtonsProps {
	direction?: "row" | "col";
}

export const SocialButtons = ({ direction = "row" }: SocialButtonsProps) => {
	return (
		<Wrapper className={`flex_${direction} buttons`}>
			<GithubButton />
			<LinkedInButton />
		</Wrapper>
	);
};
