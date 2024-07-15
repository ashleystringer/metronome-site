import React from 'react'
import  MetronomeProvider from "../contexts/MetronomeProvider";
import Metronome from "./Metronome";
import NavBar from "./NavBar";
import "../css/App.css";

export default function Wrapper() {
  return (
    <MetronomeProvider>
      <div className="wrapper">
          <NavBar/>
          <Metronome/>
      </div>
    </MetronomeProvider>
  )
}
