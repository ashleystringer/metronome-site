import React from 'react'
import "../css/Metronome.css";


export default function Tempo({ bpm, setBpm }) {
  function onChange(e){
    setBpm(e.target.valueAsNumber);
  }

  function decreaseTempo(){
    setBpm((prev) => {
      if (prev <= 30) return 30;
      return (prev - 1);
    });
  }

  function increaseTempo(){
    setBpm((prev) => {
      if (prev >= 244) return 244;
      return (prev + 1);
    });
  }
  return (
    <div className='beat-range'>
      <button className="bpm-slider-btn" onClick={decreaseTempo}>-</button>
      <input type="range" min="30" max="244" step="1" value={bpm} onChange={onChange}/>
      <button className="bpm-slider-btn" onClick={increaseTempo}>+</button>
      <br/>
      <div className='bpm'>BPM: {bpm}</div>
    </div>
  )
}
