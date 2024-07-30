import { DefaultComponentProps } from "@types";
import React from "react";

export interface SubmitButtonProps extends DefaultComponentProps {
	value?: string;
	iconClassName?: string;
}

export const SubmitButton = ({
	className = "",
	id,
	value = "Send",
	iconClassName = "fa-solid fa-envelope",
}: SubmitButtonProps) => {
	return (
		<button className={`button submit_button ${className}`} id={id}>
			<input type="submit" value={value} />
			<i className={iconClassName} />
		</button>
	);
};
