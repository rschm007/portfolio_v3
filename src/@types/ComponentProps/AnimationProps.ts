export interface Transition {
	delay: number;
}

export interface AnimationProps {
	transition?: Transition;
	initialOpacity?: number;
	animateOpacity?: number;
	exitOpacity?: number;
	initialY?: number;
	animateY?: number;
	exitY?: number;
}
