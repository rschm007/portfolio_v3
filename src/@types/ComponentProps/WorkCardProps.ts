export interface WorkCardButtonProps {
	relativeLink: boolean;
	href: string;
	iconClassName: string;
	content: string;
	className: string;
}

export interface WorkCardProps {
	id: string;
	header: string;
	description: string;
	img: boolean;
	imgSrc: string;
	imgAlt: string;
	imgClass: string;
	buttons: Array<WorkCardButtonProps>;
}
