import React from "react";
import { motion } from "framer-motion";
import { PropsWithChildrenRequired } from "@types";

export const MainContentWrapper = ({
	className = "",
	id,
	children,
}: PropsWithChildrenRequired) => {
	return (
		<motion.main id={id} className={`content ${className}`}>
			{children}
		</motion.main>
	);
};
