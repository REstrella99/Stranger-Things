import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../pages/Overview';
import Gallery from '../pages/Gallery';
import Episodes from '../pages/Episodes';


const Content = props => (
	<Switch>
		<Route exact path='/' component={() => <Overview data={props.data} />} />
		<Route
			exact
			path='/Gallery'
			component={() => <Gallery data={props.data} />}
		/>
		<Route
			exact
			path='/Episodes'
			component={() => <Episodes data={props.data} />}
		/>

	</Switch>
);

export default Content;
