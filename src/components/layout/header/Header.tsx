import React from "react";
import { motion } from "framer-motion";
import { PropsWithChildrenRequired } from "@types";

export interface HeaderProps extends PropsWithChildrenRequired {
	content: string;
	tag: keyof React.JSX.IntrinsicElements;
}

export const Header = ({
	className = "",
	content = "",
	tag = "h1",
	children,
}: HeaderProps) => {
	const Tag = tag;

	return (
		// A plain div, not a <header>: this component is always used as an
		// in-page hero block nested inside <main>, never as the page's actual
		// masthead, and <header> here would expose a "banner" landmark nested
		// inside the "main" landmark — confusing landmark navigation for
		// screen-reader users.
		<motion.div
			className={className}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}>
			<Tag>{content}</Tag>

			{children}
		</motion.div>
	);
};
