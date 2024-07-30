import React from "react";
import {
	Wrapper,
	Header,
	Subtitle,
	ContentCard,
	LinkButton,
	MainContentWrapper,
} from "../../components";
import { WorkCards } from "./config";

export const Work = () => {
	return (
		<MainContentWrapper className="scroll">
			<Header tag="h1" content="Work" className="header_hero work">
				<Subtitle
					tag="p"
					content="Some samples of my projects."
					className="work"
				/>
			</Header>

			<Wrapper className="container flex_row">
				<Wrapper className="cards_work flex_col">
					{WorkCards.map((card) => (
						<ContentCard
							key={card.id}
							header={card.header}
							description={card.description}
							img={card.img}
							imgSrc={card.imgSrc}
							imgAlt={card.imgAlt}
							imgClass={card.imgClass}
						>
							<div className="flex_row card_buttons">
								{card.buttons.map((button) => (
									<LinkButton
										key={button.href}
										relativeLink={button.relativeLink}
										href={button.href}
										iconClassName={button.iconClassName}
										content={button.content}
										className={button.className}
									/>
								))}
							</div>
						</ContentCard>
					))}
				</Wrapper>
			</Wrapper>
		</MainContentWrapper>
	);
};
