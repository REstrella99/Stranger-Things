import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Section from '../components/Section';
import EpisodeTable from '../components/EpisodeTable';
import Video from "../components/Video";
import Videotwo from "../components/Videotwo";


const Episodes = () => (

    <div>
        <Section backgroundColor="#e0ebe8">
            <Grid>
                <Row center="xs">
                    <Col xs={12} lg={6}>
                        <EpisodeTable />
                    </Col>
                    <Col xs={12} lg={6}>
                        <Video />
                        <Videotwo />
                    </Col>
                </Row>

            </Grid>
        </Section>


    </div>
);

export default Episodes;
