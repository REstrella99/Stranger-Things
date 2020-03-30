import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import data from "../data/en_US.json";

import img2 from "../images/strangerthings2.JPG"
import img3 from "../images/mindflayer.gif"


class Pictures extends Component {
    render() {
        return (
            <Carousel autoPlay>
                <div>
                    <img src={data.gallery[0].src} />
                    <h3>{data.gallery[0].text}</h3>
                </div>
                <div>
                    <img src={data.gallery[1].src} />
                    <h3>{data.gallery[1].text}</h3>
                </div>
                <div>
                    <img src={data.gallery[2].src} />
                    <h3>{data.gallery[2].text}</h3>
                </div>
                <div>
                    <img src={img2} />
                    <h3>Stranger Things Part Two</h3>
                </div>
                <div>
                    <img src={img3} />
                    <h3>Mindflayer Monster</h3>
                </div>
            </Carousel>
        );
    }
};

export default Pictures;