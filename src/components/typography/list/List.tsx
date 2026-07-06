export interface ListProps {
	list: string[];
}

export const List = ({ list }: ListProps) => {
	return (
		<ul>
			{list.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
};
