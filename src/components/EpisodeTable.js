import React from 'react';
import { render } from 'react-dom';
import Datasort from 'react-data-sort';

function MyTable(props) {
	return (
		<Datasort
			data={props.data['episode-list']}
			defaultSortBy='id'
			render={({ data, setSortBy, sortBy, direction, toggleDirection }) => {
				return (
					<div style={{ maxWidth: 500 }}>
						<table border={1} cellPadding={5} style={{ width: '100%' }}>
							<TableHead
								setSortBy={setSortBy}
								sortBy={sortBy}
								direction={direction}
								toggleDirection={toggleDirection}
							/>
							<TableBody data={data} />
						</table>
						<Flex style={{ justifyContent: 'center' }}></Flex>
					</div>
				);
			}}
		/>
	);
}

function TableHead({ setSortBy, sortBy, direction, toggleDirection }) {
	const columns = [
		{ key: 'name', title: 'Name' },
		{ key: 'season', title: 'Season' },
		{ key: 'rating', title: 'Rating' }
	];
	const items = columns.map(({ key, title }) => {
		const active = key === sortBy;
		return (
			<HeadToggle
				key={key}
				active={active}
				onClick={() => {
					if (active) {
						toggleDirection();
					}
					setSortBy(key);
				}}
			>
				{title} {active ? (direction === 'asc' ? '▲' : '▼') : null}
			</HeadToggle>
		);
	});
	return (
		<thead>
			<p>Episodes</p>
			<tr>{items}</tr>
		</thead>
	);
}

function HeadToggle({ children, active, onClick }) {
	return (
		<td
			onClick={onClick}
			style={{ fontWeight: active ? 'bold' : 'normal', cursor: 'pointer' }}
		>
			{children}
		</td>
	);
}

function TableBody({ data }) {
	return (
		<tbody>
			{data.map(({ name, season, rating }) => (
				<tr>
					<td>{name}</td>
					<td>{season}</td>
					<td>{rating}</td>
				</tr>
			))}
		</tbody>
	);
}

function Flex({ children, style }) {
	return <div style={{ display: 'flex', ...style }}>{children}</div>;
}

const EpisodeTable = props => {
	console.log('~~~~~~~ EpisodeTable', props.data);
	return (
		<div>
			<MyTable data={props.data} />
		</div>
	);
};

// render(<EpisodeTable />, document.getElementById('root'));

export default EpisodeTable;
