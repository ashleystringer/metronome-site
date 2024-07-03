import React from 'react'
import NavCard from './NavCard'
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <nav className='nav-bar'>
        <ul>
            <li>
                <NavCard icon={"Volume Icon"}/>
            </li>
            <li>
                <NavCard icon={"Audio Type Icon"}/>
            </li>
            <li>
                <NavCard icon={"Tap Icon"}/>
            </li>
            <li>
                <NavCard icon={"Custom Icon"}/>
            </li>
        </ul>
    </nav>
  )
}
