import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import PropTypes from "prop-types";

const LinkButton = (props) => {
  return (
    <motion.button
      className={`link_button ${props.class}`}
      initial={{ opacity: props.initalOpacity, y: props.initialY }}
      animate={{ opacity: props.animateOpacity, y: props.animateY }}
      exit={{ opacity: props.exitOpacity, y: props.exitY }}
    >
      <Link to={props.href}>
        <i className={props.icon} />
        {props.content}
      </Link>
    </motion.button>
  );
};

export default LinkButton;

LinkButton.propTypes = {
  class: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  content: PropTypes.string,
  initalOpacity: PropTypes.number,
  animateOpacity: PropTypes.number,
  exitOpacity: PropTypes.number,
  initialY: PropTypes.number,
  animateY: PropTypes.number,
  exitY: PropTypes.number,
};

LinkButton.defaultProps = {
  class: "",
  href: "#",
  icon: "",
  content: "",
  initalOpacity: 0,
  animateOpacity: 1,
  exitOpacity: 0,
  initalY: -50,
  animateY: 0,
  exitY: -50,
};
