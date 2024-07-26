import React from "react";
import { motion } from "framer-motion";
import { ButtonProps } from "@types";

export const DownloadButton = ({
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
}: ButtonProps) => {
	const downloadFile = () => {
		window.open(href, "_blank");
	};

	return (
		<motion.button
			className={`download_button ${className}`}
			id={id}
			initial={{ opacity: initialOpacity, y: initialY }}
			animate={{ opacity: animateOpacity, y: animateY }}
			exit={{ opacity: exitOpacity, y: exitY }}
			onClick={downloadFile}
		>
			{iconClassName && <i className={iconClassName} />}

			{content}

			{children}
		</motion.button>
	);
};
