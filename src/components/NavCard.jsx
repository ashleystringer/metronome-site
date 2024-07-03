import React from 'react'
import "../css/NavBar.css";

export default function NavCard({icon, callback}) {

    /*
        <div onClick={callback}>
            <img/>
        </div>
    */

  return (
    <div className='nav-card'>{icon}</div>
  )
}
