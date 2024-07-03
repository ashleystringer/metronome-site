import React from 'react'
import "../css/Metronome.css";


export default function Tempo({ bpm, setBpm }) {
  function onChange(e){
    setBpm(e.target.valueAsNumber);
  }
  return (
    <div className='beat-range'v>
      <input type="range" min="30" max="244" value={bpm} onChange={onChange}/>
      <div>BPM: {bpm}</div>
    </div>
  )
}
