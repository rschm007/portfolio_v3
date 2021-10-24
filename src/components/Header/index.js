const Header = ({tag: Tag, class: Class, content: Content, children: Children}) => {
    return (
        <header className={`${Class}`}>
            <Tag>{Content}</Tag>

            {Children}

        </header>
    );
};

export default Header