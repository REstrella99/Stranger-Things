import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import data from "../data/en_US.json";

class Pictures extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={data.gallery[0].src} />
                    <p className="legend">{data.gallery[0].text}</p>
                </div>
                <div>
                    <img src={data.gallery[1].src} />
                    <p className="legend">{data.gallery[1].text}</p>
                </div>
                <div>
                    <img src={data.gallery[2].src} />
                    <p className="legend">{data.gallery[2].text}</p>
                </div>
            </Carousel>
        );
    }
};

export default Pictures;