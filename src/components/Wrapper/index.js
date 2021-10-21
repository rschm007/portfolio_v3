const Wrapper = (props) => {
    return (
        <div className={`wrapper ${props.class}`}>
            {props.children}
        </div>
    );
};

export default Wrapper