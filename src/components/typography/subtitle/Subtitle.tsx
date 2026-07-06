import { DefaultComponentProps } from "@types";
import React from "react";

export interface SubtitleProps extends DefaultComponentProps {
	tag: keyof React.JSX.IntrinsicElements;
	/** Plain-text content. Omit and pass `children` when you need inline markup (e.g. links). */
	content?: string;
	children?: React.ReactNode;
}

export const Subtitle = ({
	className = "",
	id,
	tag = "h2",
	content = "",
	children,
}: SubtitleProps) => {
	const Tag = tag;

	return (
		<div className={`subtitle ${className}`} id={id}>
			<Tag>{children ?? content}</Tag>
		</div>
	);
};
