import React, { Component } from 'react';
import VideoPlayer from '../../components/video-player/VideoPlayer';
import SoundButton from '../../components/sound-button/SoundButton';
import './HomeContainer.css';
import { config } from '../../config';

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlayingVideo1: false,
            isPlayingVideo2: false,
            volumeVideo1: false,
            volumeVideo2: false
        }
    }
    
    /**
     * Función para reproducir el video
     */
    handlePlayVideo = (id) => {
        if(id === '1') {
            this.setState({
                isPlayingVideo2: false, //Detengo el video 2
                isPlayingVideo1: true
            })
        }
        else {
            this.setState({
                isPlayingVideo2: true, //Detengo el video 2
                isPlayingVideo1: false
            })       
        }
    }

    /**
     * Función para pausar el video
     */
    handlePauseVideo = (id) => {
        if(id === '1') {
            this.setState({
                isPlayingVideo1: false
            })
        }
        else {
            this.setState({
                isPlayingVideo2: false
            })       
        }    
    }

    /**
     * Funcion para manejar el volumen particular 
     * del video
     */
    handleVolume = (id) => {
        if(id === '1') {
            this.setState({
                volumeVideo1: !this.state.volumeVideo1
            })
        }
        else {
            this.setState({
                volumeVideo2: !this.state.volumeVideo2
            })       
        }      
    }
    /**
     * Funcion para manejar el volumen con el boton
     * general de la pantalla
     */
    changeVolumeVideos = () => {
        // Si estan sonando ambos videos, los muteo
        if(this.state.volumeVideo1 && this.state.volumeVideo2) {
            this.setState({
                volumeVideo1: false,
                volumeVideo2: false,
            })
        } else if(!this.state.volumeVideo1 && !this.state.volumeVideo2) {
            this.setState({
                volumeVideo1: true,
                volumeVideo2: true,
            })    
        } else if(!this.state.volumeVideo1 && this.state.volumeVideo2) { 
            this.setState({
                volumeVideo2: false,
            })
        } else if(this.state.volumeVideo1 && !this.state.volumeVideo2) {
            this.setState({
                volumeVideo1: false,
            })
        }
    }

    render() {
        return(
            <div className="video-container">
                <div className="video">
                    <VideoPlayer 
                        id="1"
                        playing={this.state.isPlayingVideo1}
                        handleOnPlay={this.handlePlayVideo}
                        handleOnPause={this.handlePauseVideo}
                        urlVideo={config.videoUrl}
                        muted={this.state.volumeVideo1 ? true : false}
                    />
                    <SoundButton id={"1"} handleVolume={this.handleVolume} isMuting={false} />
                </div>
                <div className="video">
                    <VideoPlayer 
                        id="2"
                        playing={this.state.isPlayingVideo2}
                        handleOnPlay={this.handlePlayVideo}
                        handleOnPause={this.handlePauseVideo}
                        urlVideo={config.videoUrl}
                        muted={this.state.volumeVideo2 ? true : false}
                    />
                    <SoundButton id={"2"} handleVolume={this.handleVolume} isMuting={false}/>
                </div>
                <div>
                    <SoundButton muteVideos={this.changeVolumeVideos} isMuting={true}/>
                </div>
            </div>
        )
    }
}

export default HomeContainer;