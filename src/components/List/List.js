const List = (props) => {
    const list = props.list;
    const listItems = list.map((item) => {
        <li>
            {item}
        </li>
    });

    return (
        <ul>{listItems}</ul>
    )
}

export default List;