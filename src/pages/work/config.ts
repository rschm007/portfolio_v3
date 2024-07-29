import { WorkCardProps } from "@types";
import TecLogo from "../../assets/tec_logo.svg";
import JemLDLogo from "../../assets/JQlogo-color.jpg";
import SoundandStageLogo from "../../assets/soundandstage.png";
import CashCommandsImg from "../../assets/cashcommands.jpg";
import ForbesAndersenImg from "../../assets/forbesandersen.png";
import ExpressImg from "../../assets/expressinfo.png";

export const WorkCards: Array<WorkCardProps> = [
	{
		id: "tec",
		header: "The Event Community",
		description:
			"Find event vendors and venues, leave reviews, and book services. Built in Remix.",
		img: true,
		imgSrc: TecLogo,
		imgAlt: "The Event Community Logo",
		imgClass: "project_logo logo_bg",
		buttons: [
			{
				relativeLink: false,
				href: "https://theeventcommunity.com/",
				iconClassName: "fas fa-external-link-alt",
				content: "Visit site",
				className: "card_button app",
			},
		],
	},
	{
		id: "jemld",
		header: "JemLD",
		description:
			"A lighting design portfolio site for designer Jacqueline Malenke. Built with Next.js and Firebase.",
		img: true,
		imgSrc: JemLDLogo,
		imgAlt: "JemLD logo",
		imgClass: "project_logo logo_bg",
		buttons: [
			{
				relativeLink: false,
				href: "https://jemld.com/",
				iconClassName: "fas fa-external-link-alt",
				content: "Visit site",
				className: "card_button app",
			},
		],
	},
	{
		id: "sns",
		header: "SoundandStage",
		description:
			"A custom Wordpress site for sound designer Vincent Olivieri.",
		img: true,
		imgSrc: SoundandStageLogo,
		imgAlt: "SoundandStage logo",
		imgClass: "project_logo logo_bg",
		buttons: [
			{
				relativeLink: false,
				href: "https://www.soundandstage.net/",
				iconClassName: "fas fa-external-link-alt",
				content: "Visit site",
				className: "card_button app",
			},
		],
	},
	{
		id: "swdt",
		header: "Southwest Dog Training",
		description:
			"Shopify ecommerce site for a Canadian dog training business.",
		img: true,
		imgSrc: CashCommandsImg,
		imgAlt: "Southwest Dog Training Logo",
		imgClass: "project_logo logo_bg",
		buttons: [
			{
				relativeLink: false,
				href: "https://www.southwestdogtraining.ca/",
				iconClassName: "fas fa-external-link-alt",
				content: "Visit site",
				className: "card_button app",
			},
		],
	},
	{
		id: "faisi",
		header: "Forbes Andersen",
		description: "Wordpress site for a financial service company.",
		img: true,
		imgSrc: ForbesAndersenImg,
		imgAlt: "Forbes Andersen Logo",
		imgClass: "project_logo logo_bg",
		buttons: [
			{
				relativeLink: false,
				href: "https://www.faisi.ca/",
				iconClassName: "fas fa-external-link-alt",
				content: "Visit site",
				className: "card_button app",
			},
		],
	},
	{
		id: "ei",
		header: "Express Info Systems",
		description: "Wordpress site built in Laravel framework.",
		img: true,
		imgSrc: ExpressImg,
		imgAlt: "Express Information Systems Logo",
		imgClass: "project_logo logo_bg",
		buttons: [
			{
				relativeLink: false,
				href: "https://www.expressinfo.com/",
				iconClassName: "fas fa-external-link-alt",
				content: "Visit site",
				className: "card_button app",
			},
		],
	},
];
