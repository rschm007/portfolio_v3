import { Link } from "react-router-dom";
import {
	Wrapper,
	Header,
	Subtitle,
	ContentCard,
	PageMeta,
	Icon,
} from "components";

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

const testimonials = [
	{
		quote: "He doesn't just write code that works. He builds scalable, maintainable solutions with long-term impact in mind, and consistently delivers high-quality work. Any team would be extremely fortunate to have him.",
		author: "Claire Nguyen",
		role: "Technical Writer, Panasonic Avionics",
	},
	{
		quote: "Robert is highly motivated, inquisitive, and resourceful. He brings thoughtful analysis to every project and delivers on time, on budget, and often with multiple inventive options. Punctual, dependable, and professional.",
		author: "Bil Schroeder",
		role: "Director of Marketing & Communications, South Coast Repertory",
	},
	{
		quote: "Robert is extremely knowledgeable as a full-stack developer and a dedicated worker. He grasps concepts quickly, always goes beyond what he learns, and works great with others. An exceptional addition to any team.",
		author: "Steve Tong",
		role: "Software Engineer",
	},
	{
		quote: "Robert is so great to work with. He’s very professional, listens to what I ask for, gives feedback on what may or may not work, and delivers the product in a very timely manner.",
		author: "Jacqueline Malenke",
		role: "Award-winning Lighting Designer, JemLD"
	}
];

export const Services = () => {
	return (
		<Wrapper id="services" as="main">
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

			<section className="services_section">
				<h2 className="services_section__title">Kind words</h2>
				<div className="testimonials">
					{testimonials.map((item) => (
						<blockquote className="testimonial" key={item.author}>
							<Icon className="fa-solid fa-quote-left testimonial__mark" />
							<p className="testimonial__quote">{item.quote}</p>
							<footer className="testimonial__author">
								{item.author}
								<span className="testimonial__role">
									{item.role}
								</span>
							</footer>
						</blockquote>
					))}
				</div>
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
