const SITE_NAME = "Robert Schmahl";
const DEFAULT_TITLE = `${SITE_NAME} — Full Stack Engineer`;

export interface PageMetaProps {
	/** Page name, e.g. "About". Omit on the home page for the default title. */
	title?: string;
}

/**
 * Sets the document title per route. React 19 hoists this `<title>` into
 * <head> natively, so no react-helmet dependency is needed.
 */
export const PageMeta = ({ title }: PageMetaProps) => (
	<title>{title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE}</title>
);
