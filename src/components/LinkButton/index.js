const LinkButton = (props) => {
    return (
        <div className={`link_button ${props.class}`}>
            <a href={props.href}>
                <i className={props.icon} />
                {props.content}
            </a>
        </div>
    );
};

export default LinkButton;