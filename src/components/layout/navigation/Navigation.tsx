import { LinkButton, Wrapper } from "components";
import React, { useState } from "react";

export const Navigation = () => {
	const [open, setOpen] = useState(true);

	return (
		<nav>
			<Wrapper className={`navigation ${open ? "open" : "closed"}`}>
				<div
					className={`nav_button ${open ? "open" : "closed"}`}
					onClick={() => setOpen(!open)}>
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</div>
				<div className="nav_menu">
					<LinkButton className="nav_link" href="/home" content="home" />
					<LinkButton className="nav_link" href="/about" content="about" />
					<LinkButton className="nav_link" href="/work" content="work" />
					<LinkButton className="nav_link" href="/contact" content="contact" />
				</div>
			</Wrapper>
		</nav>
	);
};
