import React from "react";
import { motion } from "framer-motion";
import { PropsWithChildrenRequired } from "@types";

export interface WrapperProps extends PropsWithChildrenRequired {
	exitOpacity?: number;
}

export const Wrapper = ({
	className = "",
	id,
	exitOpacity = 0,
	children,
}: WrapperProps) => {
	return (
		<motion.section
			id={id}
			className={`wrapper ${className}`}
			exit={{ opacity: exitOpacity }}>
			{children}
		</motion.section>
	);
};
