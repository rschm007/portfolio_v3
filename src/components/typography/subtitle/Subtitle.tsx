import { DefaultComponentProps } from "@types";
import React from "react";

export interface SubtitleProps extends DefaultComponentProps {
	tag: keyof React.JSX.IntrinsicElements;
	content: string;
}

export const Subtitle = ({
	className = "",
	id,
	tag = "h2",
	content = "",
}: SubtitleProps) => {
	const Tag = tag;

	return (
		<div className={`subtitle ${className}`} id={id}>
			<Tag>{content}</Tag>
		</div>
	);
};
