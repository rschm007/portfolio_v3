import {
	Header,
	Subtitle,
	MainContentWrapper,
	SocialButtons,
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

				<SocialButtons />
			</Header>
		</MainContentWrapper>
	);
};
