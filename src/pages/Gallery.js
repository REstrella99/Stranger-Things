import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Section from '../components/Section';
import Divider2 from '../components/Dividertwo';
import Pictures from '../components/Pictures';



const Gallery = props => (
    <div>
        <Section backgroundColor='rgb(255,40,0)'>
            <Grid>
                <Row center="xs">
                    <Col xs={2} lg={1}>
                        <Divider2 />
                    </Col>
                </Row>


                <Row center="xs">
                    <Col xs={12} lg={12}>
                        <Pictures data={props.data} />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} lg={12}>

                    </Col>
                </Row>


            </Grid>
        </Section>

    </div>
);

export default Gallery;