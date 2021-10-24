const Subtitle = ({tag: Tag, class: Class, content: Content}) => {
    return (
        <div className={`subtitle ${Class}`}>
            <Tag>{Content}</Tag>
        </div>
    );
};

export default Subtitle