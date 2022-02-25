import { motion } from "framer-motion/dist/framer-motion";
import PropTypes from "prop-types";

const DownloadButton = (props) => {
    const downloadFile = () => {
        window.location.href = props.href;
    }

    return (
        <motion.button
            className={`download_button ${props.class}`}
            initial={{ opacity: props.initalOpacity, y: props.initialY }}
            animate={{ opacity: props.animateOpacity, y: props.animateY }}
            exit={{ opacity: props.exitOpacity, y: props.exitY }}
            href={props.href} onClick={downloadFile} download
        >
                <i className={props.icon} />
                {props.content}
        </motion.button>
    );
};

export default DownloadButton;

DownloadButton.propTypes = {
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

DownloadButton.defaultProps = {
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
