import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../pages/Overview';
import Gallery from '../pages/Gallery';
import Episodes from '../pages/Episodes';



const Content = () => (
	<Switch>
		<Route exact path="/" component={Overview} />
		<Route exact path="/Gallery" component={Gallery} />
		<Route exact path="/Episodes" component={Episodes} />
	</Switch>
);

export default Content;
