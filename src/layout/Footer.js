import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { IoIosHeart } from 'react-icons/io';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { MdCopyright } from "react-icons/md";

const Footer = () => (
	<Section backgroundColor='black'>
		<Grid>
			<Row center="xs">
				<Col xs={12} >
					<h4 color='white'>
						Rafael Estrella  <MdCopyright /> </h4>
				</Col>
			</Row>
		</Grid>
	</Section>
);

export default Footer;
