import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from './List/ListItem';
import List from './List/List';
import { Row, Col } from 'react-flexbox-grid';
import Select from 'react-select';

const options = [
	{ value: 'data_en', label: 'EN' },
	{ value: 'data_pg', label: 'PG' }
];

class Navigation extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{ display: 'flex' }}>
				<List>
					<ListItem inline>
						<NavLink to='/'>Overview</NavLink>
					</ListItem>
					<ListItem inline>
						<NavLink to='/Gallery'>Gallery</NavLink>
					</ListItem>
					<ListItem inline>
						<NavLink to='/Episodes'>Episodes</NavLink>
					</ListItem>
				</List>
				<Select
					value={this.props.lang}
					onChange={this.props.onChangeLang}
					options={options}
					width='90px'
					className='dd-lang'
				/>
			</div>
		);
	}
}

export default Navigation;
