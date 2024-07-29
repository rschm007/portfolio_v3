import {
	Wrapper,
	Header,
	Subtitle,
	LinkButton,
	MainContentWrapper,
} from "components";
import React from "react";

export const Main = () => {
	return (
		<MainContentWrapper>
			<Header
				tag="h1"
				content="Hi! I'm Robert."
				className="header_hero main"
			>
				<Subtitle
					tag="p"
					content="I'm a web developer from California."
					className="about"
				/>

				<Wrapper className="flex_row buttons">
					<LinkButton
						relativeLink={false}
						href="https://github.com/rschm007"
						iconClassName="fab fa-github"
						content="Github"
					/>
					<LinkButton
						relativeLink={false}
						href="https://www.linkedin.com/in/robert-schmahl/"
						iconClassName="fab fa-linkedin-in"
						content="LinkedIn"
					/>
				</Wrapper>
			</Header>
		</MainContentWrapper>
	);
};
