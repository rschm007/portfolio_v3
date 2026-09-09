import { LinkButton, Wrapper } from "components";
import React, { useEffect, useRef, useState } from "react";

export const Navigation = () => {
	const [open, setOpen] = useState(false);
	const toggleRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (open) {
			menuRef.current?.querySelector<HTMLElement>("a")?.focus();
		}
	}, [open]);

	const closeAndReturnFocus = () => {
		setOpen(false);
		toggleRef.current?.focus();
	};

	const handleMenuKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Escape") {
			closeAndReturnFocus();
		}
	};

	return (
		<nav>
			<Wrapper className={`navigation ${open ? "open" : "closed"}`}>
				<button
					ref={toggleRef}
					type="button"
					className={`nav_button ${open ? "open" : "closed"}`}
					onClick={() => setOpen(!open)}
					aria-expanded={open}
					aria-controls="nav_menu"
					aria-label={open ? "Close navigation menu" : "Open navigation menu"}
				>
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</button>
				<div
					className="nav_menu"
					id="nav_menu"
					ref={menuRef}
					onKeyDown={handleMenuKeyDown}
				>
					<LinkButton className="nav_link" href="/" content="home" />
					<LinkButton
						className="nav_link"
						href="/about"
						content="about"
					/>
					<LinkButton
						className="nav_link"
						href="/work"
						content="work"
					/>
					<LinkButton
						className="nav_link"
						href="/services"
						content="services"
					/>
					<LinkButton
						className="nav_link"
						href="/contact"
						content="contact"
					/>
				</div>
			</Wrapper>
		</nav>
	);
};
