import React from 'react'
import './component_A.css'
import { useState } from 'react';
import { Helmet } from 'react-helmet';



const Component_A = () => {

  const [style, setStyle] = useState("body { background: linear-gradient(to right, var(--color-primary), var(--color-bg));}");

  return (
    <div className='container container__comp1'>
      <Helmet>
        <style>{style}</style>
      </Helmet>
      
        <button className='btn' onClick={() => setStyle(
          "body { background: linear-gradient(to right, #24243e, #302b63, #0f0c29);}",
         

          )}>
        Night</button>
        <button className='btn' onClick={() => setStyle(
          "body { background: linear-gradient(to right, var(--color-primary), var(--color-bg));}",
          )}>
        Day</button>

        <div className='color__shift'>
          <h1></h1>
        </div>

    </div>
      


  )
}

export default Component_A