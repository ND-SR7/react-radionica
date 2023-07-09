import React from 'react'
import NavTab from '../../Components/NavTab'
import PersonalInfo from '../../Components/PersonalInfo'

const PersonalPage = () => {
  return (
    <>
        <section className="container header">
            <h1>Contacts</h1>
        </section>
        <section className="container global">
          <NavTab/>
          <PersonalInfo firstName="Pera" lastName="Peric" email="pera@uns.ac.rs"/>
        </section>
    </>
  )
}

export default PersonalPage
