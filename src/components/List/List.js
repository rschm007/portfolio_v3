const List = (props) => {
    const list = props.list;
    const listItems = list.map((item) => 
        <li key={item}>
            {item}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    )
}

export default List;