import { motion } from "framer-motion";
import { CardProps } from "@types";

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
			initial={{ opacity: initialOpacity, y: initialY }}
			animate={{ opacity: animateOpacity, y: animateY }}
			exit={{ opacity: exitOpacity, y: exitY }}
			transition={transition}>
			<div className="about_card__inner">
				<div className="about_card__face about_card__front">
					<i className={icon} />
					<h3 className="icon_title">{header}</h3>
				</div>
				<div className="about_card__face about_card__back">
					{children}
				</div>
			</div>
		</motion.article>
	);
};
