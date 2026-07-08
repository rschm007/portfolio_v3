import type { ReactNode } from "react";
import { CardProps } from "@types";
import { motion } from "framer-motion";
import { Icon } from "../../../icon";

// children is optional here (cards may have buttons, a badge, or nothing)
export interface ContentCardProps extends Omit<CardProps, "children"> {
	img?: boolean;
	imgSrc?: string;
	imgAlt?: string;
	imgClass?: string;
	description?: string;
	children?: ReactNode;
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
						<img
							src={imgSrc}
							alt={imgAlt}
							className={imgClass}
							loading="lazy"
							decoding="async"
						/>
					) : (
						<Icon className={icon} />
					)}
				</div>
			)}

			<h3>{header}</h3>
			<p>{description}</p>

			{children}
		</motion.article>
	);
};
