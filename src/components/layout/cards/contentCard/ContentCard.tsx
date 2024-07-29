import { CardProps } from "@types";
import { Wrapper } from "components";
import { motion } from "framer-motion";
import React from "react";

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
	img = false,
	imgSrc = "",
	imgAlt = "",
	imgClass = "",
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
			exit={{ opacity: exitOpacity, y: exitY }}
		>
			{img && imgSrc && imgAlt && imgClass ? (
				<Wrapper className="flex_row card_content">
					<Wrapper className="flex_column card_img">
						<img src={imgSrc} alt={imgAlt} className={imgClass} />
					</Wrapper>
					<Wrapper className="flex_column">
						<h3>{header}</h3>
						<p>{description}</p>

						<>{children}</>
					</Wrapper>
				</Wrapper>
			) : (
				<Wrapper className="flex_column">
					<h3>{header}</h3>
					<p>{description}</p>

					<>{children}</>
				</Wrapper>
			)}
		</motion.article>
	);
};
