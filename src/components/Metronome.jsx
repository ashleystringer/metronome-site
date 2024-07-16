import React, { useEffect, useRef, useState } from 'react'
import { useMetronome } from "../contexts/MetronomeProvider";
import TimeDisplay from "./TimeDisplay";
import Tempo from "./Tempo"
import TimeSignature from './TimeSignature';
import StartButton from './StartButton';
import { simpleTime, compoundTime } from "../time-signatures";
import "../css/Metronome.css";

export default function Metronome() {


  const [isMetrPlaying, setIsMetrPlaying] = useState(false);
  const [beatNumberState, setBeatNumberState] = useState(0);
  const [noteValue, setNoteValue] = useState(4);
  const [noteNumber, setNoteNumber] = useState(4);
  const noteRef = useRef(4);
  const [tempo, setTempo] = useState(100);
  const beatNumberRef = useRef(0);
  const tempoRef = useRef(95);
  const intervalRef = useRef();

  const { 
    notePattern,
    setNotePattern,
    selectedNote,
    setSelectedNote
  } = useMetronome();


  useEffect(() => {

    tempoRef.current = tempo;

    const playMetronome = () => {
      if(noteRef.current == notePattern.length){
        noteRef.current = 0;
        setSelectedNote(1);
      }

      if(notePattern[noteRef.current] == 1){
        console.log("notePattern[noteRef.current] == 1");
        /*
          AUDIO PLACEHOLDER
        */
      }else if(notePattern[noteRef.current] == 2){
        console.log("notePattern[noteRef.current] == 2");
        /*
          AUDIO PLACEHOLDER
        */
      }else{
        console.log("notePattern[noteRef.current] == 3");      
        /*
          AUDIO PLACEHOLDER
        */  
      }

      noteRef.current++;
      setSelectedNote(noteRef.current);
    }  

    if(isMetrPlaying){
      intervalRef.current = setInterval(playMetronome, (60000/tempoRef.current)); //((4/60000) * 1000)
    }else{
      clearInterval(intervalRef.current);
    }
    
    return () => clearInterval(intervalRef.current);

  }, [isMetrPlaying, tempo, noteValue, noteNumber, notePattern]);

  useEffect(() => {
    if(noteValue == 4){
      setNotePattern(simpleTime(noteNumber));
    }else if(noteValue == 8){
      setNotePattern(compoundTime(noteNumber));
    }

  }, [noteValue, noteNumber]);
  

  return (
    <div className={"metronome"}>
      <br/>
      <TimeDisplay
        noteValue={noteValue} 
        noteNumber={noteNumber}
      />
      <Tempo tempo={tempo} setTempo={setTempo}/>
      <StartButton isMetrPlaying={isMetrPlaying} setIsMetrPlaying={setIsMetrPlaying}/>
      <TimeSignature 
        noteValue={noteValue} 
        setNoteValue={setNoteValue}
        noteNumber={noteNumber}
        setNoteNumber={setNoteNumber}
      />
    </div>
  );
}