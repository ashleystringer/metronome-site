import React from 'react'
import "../css/Metronome.css";


export default function TimeSignature({ noteValue, setNoteValue, noteNumber, setNoteNumber}) {

  /*
  {}
  */

  return (
    <div className='time-signature'>
      <div>
          <button onClick={() => {setNoteValue(4)}}>4</button>
          <button onClick={() => {setNoteValue(8)}}>8</button>
      </div>
      <div>
        <button onClick={() => {setNoteNumber(4)}}>2</button>
        <button onClick={() => {setNoteNumber(4)}}>3</button>
        <button onClick={() => {setNoteNumber(4)}}>4</button>
        <button onClick={() => {setNoteNumber(4)}}>5</button>
        <button onClick={() => {setNoteNumber(4)}}>6</button>
        <button onClick={() => {setNoteNumber(4)}}>8</button>
        <button onClick={() => {setNoteNumber(4)}}>9</button>
        <button onClick={() => {setNoteNumber(4)}}>12</button>
        <button onClick={() => {setNoteNumber(4)}}>13</button>
      </div>
    </div>
  )
}
