import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render() {
        return <ReactPlayer width="100%" style={{ marginTop: '30px', marginBottom: '30px' }} url='https://www.youtube.com/watch?v=KbrGyoTNKJY' playing />


    }
}



export default Video;