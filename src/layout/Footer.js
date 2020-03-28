import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { IoIosHeart } from 'react-icons/io';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';

const Footer = () => (
	<Section backgroundColor="#e0ebe8">
		<Grid>
			<Row center="xs">
				<Col xs={12}>
					<Paragraph>
						Made with <IoIosHeart style={{ color: "red" }} /> by Rafael Estrella
          </Paragraph>
				</Col>
			</Row>
		</Grid>
	</Section>
);

export default Footer;
