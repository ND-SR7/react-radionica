import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="App">
      <div id="root">
        <img alt="logo" src="./assets/images/VegaItnovi.png"/>
        <button className="go_button" onClick={() => navigate("/personal")}>Go to the app</button>
      </div>
    </div>
  )
}

export default HomePage
