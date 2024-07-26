import { AnimationProps } from "./AnimationProps";
import { PropsWithChildrenRequired } from "./DefaultComponentProps";

export interface CardProps extends PropsWithChildrenRequired, AnimationProps {
	href?: string;
	icon?: string;
	header?: string;
}
