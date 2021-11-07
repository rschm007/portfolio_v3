import Wrapper from "../../Wrapper";
import { useState } from "react";

const AboutCard = (props) => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <article className={hovered ? `open about_card ${props.class}` : `about_card ${props.class}`}
        onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <Wrapper class="about_card__icon">
                <i className={props.icon} />
                <h3 className="icon_title">{props.header}</h3>
            </Wrapper>
            <Wrapper class="about_card__container">
                {/* <Wrapper class="about_card__header">
                    <h3>{props.header}</h3>
                </Wrapper> */}
                <Wrapper class="about_card__content">
                    <p>{props.content}</p>
                </Wrapper>
            </Wrapper>
        </article>
    );
};

export default AboutCard;