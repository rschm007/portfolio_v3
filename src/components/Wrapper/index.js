import { motion } from "framer-motion/dist/framer-motion";
import PropTypes from "prop-types";

const Wrapper = (props) => {
    return (
        <motion.section className={`wrapper ${props.class}`} exit={{ opacity: props.exitOpacity}}>
            {props.children}
        </motion.section>
    );
};

export default Wrapper;

Wrapper.propTypes = {
    class: PropTypes.string,
    children: PropTypes.node,
    exitOpacity: PropTypes.number,
}

Wrapper.defaultProps = {
    class: "",
    exitOpacity: 0
}