import React, { useEffect, useRef, useState } from 'react'
import Tempo from "./Tempo"
import TimeSignature from './TimeSignature';
import StartButton from './StartButton';
import "../css/Metronome.css";

export default function Metronome() {


  const [isMetrPlaying, setIsMetrPlaying] = useState(false);
  const [beatNumberState, setBeatNumberState] = useState(0);
  const [noteValue, setNoteValue] = useState(0);
  //const noteValueRef = useRef(0);
  const [noteNumber, setNoteNumber] = useState(0);
  //const noteNumberRef = useRef(0);
  const [notePattern, setNotePattern] = useState(4);
  const noteRef = useRef(4);
  const [bpm, setBpm] = useState(100);
  const beatNumberRef = useRef(0);
  const tempo = useRef(95);
  const intervalRef = useRef();




  useEffect(() => {

    console.log(`noteValue: ${noteValue}, noteNumber: ${noteNumber}`);

  }, [noteValue, noteNumber]);

  useEffect(() => {


    const test = () => {
      console.log("test()");
      console.log(`beatNumberRef.current: ${beatNumberRef.current}`);
      beatNumberRef.current++;
      //setBeatNumberState(prev => prev += 1;);
  
      if(beatNumberRef.current >= notePatternRef.current) beatNumberRef.current = 0;
      //if(beatNumberState >= tempo.current) beatNumberRef.current = 0;

      /*
      const bpm = (60000 / tempo.current);

      const interval = setInterval(() => {

        if(noteRef.current == notePattern.length){
          noteRef.current = 0;
          setSelectedNote(1);
        }

        if(notePattern[noteRef.current] === 1){
            //sound
        }else if(notePattern[noteRef.current] === 2){
          //sound
        }else{
          //sound
        }
        
        noteRef.current++;
        setSelectedNote(noteRef.current);
      }, bpm);
      */
    }   

    if(isMetrPlaying){
      intervalRef.current = setInterval(test, (60000/tempo.current)); //((4/60000) * 1000)
    }else{
      clearInterval(intervalRef.current);
    }
    
    return () => clearInterval(intervalRef.current);

    console.log(`isMetrPlaying: ${isMetrPlaying}`);

  }, [isMetrPlaying]);
  

  return (
    <div className={"metronome"}>
      <br/>
      <Tempo bpm={bpm} setBpm={setBpm}/>
      <TimeSignature 
        noteValue={noteValue} 
        setNoteValue={setNoteValue}
        noteNumber={noteNumber}
        setNoteNumber={setNoteNumber}
      />
      <StartButton isMetrPlaying={isMetrPlaying} setIsMetrPlaying={setIsMetrPlaying}/>
    </div>
  )
}