import { aboutConfig } from "./config";
import {
	Wrapper,
	Header,
	Subtitle,
	AboutCard,
	List,
	PageMeta,
} from "components";

export const About = () => {
	const { code, tech, programs, fun } = aboutConfig;

	return (
		<Wrapper id="about">
			<PageMeta title="About" />
			<Header tag="h1" content="About" className="header_about__hero">
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

			<Wrapper className="about_container">
				<AboutCard
					className="code"
					icon="fa-solid fa-laptop-code"
					header="Code">
					<List list={code} />
				</AboutCard>

				<AboutCard className="tech" icon="fas fa-tools" header="Tech">
					<List list={tech} />
				</AboutCard>

				<AboutCard
					className="programs"
					icon="fa-solid fa-file-code"
					header="Programs">
					<List list={programs} />
				</AboutCard>

				<AboutCard
					className="fun"
					icon="fa-solid fa-face-smile"
					header="Fun">
					<List list={fun} />
				</AboutCard>
			</Wrapper>
		</Wrapper>
	);
};
