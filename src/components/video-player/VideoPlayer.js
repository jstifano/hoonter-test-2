import React from 'react';
import ReactPlayer from 'react-player';

/**
 * Reproductor de vídeo configurable
 */
const VideoPlayer = (props) => {
    return (
        <ReactPlayer
            url={props.urlVideo}
            playing={props.playing}
            onPlay={(event) => props.handleOnPlay(props.id)}
            onPause={(event) => props.handleOnPause(props.id)}
            controls={true}
            muted={props.muted}
        />
    )
}

export default VideoPlayer;