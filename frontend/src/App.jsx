import { useState } from 'react'
import './App.css'
import Right from './compo/Right'
import Left from './compo/Left'
import Below from './compo/Below'
function App() {

  return (
    <><div className='grid grid-cols-3'>
        <Left ></Left>
        <Right></Right>
      </div>
      <Below></Below>
    
    </>
  )
} 

export default App
