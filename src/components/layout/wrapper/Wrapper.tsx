import { motion } from "framer-motion";
import { PropsWithChildrenRequired } from "@types";

export interface WrapperProps extends PropsWithChildrenRequired {
	exitOpacity?: number;
	// each routed page passes as="main" so its content lands in the <main>
	// landmark; the campfire/trees/moon stay siblings (CSS depends on `#id ~ …`)
	as?: "section" | "main";
}

export const Wrapper = ({
	className = "",
	id,
	exitOpacity = 0,
	as = "section",
	children,
}: WrapperProps) => {
	const Motion = as === "main" ? motion.main : motion.section;
	return (
		<Motion
			id={id}
			className={`wrapper ${className}`}
			exit={{ opacity: exitOpacity }}>
			{children}
		</Motion>
	);
};
