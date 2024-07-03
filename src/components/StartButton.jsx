import React from 'react'
import "../css/Metronome.css";

export default function StartButton({isMetrPlaying, setIsMetrPlaying}) {

    const togglePlayStatus = () => {
        setIsMetrPlaying(prevState => !prevState);
    }

  return (
    <button onClick={togglePlayStatus} className='play-btn'>{isMetrPlaying ? "Pause" : "Start"}</button>
  )
}
