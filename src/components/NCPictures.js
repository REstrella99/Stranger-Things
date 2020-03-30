import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import data from "../data/en_US.json";
import NCimg1 from '../images/durhambulls.jpg';
import NCimg2 from '../images/orangecounty.jpg';
import NCimg3 from '../images/lochnora.jpg';
import NCimg4 from '../images/jordanlake.jpg';
import NCimg5 from '../images/forest-hills-park.jpg';
import NCimg6 from '../images/enoriver.jpg';



class NCPictures extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={NCimg1} />
                    <p className="legend">Durham Bulls Stadium, Go Bulls!</p>
                </div>
                <div>
                    <img src={NCimg2} />
                    <p className="legend">Orange County</p>
                </div>
                <div>
                    <img src={NCimg3} />
                    <p className="legend">Lochn Ora</p>
                </div>
                <div>
                    <img src={NCimg4} />
                    <p className="legend">Jordan Lake</p>
                </div>
                <div>
                    <img src={NCimg5} />
                    <p className="legend">Forest Hills Park</p>
                </div>
                <div>
                    <img src={NCimg6} />
                    <p className="legend">Eno River</p>
                </div>
            </Carousel>
        );
    }
};

export default NCPictures;