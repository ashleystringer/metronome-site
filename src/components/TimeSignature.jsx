import React from 'react'
import "../css/Metronome.css";


export default function TimeSignature({ noteValue, setNoteValue, noteNumber, setNoteNumber}) {

  return (
    <div className='time-signature'>
      <div className='note-value container'>
          <button onClick={() => {setNoteValue(4)}} className={ noteValue === 4 ?  `btn selected` : `btn` }>4</button>
          <button onClick={() => {setNoteValue(8)}} className={ noteValue === 8 ?  `btn selected` : `btn` }>8</button>
      </div>
      <div className='container'>
        <button onClick={() => {setNoteNumber(2)}} className={ noteNumber === 2 ?  `btn selected` : `btn` }>2</button>
        <button onClick={() => {setNoteNumber(3)}} className={ noteNumber === 3 ?  `btn selected` : `btn` }>3</button>
        <button onClick={() => {setNoteNumber(4)}} className={ noteNumber === 4 ?  `btn selected` : `btn` }>4</button>
        <button onClick={() => {setNoteNumber(5)}} className={ noteNumber === 5 ?  `btn selected` : `btn` }>5</button>
        <button onClick={() => {setNoteNumber(6)}} className={ noteNumber === 6 ?  `btn selected` : `btn` }>6</button>
        <button onClick={() => {setNoteNumber(7)}} className={ noteNumber === 7 ?  `btn selected` : `btn` }>7</button>
        <button onClick={() => {setNoteNumber(8)}} className={ noteNumber === 8 ?  `btn selected` : `btn` }>8</button>
        <button onClick={() => {setNoteNumber(9)}} className={ noteNumber === 9 ?  `btn selected` : `btn` }>9</button>
        <button onClick={() => {setNoteNumber(12)}} className={ noteNumber === 12 ?  `btn selected` : `btn` }>12</button>
        <button onClick={() => {setNoteNumber(13)}} className={ noteNumber === 13 ?  `btn selected` : `btn` }>13</button>
      </div>
    </div>
  )
}
