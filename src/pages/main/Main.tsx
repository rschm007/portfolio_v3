import { Link } from "react-router-dom";
import { Wrapper, Header, Subtitle, LinkButton, Icon, PageMeta } from "components";

export const Main = () => {
	return (
		<Wrapper id="main" as="main">
			<PageMeta />
			<Header tag="h1" content="Hi! I'm Robert." className="header_main__hero">
				<Subtitle
					tag="p"
					content="Senior Full-Stack & Applied AI Engineer. Building warm, human‑centered systems in a cold, automated world."
					className="about"
				/>

				<Link to="/work" className="case_study_link header_main__cta">
					<Icon className="fa-solid fa-book-open" />
					<span className="btn_label">See my work</span>
				</Link>

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
		</Wrapper>
	);
};
