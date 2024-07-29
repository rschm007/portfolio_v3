import React from "react";
import { PropsWithChildrenRequired } from "@types";
import { useLocation } from "react-router";
import { Wrapper } from "./Wrapper";

export const PageWrapper = ({
	className = "",
	children,
}: PropsWithChildrenRequired) => {
	const { pathname } = useLocation();
	const splitLocation = pathname.split("/");

	return (
		<Wrapper className={`container ${className}`} id={splitLocation[1]}>
			{children}
		</Wrapper>
	);
};
