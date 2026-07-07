import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ButtonProps } from "@types";

// framer-motion wrapper around react-router's NavLink (for the entrance animation)
const MotionNavLink = motion.create(NavLink);

export interface LinkButtonProps extends ButtonProps {
	relativeLink?: boolean;
}

export const LinkButton = ({
	className = "",
	id,
	href = "#",
	iconClassName = "",
	content,
	children,
	initialOpacity = 0,
	animateOpacity = 1,
	exitOpacity = 0,
	initialY = -50,
	animateY = 0,
	exitY = -50,
	relativeLink = true,
}: LinkButtonProps) => {
	const motionProps = {
		className: `link_button ${className}`,
		initial: { opacity: initialOpacity, y: initialY },
		animate: { opacity: animateOpacity, y: animateY },
		exit: { opacity: exitOpacity, y: exitY },
	};

	const inner = (
		<>
			{iconClassName && <i className={iconClassName} />}
			<span className="btn_label">{content}</span>
			{children}
		</>
	);

	// A LinkButton is always a link — render the anchor as the root element
	// rather than a <button> wrapping an <a> (which is invalid HTML).
	return relativeLink ? (
		<MotionNavLink id={id} to={href} end={href === "/"} {...motionProps}>
			{inner}
		</MotionNavLink>
	) : (
		<motion.a
			id={id}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			{...motionProps}>
			{inner}
		</motion.a>
	);
};
