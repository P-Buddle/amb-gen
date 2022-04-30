import React from 'react'
import './nav.css'
import { useState } from 'react'
import {BsArrowDownCircle} from 'react-icons/bs'

const Nav = () => {
    const [show, setShow] = useState(true);

  return (
    <nav>

        <a href='#shapes'><BsArrowDownCircle/></a>
        
    </nav>


  )
}

export default Nav