import PropTypes from "prop-types";
import Wrapper from "../../Wrapper";

const ContentCard = (props) => {
    return (
        <article className={`card ${props.class}`}>
            {props.img && props.imgSrc && props.imgAlt && props.imgClass ?
                <Wrapper class="flex_row card_1__content">
                    <Wrapper class="flex_column">
                        <img src={props.imgSrc} alt={props.imgAlt} className={props.imgClass} />
                    </Wrapper>
                    <Wrapper class="flex_column">
                        <h3>{props.header}</h3>
                        <p>{props.description}</p>
                        {props.children}
                    </Wrapper>
                </Wrapper>
                :
                <Wrapper class="flex_column">
                    <h3>{props.header}</h3>
                    <p>{props.description}</p>
                    {props.children}
                </Wrapper>
            }
        </article>
    );
};

export default ContentCard;

ContentCard.propTypes = {
    class: PropTypes.string,
    img: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    imgClass: PropTypes.string,
    header: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
}

ContentCard.defaultProps = {
    class: "",
    img: "",
    imgSrc: "",
    imgAlt: "",
    imgClass: "",
    header: "",
    description: "",
}