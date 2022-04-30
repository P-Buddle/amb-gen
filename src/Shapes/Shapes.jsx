import React from 'react'
import './shapes.css'
import useSound from 'use-sound';
import { useState } from 'react';
import amb1 from '../sounds/note1.mp3'
import amb2 from '../sounds/note2.mp3'
import amb3 from '../sounds/note3.mp3'
import amb4 from '../sounds/note4.mp3'
import amb5 from '../sounds/note5.mp3'
import amb6 from '../sounds/note6.mp3'
import amb7 from '../sounds/note7.mp3'

const Shapes = () => {

    const [play1] = useSound(amb1);
    const [play2] = useSound(amb2);
    const [play3] = useSound(amb3);
    const [play4] = useSound(amb4);
    const [play5] = useSound(amb5);
    const [play6] = useSound(amb6);
    const [play7] = useSound(amb7);

    const [isHovering, setIsHovering] = useState(
        false
      );
    


  return (
    <section id='shapes'>
        <div className='container container__shapes rows__3'>
            <div className='circle circle1'>
                <div className='child' onMouseEnter={() => {setIsHovering(true); play1();}}></div>
                
            </div>
            <div className='circle circle2'>
                <div className='child' onMouseEnter={() => {setIsHovering(true); play2();}}></div>
                
            </div>

            <div className='circle circle3'>
                <div className='child' onMouseEnter={() => {setIsHovering(true); play3();}}></div>
            </div>

        </div>

        <div className='container container__shapes rows__4'>
            <div className='circle circle1'>
                <div className='child' onMouseEnter={() => {setIsHovering(true); play4();}}></div>
                
            </div>
            <div className='circle circle2'>
                <div className='child' onMouseEnter={() => {setIsHovering(true); play5();}}></div>
                
            </div>

            <div className='circle circle3'>
                <div className='child' onMouseEnter={() => {setIsHovering(true); play6();}}></div>
            </div>

            <div className='circle circle3'>
                <div className='child' onMouseEnter={() => {setIsHovering(true); play7();}}></div>
            </div>
        </div>

        <div className='container container__shapes rows__3'>
            <div className='circle circle1'>
                <div className='child' onMouseEnter={() => {setIsHovering(true); play1();}}></div>
                
            </div>
            <div className='circle circle2'>
                <div className='child' onMouseEnter={() => {setIsHovering(true); play2();}}></div>
                
            </div>

            <div className='circle circle3'>
                <div className='child' onMouseEnter={() => {setIsHovering(true); play3();}}></div>
            </div>
        </div>
        
    </section>
    
  )
}

export default Shapes