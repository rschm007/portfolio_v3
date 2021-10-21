const Header = ({tag: Tag, class: Class, content: Content}) => {
    return (
        <header className={`${Class}`}>
            <Tag>{Content}</Tag>
        </header>
    );
};

export default Header