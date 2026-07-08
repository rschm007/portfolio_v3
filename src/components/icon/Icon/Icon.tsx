import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
	faPaperPlane,
	faQuoteLeft,
	faFileArrowDown,
	faCode,
	faRobot,
	faServer,
	faPenRuler,
	faMusic,
	faLayerGroup,
	faCartShopping,
	faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// We bundle the FA core stylesheet ourselves (import above), so tell FA not to
// inject its CSS at runtime — that avoids a flash of oversized icons on load.
config.autoAddCss = false;

// Legacy Font Awesome class name -> tree-shaken icon definition. Only the icons
// actually used in the app are imported, so the bundle carries ~15 icons rather
// than the entire library (previously pulled from the kit.fontawesome.com CDN).
const ICONS: Record<string, IconDefinition> = {
	"paper-plane": faPaperPlane,
	"quote-left": faQuoteLeft,
	"file-arrow-down": faFileArrowDown,
	code: faCode,
	robot: faRobot,
	server: faServer,
	"pen-ruler": faPenRuler,
	music: faMusic,
	"layer-group": faLayerGroup,
	"cart-shopping": faCartShopping,
	// old alias fa-external-link-alt maps to the FA6 canonical icon
	"external-link-alt": faUpRightFromSquare,
	github: faGithub,
	"linkedin-in": faLinkedinIn,
};

// FA style tokens that sit alongside the icon-name token in a class string,
// e.g. "fa-solid fa-github" or "fab fa-github".
const STYLE_TOKENS = new Set([
	"fa-solid",
	"fas",
	"fa-regular",
	"far",
	"fa-brands",
	"fab",
	"fa-light",
	"fal",
]);

export interface IconProps {
	// Font Awesome class string, e.g. "fa-solid fa-github". Any extra classes
	// (e.g. "testimonial__mark") are preserved and forwarded to the <svg>.
	className?: string;
}

export const Icon = ({ className = "" }: IconProps) => {
	let iconKey = "";
	const passthrough: string[] = [];

	for (const token of className.split(/\s+/).filter(Boolean)) {
		if (STYLE_TOKENS.has(token)) continue;
		if (token.startsWith("fa-")) {
			iconKey = token.slice(3);
			continue;
		}
		passthrough.push(token); // utility classes like testimonial__mark
	}

	const definition = ICONS[iconKey];
	if (!definition) return null;

	return (
		<FontAwesomeIcon
			icon={definition}
			className={passthrough.join(" ") || undefined}
			aria-hidden
		/>
	);
};
