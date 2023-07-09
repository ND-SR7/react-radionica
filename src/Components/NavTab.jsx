import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavTab = () => {
  const navigate = useNavigate()
  return (
    <section className="container navigation">
        <button className={window.location.pathname === "/personal" ? "active" : ""} onClick={() => navigate("/personal")}>Personal Info</button>
        <button className={window.location.pathname === "/contacts" ? "active" : ""} onClick={() => navigate("/contacts")}>Contacts</button>
    </section>
  )
}

export default NavTab
