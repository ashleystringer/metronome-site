import React from 'react'
import NavCard from './NavCard'

export default function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <NavCard/>
            </li>
            <li>
                <NavCard/>
            </li>
            <li>
                <NavCard/>
            </li>
            <li>
                <NavCard/>
            </li>
        </ul>
    </nav>
  )
}
