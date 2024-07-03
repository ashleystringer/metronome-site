import React from 'react'
import Metronome from "./Metronome";
import NavBar from "./NavBar";
import "../css/App.css";

export default function Wrapper() {
  return (
    <div className="wrapper">
        <NavBar/>
        <Metronome/>
    </div>
  )
}
