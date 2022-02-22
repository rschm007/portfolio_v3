import { motion } from "framer-motion/dist/framer-motion";
import PropTypes from "prop-types";

const Header = ({
  tag: Tag,
  class: Class,
  content: Content,
  children: Children,
}) => {
  return (
      <motion.header
        className={`${Class}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <Tag>{Content}</Tag>

        {Children}
      </motion.header>
  );
};

export default Header;

Header.propTypes = {
  class: PropTypes.string,
  content: PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  class: "",
  content: "",
  tag: "h1",
};
