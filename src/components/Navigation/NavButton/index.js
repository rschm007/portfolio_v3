const NavButton = (props) => {
    return (
        <div className={`nav_button ${props.class}`}>
            <button href={props.href}>
                <i className={props.icon} />
            </button>
        </div>
    );
};

export default NavButton;