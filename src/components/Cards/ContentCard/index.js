import PropTypes from "prop-types";
import Wrapper from "../../Wrapper";
import { motion } from "framer-motion/dist/framer-motion";

const ContentCard = (props) => {
  return (
    <motion.article
      className={`card ${props.class}`}
      initial={{ opacity: props.initalOpacity, y: props.initialY }}
      animate={{ opacity: props.animateOpacity, y: props.animateY }}
      exit={{ opacity: props.exitOpacity, y: props.exitY }}
    >
      {props.img && props.imgSrc && props.imgAlt && props.imgClass ? (
        <Wrapper class="flex_row card_1__content">
          <Wrapper class="flex_column card_1__img">
            <img
              src={props.imgSrc}
              alt={props.imgAlt}
              className={props.imgClass}
            />
          </Wrapper>
          <Wrapper class="flex_column">
            <h3>{props.header}</h3>
            <p>{props.description}</p>
            {props.children}
          </Wrapper>
        </Wrapper>
      ) : (
        <Wrapper class="flex_column">
          <h3>{props.header}</h3>
          <p>{props.description}</p>
          {props.children}
        </Wrapper>
      )}
    </motion.article>
  );
};

export default ContentCard;

ContentCard.propTypes = {
  class: PropTypes.string,
  img: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgClass: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  initalOpacity: PropTypes.number,
  animateOpacity: PropTypes.number,
  exitOpacity: PropTypes.number,
  initialY: PropTypes.number,
  animateY: PropTypes.number,
  exitY: PropTypes.number,
};

ContentCard.defaultProps = {
  class: "",
  img: "",
  imgSrc: "",
  imgAlt: "",
  imgClass: "",
  header: "",
  description: "",
  initalOpacity: 0,
  animateOpacity: 1,
  exitOpacity: 0,
  initalY: -50,
  animateY: 0,
  exitY: -50,
};
