import PropTypes from "prop-types";

const Wrapper = (props) => {
    return (
        <section className={`wrapper ${props.class}`}>
            {props.children}
        </section>
    );
};

export default Wrapper;

Wrapper.propTypes = {
    class: PropTypes.string,
    children: PropTypes.node,
}

Wrapper.defaultProps = {
    class: "",
}