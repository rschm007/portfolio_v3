import { motion } from "framer-motion";
import { ButtonProps } from "@types";
import { Icon } from "../../../icon";

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
			{iconClassName && <Icon className={iconClassName} />}

			<span className="btn_label">{content}</span>

			{children}
		</motion.button>
	);
};
