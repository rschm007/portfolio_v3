import PropTypes from "prop-types";
import Wrapper from "../../Wrapper";
import { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";

const AboutCard = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <motion.article
      className={
        hovered ? `open about_card ${props.class}` : `about_card ${props.class}`
      }
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      initial={{ opacity: props.initalOpacity, y: props.initialY }}
      animate={{ opacity: props.animateOpacity, y: props.animateY }}
      exit={{ opacity: props.exitOpacity, y: props.exitY }}
    >
      <Wrapper class="about_card__icon">
        <i className={props.icon} />
        <h3 className="icon_title">{props.header}</h3>
      </Wrapper>
      <Wrapper class="about_card__container">
        <Wrapper class="about_card__content">{props.children}</Wrapper>
      </Wrapper>
    </motion.article>
  );
};

export default AboutCard;

AboutCard.propTypes = {
  class: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.node,
  initalOpacity: PropTypes.number,
  animateOpacity: PropTypes.number,
  exitOpacity: PropTypes.number,
  initialY: PropTypes.number,
  animateY: PropTypes.number,
  exitY: PropTypes.number,
};

AboutCard.defaultProps = {
  class: "",
  href: "#",
  icon: "",
  header: "",
  initalOpacity: 0,
  animateOpacity: 1,
  exitOpacity: 0,
  initalY: -50,
  animateY: 0,
  exitY: -50,
};
