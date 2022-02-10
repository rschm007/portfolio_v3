import PropTypes from "prop-types";

const LinkButton = (props) => {
    return (
        <button className={`link_button ${props.class}`}>
            <a href={props.href}>
                <i className={props.icon} />
                {props.content}
            </a>
        </button>
    );
};

export default LinkButton;

LinkButton.propTypes = {
    class: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    content: PropTypes.string
}

LinkButton.defaultProps = {
    class: "",
    href: "#",
    icon: "",
    content: ""
}