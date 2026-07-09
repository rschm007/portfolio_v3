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
	// tech-stack labels shown as pills at the bottom of the card
	tags?: string[];
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
	tags,
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

			{tags && tags.length > 0 && (
				<ul className="tech_tags" aria-label="Tech stack">
					{tags.map((tag) => (
						<li className="tech_tag" key={tag}>
							{tag}
						</li>
					))}
				</ul>
			)}

			{children}
		</motion.article>
	);
};
