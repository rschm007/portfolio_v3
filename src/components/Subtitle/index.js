import PropTypes from "prop-types";

const Subtitle = ({ tag: Tag, class: Class, content: Content }) => {
    return (
        <div className={`subtitle ${Class}`}>
            <Tag>{Content}</Tag>
        </div>
    );
};

export default Subtitle;

Subtitle.propTypes = {
    class: PropTypes.string,
    content: PropTypes.string,
    tag: PropTypes.string,
}

Subtitle.defaultProps = {
    class: "",
    content: "",
    tag: "h2"
}