import { useState } from 'react'
import {Header} from './components/dashboard/Header'
import LineChart from './components/line/LineChart'
import {Statholder} from './components/statholder/Statholder'
import { Navbar } from './components/nav/Navbar'

import './App.css'

function App() {


  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
      setMenu(prev => !prev)
  }



  return (
    <div className="App">

      <div className="nav-side-mobile">
        {menu && <Navbar />}
      </div>

      <div className="nav-side-desktop">
        <Navbar />
      </div>

      <div className="right-side">

        <Header
          toggleMenu={toggleMenu}
          ham={menu}
        />

        <div className="stat-nav">
          {menu && <div className="overlay" onClick={toggleMenu}></div>}
          <Statholder />
        </div>
        
      </div>



    </div>
  )
}

export default App
