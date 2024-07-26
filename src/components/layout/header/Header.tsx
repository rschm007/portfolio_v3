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
		<motion.header
			className={className}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}>
			<Tag>{content}</Tag>

			{children}
		</motion.header>
	);
};
