import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LazyLoad from 'react-lazyload';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import Divider from '../components/Divider';
import AudioPlayer from "react-h5-audio-player";
import EpisodeTable from '../components/EpisodeTable';
import data from "../data/en_US.json";
import Pictures from '../components/Pictures';

const Gallery = () => (
    <div>
        <Section>
            <Grid>
                <Row center="xs">
                    <Col xs={12} lg={8}>
                        <Pictures />
                    </Col>
                </Row>
            </Grid>
        </Section>

    </div>
);

export default Gallery;