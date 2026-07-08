import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "../../../icon";

/**
 * Persistent "Let's talk" floating action button. Renders on every page
 * except Contact (where it would be redundant).
 */
export const ContactFab = () => {
	const { pathname } = useLocation();
	const onContact = pathname === "/contact";

	return (
		<AnimatePresence>
			{!onContact && (
				<motion.aside
					className="contact_fab"
					aria-label="Contact shortcut"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 24 }}
					transition={{ duration: 0.25 }}>
					<Link to="/contact" aria-label="Get in touch with Robert">
						<Icon className="fa-solid fa-paper-plane" />
						<span>{"Let's talk"}</span>
					</Link>
				</motion.aside>
			)}
		</AnimatePresence>
	);
};
