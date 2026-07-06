import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ButtonProps } from "@types";

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
	const commonProps = {
		className: `link_button ${className}`,
		initial: { opacity: initialOpacity, y: initialY },
		animate: { opacity: animateOpacity, y: animateY },
		exit: { opacity: exitOpacity, y: exitY },
	};

	return (
		<motion.button id={id} {...commonProps}>
			{relativeLink && (
				<Link to={href}>
					{iconClassName && <i className={iconClassName} />}

					<span className="btn_label">{content}</span>
				</Link>
			)}

			{!relativeLink && (
				<>
					{iconClassName && <i className={iconClassName} />}

					<a href={href} target="_blank" rel="noopener noreferrer">
						<span className="btn_label">{content}</span>
					</a>
				</>
			)}

			{children}
		</motion.button>
	);
};
