import React from "react";

export type ListItem = {
	content: React.JSX.Element;
	key: string;
};

export interface ListProps {
	list: Array<ListItem>;
}

export const List = ({ list }: ListProps) => {
	const listItems = list.map((item) => <li key={item.key}>{item.content}</li>);

	return <ul>{listItems}</ul>;
};
