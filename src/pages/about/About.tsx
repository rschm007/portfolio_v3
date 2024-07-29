import React from "react";
// import { aboutConfig } from "./config";
import { Wrapper, Header, Subtitle, MainContentWrapper } from "components";

export const About = () => {
	// const { code, tech, programs, fun } = aboutConfig;

	return (
		<MainContentWrapper>
			<Header
				tag="h1"
				content="About"
				className="header_hero about flex_col"
			>
				<Subtitle
					tag="p"
					content="My name is Robert Schmahl. I'm a full stack engineer based in Orange County, CA."
					className="about"
				/>
				<Subtitle
					tag="p"
					content="I build cool apps however I can, whenever I can, like SPA React applications, Shopify ecommerce sites, artist portfolios, and Wordpress multi-page sites."
					className="about"
				/>
				<Subtitle
					tag="p"
					content="I like dogs, good food, and campfires."
					className="about"
				/>
			</Header>

			{/* <Wrapper class="container" id="about">
        <AboutCard class="code" icon="fa-solid fa-laptop-code" header="Code">
          <List list={code} />
        </AboutCard>

        <AboutCard class="tech" icon="fas fa-tools" header="Tech">
          <List list={tech} />
        </AboutCard>

        <AboutCard
          class="programs"
          icon="fa-solid fa-file-code"
          header="Programs"
        >
          <List list={programs} />
        </AboutCard>

        <AboutCard class="fun" icon="fa-solid fa-face-smile" header="Fun">
          <List list={fun} />
        </AboutCard>
      </Wrapper> */}
		</MainContentWrapper>
	);
};
