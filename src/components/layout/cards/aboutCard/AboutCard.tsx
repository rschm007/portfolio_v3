import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardProps } from "@types";
import { Wrapper } from "components";

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
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<motion.article
			className={
				hovered ? `open about_card ${className}` : `about_card ${className}`
			}
			id={id}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			initial={{ opacity: initialOpacity, y: initialY }}
			animate={{ opacity: animateOpacity, y: animateY }}
			exit={{ opacity: exitOpacity, y: exitY }}
			transition={transition}>
			<Wrapper className="about_card__icon">
				<i className={icon} />
				<h3 className="icon_title">{header}</h3>
			</Wrapper>
			<Wrapper className="about_card__container">
				<Wrapper className="about_card__content">{children}</Wrapper>
			</Wrapper>
		</motion.article>
	);
};
