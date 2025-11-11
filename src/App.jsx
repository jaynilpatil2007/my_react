import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  let [color, setColor] = useState("blue")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
    </>
  )
}

export default App
