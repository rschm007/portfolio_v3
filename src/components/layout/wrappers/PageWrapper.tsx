import React from "react";
import { PropsWithChildrenRequired } from "@types";
import { useLocation } from "react-router";
import { Wrapper } from "./Wrapper";
import { useTheme } from "hooks";

export const PageWrapper = ({
	className = "",
	children,
}: PropsWithChildrenRequired) => {
	const { pathname } = useLocation();
	const splitLocation = pathname.split("/");
	const { darkMode } = useTheme();
	const theme = darkMode ? "dark" : "light";

	return (
		<Wrapper
			className={`container background flex_col ${theme} ${className}`}
			id={splitLocation[1]}
		>
			{children}
		</Wrapper>
	);
};
