import { Link } from "react-router-dom";
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
	const { frontend, ai, backend, tools } = aboutConfig;

	return (
		<Wrapper id="about">
			<PageMeta title="About" />
			<Header tag="h1" content="About" className="header_about__hero">
				<Subtitle tag="p" className="about">
					{"I'm Robert Schmahl, a Senior Full-Stack & Applied AI Engineer based in sunny California. At "}
					<a
						href="https://www.seekinsights.com/"
						target="_blank"
						rel="noopener noreferrer">
						Seek Insights
					</a>
					{", I build AI-powered data experiences — turning LLM capabilities into intuitive, production-grade user workflows."}
				</Subtitle>
				<Subtitle
					tag="p"
					content="I work across the stack in React, TypeScript, and Python — designing backend services and APIs that integrate AI models, and shipping the interfaces on top, with the testing, CI/CD, and observability to keep it reliable at scale. Put simply: I turn “it worked in dev” into production systems."
					className="about"
				/>
				<Subtitle
					tag="p"
					content="My path here wasn't typical — graphic design and communications first, then code — which shows up as strong design instincts and a real eye for UX."
					className="about"
				/>
				<Subtitle
					tag="p"
					content="Off the clock: dogs, good food, and campfires."
					className="about"
				/>
			</Header>

			<Wrapper className="about_container">
				<AboutCard
					className="frontend"
					icon="fa-solid fa-code"
					header="Frontend">
					<List list={frontend} />
				</AboutCard>

				<AboutCard className="ai" icon="fa-solid fa-robot" header="AI & Data">
					<List list={ai} />
				</AboutCard>

				<AboutCard
					className="backend"
					icon="fa-solid fa-server"
					header="Backend">
					<List list={backend} />
				</AboutCard>

				<AboutCard
					className="tools"
					icon="fa-solid fa-pen-ruler"
					header="Design">
					<List list={tools} />
				</AboutCard>
			</Wrapper>

			<Wrapper className="services_callout">
				<Subtitle
					tag="h2"
					content="Open to freelance"
					className="services_heading"
				/>
				<Subtitle tag="p" className="services_text">
					{"Alongside my full-time work, I take select freelance projects through Robert Schmahl Design. Check out my "}
					<Link to="/work">Work page</Link>
					{" for more details on what I've built. Have something in mind?"}
				</Subtitle>
			</Wrapper>
		</Wrapper>
	);
};
