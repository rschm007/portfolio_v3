const NavButton = (props) => {
    return (
        <div className={`nav_button ${props.class}`}>
            <a href={props.href}>
                <i className={props.icon} />
            </a>
        </div>
    );
};

export default NavButton;