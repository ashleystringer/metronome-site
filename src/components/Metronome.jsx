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
  //const noteValueRef = useRef(0);
  const [noteNumber, setNoteNumber] = useState(4);
  //const noteNumberRef = useRef(0);
  //const [notePattern, setNotePattern] = useState(4);
  const noteRef = useRef(4);
  const [bpm, setBpm] = useState(100);
  const beatNumberRef = useRef(0);
  const tempo = useRef(95);
  const intervalRef = useRef();

  const { 
    notePattern,
    setNotePattern,
    selectedNote,
    setSelectedNote
  } = useMetronome();


  useEffect(() => {

    tempo.current = bpm;

    const test = () => {
      if(noteRef.current == notePattern.length){
        noteRef.current = 0;
        setSelectedNote(1);
      }

      if(notePattern[noteRef.current] == 1){
        //synth.triggerAttackRelease("C3", noteValueStr);
        console.log("notePattern[noteRef.current] == 1");
      }else if(notePattern[noteRef.current] == 2){
        //synth.triggerAttackRelease("C2", noteValueStr);
        console.log("notePattern[noteRef.current] == 2");
      }else{
        //synth.triggerAttackRelease("C4", noteValueStr);
        console.log("notePattern[noteRef.current] == 3");        
      }

      noteRef.current++;
      setSelectedNote(noteRef.current);
    }  

    if(isMetrPlaying){
      intervalRef.current = setInterval(test, (60000/tempo.current)); //((4/60000) * 1000)
    }else{
      clearInterval(intervalRef.current);
    }
    
    return () => clearInterval(intervalRef.current);

    console.log(`isMetrPlaying: ${isMetrPlaying}`);

  }, [isMetrPlaying, bpm]);

  useEffect(() => {
    if(noteValue == 4){
      setNotePattern(simpleTime(noteNumber));
    }else if(noteValue == 8){
      setNotePattern(compoundTime(noteNumber));
    }

    console.log(notePattern);
  }, [noteValue, noteNumber]);
  

  return (
    <div className={"metronome"}>
      <br/>
      <TimeDisplay
        noteValue={noteValue} 
        noteNumber={noteNumber}
      />
      <Tempo bpm={bpm} setBpm={setBpm}/>
      <StartButton isMetrPlaying={isMetrPlaying} setIsMetrPlaying={setIsMetrPlaying}/>
      <TimeSignature 
        noteValue={noteValue} 
        setNoteValue={setNoteValue}
        noteNumber={noteNumber}
        setNoteNumber={setNoteNumber}
      />
    </div>
  )
}