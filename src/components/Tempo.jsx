import React from 'react'
import "../css/Metronome.css";


export default function Tempo({ tempo, setTempo }) {
  function onChange(e){
    setTempo(e.target.valueAsNumber);
  }

  function decreaseTempo(){
    setTempo((prev) => {
      if (prev <= 30) return 30;
      return (prev - 1);
    });
  }

  function increaseTempo(){
    setTempo((prev) => {
      if (prev >= 244) return 244;
      return (prev + 1);
    });
  }
  return (
    <div className='beat-range'>
      <button className="bpm-slider-btn" onClick={decreaseTempo}>-</button>
      <input type="range" min="30" max="244" step="1" value={tempo} onChange={onChange}/>
      <button className="bpm-slider-btn" onClick={increaseTempo}>+</button>
      <br/>
      <div className='bpm'>Tempo: {tempo}</div>
    </div>
  )
}
