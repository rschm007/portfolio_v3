import { Link, Navigate, useParams } from "react-router-dom";
import { Wrapper, PageMeta } from "components";
import { caseStudies } from "./caseStudies";

export const CaseStudy = () => {
	const { slug } = useParams();
	const study = slug ? caseStudies[slug] : undefined;

	// unknown slug -> send back to the Work index rather than a blank page
	if (!study) {
		return <Navigate to="/work" replace />;
	}

	return (
		<Wrapper id="case-study" as="main">
			<PageMeta title={study.title} description={study.tagline} />

			<article className="case_study">
				<Link to="/work" className="case_study__back">
					{"← Back to work"}
				</Link>

				<header className="case_study__hero">
					<h1 className="case_study__title">{study.title}</h1>
					<p className="case_study__tagline">{study.tagline}</p>

					{(study.role || study.timeframe) && (
						<p className="case_study__meta">
							{[study.role, study.timeframe]
								.filter(Boolean)
								.join(" · ")}
						</p>
					)}

					<ul className="tech_tags" aria-label="Tech stack">
						{study.tags.map((tag) => (
							<li className="tech_tag" key={tag}>
								{tag}
							</li>
						))}
					</ul>

					{(study.liveUrl || study.repoUrl) && (
						<div className="case_study__links">
							{study.liveUrl && (
								<a
									href={study.liveUrl}
									target="_blank"
									rel="noopener noreferrer">
									Visit site
								</a>
							)}
							{study.repoUrl && (
								<a
									href={study.repoUrl}
									target="_blank"
									rel="noopener noreferrer">
									GitHub
								</a>
							)}
						</div>
					)}
				</header>

				{study.metrics && study.metrics.length > 0 && (
					<ul className="case_study__metrics" aria-label="Key results">
						{study.metrics.map((metric) => (
							<li key={metric.label}>
								<span className="case_study__metric-value">
									{metric.value}
								</span>
								<span className="case_study__metric-label">
									{metric.label}
								</span>
							</li>
						))}
					</ul>
				)}

				<section className="case_study__section">
					<h2>Overview</h2>
					<p>{study.overview}</p>
				</section>

				<section className="case_study__section">
					<h2>The problem</h2>
					<p>{study.problem}</p>
				</section>

				<section className="case_study__section">
					<h2>Approach</h2>
					<ul className="case_study__list">
						{study.approach.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>

				<section className="case_study__section">
					<h2>Key decisions</h2>
					<dl className="case_study__decisions">
						{study.decisions.map((decision) => (
							<div key={decision.q}>
								<dt>{decision.q}</dt>
								<dd>{decision.a}</dd>
							</div>
						))}
					</dl>
				</section>

				<section className="case_study__section">
					<h2>Outcome</h2>
					<p>{study.outcome}</p>
				</section>
			</article>
		</Wrapper>
	);
};
