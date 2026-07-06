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
					{"I'm Robert Schmahl — a Senior Full-Stack & Applied AI Engineer in sunny California, and a professional AI skeptic who (ironically) builds AI-powered systems for a living. At "}
					<a
						href="https://www.seekinsights.com/"
						target="_blank"
						rel="noopener noreferrer">
						Seek Insights
					</a>
					{", I turn large language models into data experiences people actually trust: production-grade workflows, minus the hand-waving."}
				</Subtitle>
				<Subtitle
					tag="p"
					content="I'm full-stack; React and TypeScript up top, Python and APIs underneath. I wire AI models into products that hold up in front of real users, with the testing, CI/CD, and observability that make that possible. In other words, I turn the phrase “it worked in dev” into “it works in production.”"
					className="about"
				/>
				<Subtitle
					tag="p"
					content="I took the scenic route into engineering: graphic design and communications first, code second. All those years fussing over kerning left me with an unreasonable eye for detail and a sixth sense for when a UI is quietly on fire."
					className="about"
				/>
				<Subtitle
					tag="p"
					content="Off the clock, you'll find me with my dog, hunting down good food with my wife, or in front of an actual campfire — the one kind of stack I don't have to debug."
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
					{"Outside the day job, I take on select freelance projects through Robert Schmahl Design — React and Next.js apps, full-stack MVPs, e-commerce, blogs, and AI features that do more than look good in a demo. "}
				</Subtitle>
				<Subtitle tag="p" className="services_text">
					{"My "}
					<Link to="/work">Work page</Link>
					{" has the receipts. Got something in mind? "}
					<Link to="/contact">Let's talk.</Link>
				</Subtitle>
			</Wrapper>
		</Wrapper>
	);
};
