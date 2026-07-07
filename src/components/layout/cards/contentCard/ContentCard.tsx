import { CardProps } from "@types";
import { motion } from "framer-motion";

export interface ContentCardProps extends CardProps {
	img?: boolean;
	imgSrc?: string;
	imgAlt?: string;
	imgClass?: string;
	description?: string;
}

export const ContentCard = ({
	className = "",
	id,
	imgSrc = "",
	imgAlt = "",
	imgClass = "",
	icon = "",
	header = "",
	description = "",
	initialOpacity = 0,
	animateOpacity = 1,
	exitOpacity = 0,
	initialY = -50,
	animateY = 0,
	exitY = -50,
	children,
}: ContentCardProps) => {
	return (
		<motion.article
			className={`card ${className}`}
			id={id}
			initial={{ opacity: initialOpacity, y: initialY }}
			animate={{ opacity: animateOpacity, y: animateY }}
			exit={{ opacity: exitOpacity, y: exitY }}>
			{(imgSrc || icon) && (
				<div className="card__logo">
					{imgSrc ? (
						<img src={imgSrc} alt={imgAlt} className={imgClass} />
					) : (
						<i className={icon} aria-hidden="true" />
					)}
				</div>
			)}

			<h3>{header}</h3>
			<p>{description}</p>

			{children}
		</motion.article>
	);
};
