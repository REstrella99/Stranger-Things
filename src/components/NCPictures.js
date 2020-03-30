import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import NCimg1 from '../images/durhambulls.jpg';
import NCimg2 from '../images/orangecounty.jpg';
import NCimg3 from '../images/lochnora.jpg';
import NCimg4 from '../images/jordanlake.jpg';
import NCimg5 from '../images/forest-hills-park.jpg';
import NCimg6 from '../images/enoriver.jpg';



class NCPictures extends Component {
    render() {
        return (
            <Carousel >
                <div>
                    <img src={NCimg1} />
                    <h3>Durham Bulls Stadium, Go Bulls!</h3>
                </div>
                <div>
                    <img src={NCimg2} />
                    <h3>Orange County</h3>
                </div>
                <div>
                    <img src={NCimg3} />
                    <h3>Lochn Ora</h3>
                </div>
                <div>
                    <img src={NCimg4} />
                    <h3>Jordan Lake</h3>
                </div>
                <div>
                    <img src={NCimg5} />
                    <h3>Forest Hills Park</h3>
                </div>
                <div>
                    <img src={NCimg6} />
                    <h3>Eno River</h3>
                </div>
            </Carousel>
        );
    }
};

export default NCPictures;