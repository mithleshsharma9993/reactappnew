import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'

function App() {
  const name ='dev'
  const st={width:'200px',height:'200px',border:'1px solid red'}

  return (
    <>
    <div style={st}>
      <Footer data={name}/>
      <div>inside div <span>fghj</span> <div>ghjk</div>
      <div>2</div>
      <div>mithlesh</div>

      <div>3</div></div>
    </div>
</>)
}

export default App
