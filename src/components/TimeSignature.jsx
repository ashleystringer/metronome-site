import React from 'react'
import "../css/Metronome.css";


export default function TimeSignature({ noteValue, setNoteValue, noteNumber, setNoteNumber}) {

  /*
  {}
  */

  return (
    <div className='time-signature'>
      <div className='note-value container'>
          <button onClick={() => {setNoteValue(4)}} className="btn">4</button>
          <button onClick={() => {setNoteValue(8)}} className="btn">8</button>
      </div>
      <div className='container'>
        <button onClick={() => {setNoteNumber(4)}} className="btn">2</button>
        <button onClick={() => {setNoteNumber(4)}} className="btn">3</button>
        <button onClick={() => {setNoteNumber(4)}} className="btn">4</button>
        <button onClick={() => {setNoteNumber(4)}} className="btn">5</button>
        <button onClick={() => {setNoteNumber(4)}} className="btn">6</button>
        <button onClick={() => {setNoteNumber(4)}} className="btn">8</button>
        <button onClick={() => {setNoteNumber(4)}} className="btn">9</button>
        <button onClick={() => {setNoteNumber(4)}} className="btn">12</button>
        <button onClick={() => {setNoteNumber(4)}} className="btn">13</button>
      </div>
    </div>
  )
}
