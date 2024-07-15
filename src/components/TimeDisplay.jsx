import React from 'react'
import BeatsVisualizer from './BeatsVisualizer';
import { useMetronome } from "../contexts/MetronomeProvider";


export default function TimeDisplay({ noteValue, noteNumber}) {

  const {
    selectedNote
  } = useMetronome();


  const timeSignature = (
      <div>{noteNumber} / {noteValue}</div>
  );

  return (
    <>
      <div className='display-time'>
        {(noteValue !== 0 && noteNumber !== 0 ) ? timeSignature : "-"}
      </div>
      <BeatsVisualizer noteNumber={noteNumber} selectedNote={selectedNote} />
    </>
  )
}
