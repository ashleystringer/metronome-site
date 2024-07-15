import React, { useState, useContext, createContext } from 'react'
import { simpleTime, compoundTime } from "../time-signatures";

export const MetronomeContext = createContext();

export function useMetronome(){
    return useContext(MetronomeContext);
}

export default function MetronomeProvider({ children }) {
  
    const [notePattern, setNotePattern] = useState(simpleTime(4));
    const [selectedNote, setSelectedNote] = useState(1);

    function createNotePattern(noteNumber, noteValue){
        console.log(`noteValue: ${noteValue}, noteNumber: ${noteNumber}`);
        if(noteValue == 4){
          return simpleTime(noteNumber);
        }else if(noteValue == 8){
          return compoundTime(noteNumber);
        }
      }
      
    const value = {
        notePattern,
        setNotePattern,
        selectedNote,
        setSelectedNote
    }

    return (
        <MetronomeContext.Provider value={value}>
          {children}
        </MetronomeContext.Provider>
    )
}
