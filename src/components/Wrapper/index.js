const Wrapper = (props) => {
    return (
        <section className={`wrapper ${props.class}`}>
            {props.children}
        </section>
    );
};

export default Wrapper