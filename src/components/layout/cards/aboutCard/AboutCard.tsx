import { motion } from "framer-motion";
import { CardProps } from "@types";
import { Icon } from "../../../icon";

export const AboutCard = ({
	className = "",
	id,
	icon = "",
	header = "",
	transition = { delay: 0 },
	initialOpacity = 0,
	animateOpacity = 1,
	exitOpacity = 0,
	initialY = -50,
	animateY = 0,
	exitY = -50,
	children,
}: CardProps) => {
	return (
		<motion.article
			className={`about_card ${className}`}
			id={id}
			// focusable so keyboard users can flip the card to read the skill
			// list (the flip is otherwise hover-only)
			tabIndex={0}
			initial={{ opacity: initialOpacity, y: initialY }}
			animate={{ opacity: animateOpacity, y: animateY }}
			exit={{ opacity: exitOpacity, y: exitY }}
			transition={transition}>
			<div className="about_card__inner">
				<div className="about_card__face about_card__front">
					<Icon className={icon} />
					<h3 className="icon_title">{header}</h3>
				</div>
				<div className="about_card__face about_card__back">
					{children}
				</div>
			</div>
		</motion.article>
	);
};
