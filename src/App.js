import React, { Component } from 'react';
import Header from './layout/Header';
import Img from './components/Img';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Navigation from './components/Navigation';
import './App.css';
import data_en from './data/en_US.json';
import data_pg from './data/la_PG.json';

const data = {
	data_en,
	data_pg
};

class App extends Component {
	constructor(props) {
		super(props);
		this.handleChangeLang = this.handleChangeLang.bind(this);
	}
	state = {
		selectedLang: { value: 'data_en', label: 'EN' },
		data: data.data_en
	};

	handleChangeLang = option => {
		this.setState({ selectedLang: option });
		this.setState({ data: data[option.value] });
	};

	render() {
		return (
			<React.Fragment>
				<Header>
					<Grid>
						<Row middle='xs' center='xs' start='lg'>
							<Col xs={12} lg={7}>

							</Col>
							<Col xs={12} lg={5}>
								<Navigation
									onChangeLang={this.handleChangeLang}
									lang={this.state.selectedLang}
								/>
							</Col>
						</Row>
					</Grid>
				</Header>
				<Content data={this.state.data} />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
