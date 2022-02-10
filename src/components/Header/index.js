import PropTypes from "prop-types";

const Header = ({ tag: Tag, class: Class, content: Content, children: Children }) => {
    return (
        <header className={`${Class}`}>
            <Tag>{Content}</Tag>

            {Children}

        </header>
    );
};

export default Header;

Header.propTypes = {
    class: PropTypes.string,
    content: PropTypes.string,
    tag: PropTypes.string,
    children: PropTypes.node,
}

Header.defaultProps = {
    class: "",
    content: "",
    tag: "h1"
}