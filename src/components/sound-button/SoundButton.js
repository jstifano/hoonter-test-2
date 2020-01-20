import React from 'react';
import './SoundButton.css';

/**
 * Bóton reutilizable del botón de sonido
 */
const SoundButton = (props) => {
    return (
        <div className="wrapper-sound" onClick={() => props.isMuting ? props.muteVideos() : props.handleVolume(props.id)}>
            <div className="sound-icon"></div>
        </div>
    )
}

export default SoundButton;