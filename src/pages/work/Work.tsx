import {
	Wrapper,
	Header,
	Subtitle,
	ContentCard,
	LinkButton,
	PageMeta,
} from "../../components";
import OmniWorldsLogo from "../../assets/omniworlds-logo.svg";
import CashCommandsImg from "../../assets/cashcommands.jpg";
import ForbesAndersenImg from "../../assets/forbesandersen.png";
import ExpressImg from "../../assets/expressinfo.png";
import TecLogo from "../../assets/tec_logo.svg";
import JemLDLogo from "../../assets/JQlogo-color.jpg";
import SoundandStageLogo from "../../assets/soundandstage.png";

export const Work = () => {
	return (
		<Wrapper id="work">
			<PageMeta title="Work" />
			<Header tag="h1" content="Work" className="header_work__hero">
				<Subtitle
					tag="p"
					content="What I've built, on the clock and after hours."
					className="work"
				/>
			</Header>

			<section className="work_section">
				<h2 className="work_section__title">Experience</h2>
				<div className="experience">
					<article className="experience_item">
						<div className="experience_item__head">
							<a
								className="experience_item__company"
								href="https://www.seekinsights.com/"
								target="_blank"
								rel="noopener noreferrer">
								Seek Insights
							</a>
							<span className="experience_item__role">
								Senior Software Engineer, Applied AI
							</span>
							<span className="experience_item__dates">
								2026 – Present
							</span>
						</div>
						<p className="experience_item__summary">
							{"I build the AI-powered experiences behind Insight Cloud, Seek's decision-making platform used by teams at Gopuff, Coca-Cola, and Pepsi. Across React and Python, I ship conversational analytics agents, LLM reasoning over a Snowflake data foundation, and the app-store flows that let analysts subscribe once and ask anything."}
						</p>
					</article>

					<article className="experience_item">
						<div className="experience_item__head">
							<span className="experience_item__company">
								Panasonic Avionics
							</span>
							<span className="experience_item__role">MTS III</span>
							<span className="experience_item__dates">
								2023 – 2026
							</span>
						</div>
						<p className="experience_item__summary">
							{"Led the migration of our internal delivery platform to Next.js and built shared tooling adopted across 5+ teams, doubling release velocity and taking automated test coverage from 0 to 86%. That work shipped features for "}
							<a
								href="https://www.panasonic.aero/converix"
								target="_blank"
								rel="noopener noreferrer">
								Converix
							</a>
							{", Panasonic's cloud-based onboard computing platform now flying on Saudia's 787 fleet, and "}
							<a
								href="https://www.panasonic.aero/our-offerings/digital-solutions/tools-utilities"
								target="_blank"
								rel="noopener noreferrer">
								App Manager
							</a>
							{", fleet-wide app deployment for airline IFE systems."}
						</p>
					</article>

					<article className="experience_item">
						<div className="experience_item__head">
							<span className="experience_item__company">
								Essentium
							</span>
							<span className="experience_item__role">
								Software Engineer
							</span>
							<span className="experience_item__dates">
								2021 – 2023
							</span>
						</div>
						<p className="experience_item__summary">
							{"Front-end lead for real-time 3D-printing SaaS at Essentium, a high-speed FDM pioneer "}
							<a
								href="https://develop3d.com/3d-printing/essentium-acquired-by-nexa3d-for-high-speed-fdm/"
								target="_blank"
								rel="noopener noreferrer">
								acquired by Nexa3D
							</a>
							{". Built React + Three.js CAD visualization for monitoring and optimizing prints, lifting print-success rates 27%."}
						</p>
					</article>
				</div>
			</section>

			<section className="work_section work_section--wide">
				<h2 className="work_section__title">Freelance &amp; projects</h2>
				<div className="cards_grid">
					<ContentCard
						className="featured"
						header="OmniWorlds"
						description="A universal tabletop RPG system and companion web app. One framework flexible enough to run any genre, from space opera to high fantasy, with character building, custom Powers, and combat in the browser."
						img
						imgSrc={OmniWorldsLogo}
						imgAlt="OmniWorlds logo"
						imgClass="project_logo">
						<span className="coming_soon">Coming Soon!</span>
					</ContentCard>

					<ContentCard
						header="The Event Community"
						description="A full-stack marketplace where event planners find vendors and venues, read reviews, and book services. Built end-to-end in Remix, from data model to server routes to UI."
						img
						imgSrc={TecLogo}
						imgAlt="The Event Community logo"
						imgClass="project_logo">
						<div className="flex_row card_buttons">
							<LinkButton
								relativeLink={false}
								href="https://theeventcommunity.com/"
								iconClassName="fas fa-external-link-alt"
								content="Visit site"
								className="card_button app"
							/>
						</div>
					</ContentCard>

					<ContentCard
						header="JemLD"
						description="A portfolio and inquiry site for lighting designer Jacqueline Malenke, built on Next.js with a Firebase backend so she can manage her own galleries and leads."
						img
						imgSrc={JemLDLogo}
						imgAlt="JemLD logo"
						imgClass="project_logo">
						<div className="flex_row card_buttons">
							<LinkButton
								relativeLink={false}
								href="https://jemld.com/"
								iconClassName="fas fa-external-link-alt"
								content="Visit site"
								className="card_button site"
							/>
							<LinkButton
								relativeLink={false}
								href="https://github.com/rschm007/jemld"
								iconClassName="fa-brands fa-github"
								content="Github"
								className="card_button app"
							/>
						</div>
					</ContentCard>
				</div>
			</section>

			<section className="work_section work_section--wide">
				<h2 className="work_section__title">Client sites</h2>
				<div className="cards_grid">
					<ContentCard
						header="SoundandStage"
						description="A hand-built custom WordPress theme for sound designer Vincent Olivieri, structured so a non-technical client can manage every page himself."
						img
						imgSrc={SoundandStageLogo}
						imgAlt="SoundandStage logo"
						imgClass="project_logo">
						<div className="flex_row card_buttons">
							<LinkButton
								relativeLink={false}
								href="https://www.soundandstage.net/"
								iconClassName="fas fa-external-link-alt"
								content="Visit site"
								className="card_button site"
							/>
							<LinkButton
								relativeLink={false}
								href="https://github.com/rschm007/soundandstage"
								iconClassName="fa-brands fa-github"
								content="Github"
								className="card_button app"
							/>
						</div>
					</ContentCard>

					<ContentCard
						header="Southwest Dog Training"
						description="A Shopify storefront and custom theme for a Canadian dog-training business selling training programs and gear online."
						img
						imgSrc={CashCommandsImg}
						imgAlt="Southwest Dog Training logo"
						imgClass="project_logo">
						<div className="flex_row card_buttons">
							<LinkButton
								relativeLink={false}
								href="https://www.southwestdogtraining.ca/"
								iconClassName="fas fa-external-link-alt"
								content="Visit site"
								className="card_button site"
							/>
							<LinkButton
								relativeLink={false}
								href="https://github.com/rschm007/CashCommandsDogTraining"
								iconClassName="fa-brands fa-github"
								content="Github"
								className="card_button app"
							/>
						</div>
					</ContentCard>

					<ContentCard
						header="Forbes Andersen"
						description="A polished WordPress marketing site for a financial-services firm: clean, credible, and easy for the team to keep current."
						img
						imgSrc={ForbesAndersenImg}
						imgAlt="Forbes Andersen logo"
						imgClass="project_logo">
						<div className="flex_row card_buttons">
							<LinkButton
								relativeLink={false}
								href="https://www.faisi.ca/"
								iconClassName="fas fa-external-link-alt"
								content="Visit site"
								className="card_button site"
							/>
						</div>
					</ContentCard>

					<ContentCard
						header="Express Info Systems"
						description="A content-driven marketing site for an IT-services company, built for easy updates by a non-technical team."
						img
						imgSrc={ExpressImg}
						imgAlt="Express Information Systems logo"
						imgClass="project_logo">
						<div className="flex_row card_buttons">
							<LinkButton
								relativeLink={false}
								href="https://www.expressinfo.com/"
								iconClassName="fas fa-external-link-alt"
								content="Visit site"
								className="card_button site"
							/>
						</div>
					</ContentCard>

					<ContentCard
						header="CMS Music Studio"
						description="A warm, welcoming WordPress site for a private voice and piano studio serving students of all ages, built so the studio can keep lessons and details current without touching code."
						icon="fa-solid fa-music">
						<div className="flex_row card_buttons">
							<LinkButton
								relativeLink={false}
								href="https://www.cmsmusicstudio.com/"
								iconClassName="fas fa-external-link-alt"
								content="Visit site"
								className="card_button site"
							/>
						</div>
					</ContentCard>
				</div>
			</section>
		</Wrapper>
	);
};
