const SITE_NAME = "Robert Schmahl";
const DEFAULT_TITLE = `${SITE_NAME} · Full Stack Engineer`;

export interface PageMetaProps {
	/** Page name, e.g. "About". Omit on the home page for the default title. */
	title?: string;
	/** Optional per-page description (used for <meta> + Open Graph). */
	description?: string;
}

/**
 * Sets the document title (and optional description/OG) per route. React 19
 * hoists these tags into <head> natively, so no react-helmet dependency is
 * needed.
 */
export const PageMeta = ({ title, description }: PageMetaProps) => {
	const fullTitle = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE;
	return (
		<>
			<title>{fullTitle}</title>
			{description && (
				<>
					<meta name="description" content={description} />
					<meta property="og:title" content={fullTitle} />
					<meta property="og:description" content={description} />
				</>
			)}
		</>
	);
};
