import { Link } from "react-router-dom";
import { Wrapper, Header, Subtitle, ContentCard, PageMeta } from "components";

const offerings = [
	{
		icon: "fa-solid fa-layer-group",
		title: "Full-stack web apps",
		description:
			"React and Next.js apps from MVP to production, with the APIs, auth, and data layer to back them up.",
	},
	{
		icon: "fa-solid fa-robot",
		title: "AI-powered features",
		description:
			"LLM integrations, conversational UIs, and AI workflows that do real work, not just demo well.",
	},
	{
		icon: "fa-solid fa-cart-shopping",
		title: "E-commerce & content sites",
		description:
			"Shopify storefronts and custom WordPress builds your team can manage without a developer.",
	},
	{
		icon: "fa-solid fa-pen-ruler",
		title: "A designer's eye",
		description:
			"A design-first background on every build: interfaces that feel considered, not bolted on.",
	},
];

const process = [
	{
		step: 1,
		title: "Scope",
		description:
			"We talk through goals, must-haves, and timeline, and I come back with a clear plan and estimate.",
	},
	{
		step: 2,
		title: "Build",
		description:
			"I work in regular check-ins, so you see progress and can steer as we go. No black boxes.",
	},
	{
		step: 3,
		title: "Launch",
		description:
			"I ship it, hand off cleanly, and make sure you can run it without me.",
	},
	{
		step: 4,
		title: "Maintenance",
		description:
			"Launched isn't finished. I stick around for ongoing updates, fixes, and new features so your site keeps pace as you grow.",
	},
];

export const Services = () => {
	return (
		<Wrapper id="services">
			<PageMeta title="Services" />
			<Header
				tag="h1"
				content="Services"
				className="header_services__hero">
				<Subtitle
					tag="p"
					content="I take on select freelance projects alongside my full-time work. Here's what I can build, and how we'd work together."
					className="about"
				/>
			</Header>

			<section className="services_section">
				<h2 className="services_section__title">What I can build</h2>
				<div className="services_grid">
					{offerings.map((offering) => (
						<ContentCard
							key={offering.title}
							icon={offering.icon}
							header={offering.title}
							description={offering.description}
						/>
					))}
				</div>
			</section>

			<section className="services_section">
				<h2 className="services_section__title">How I work</h2>
				<ol className="process">
					{process.map((item) => (
						<li className="process_step" key={item.title}>
							<span className="process_step__num">{item.step}</span>
							<div>
								<h3 className="process_step__title">
									{item.title}
								</h3>
								<p className="process_step__desc">
									{item.description}
								</p>
							</div>
						</li>
					))}
				</ol>
			</section>

			<section className="services_section services_cta">
				<p className="services_cta__text">
					{"Have a project in mind? "}
					<Link to="/contact">{"Let's talk."}</Link>
				</p>
			</section>
		</Wrapper>
	);
};
