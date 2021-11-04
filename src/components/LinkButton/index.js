const LinkButton = (props) => {
    return (
        <button className={`link_button ${props.class}`}>
            <a href={props.href}>
                <i className={props.icon} />
                {props.content}
            </a>
        </button>
    );
};

export default LinkButton;