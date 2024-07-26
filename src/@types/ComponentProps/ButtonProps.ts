import { AnimationProps } from "./AnimationProps";
import { PropsWithChildren } from "./DefaultComponentProps";

export interface ButtonProps extends PropsWithChildren, AnimationProps {
	href: string;
	iconClassName?: string;
	content?: string;
}
