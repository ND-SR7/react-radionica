import React, { useState } from 'react'
import ContactsList from '../../Components/ContactsList'
import NavTab from '../../Components/NavTab'

const ContactsPage = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
    <section className="container header">
        <h1>Contacts</h1>
   </section>
   <section className="container global">
    <button onClick={() => setCounter(prevState => prevState + 1)}>{counter}</button>
     <NavTab/>
     <ContactsList/>
    </section>
    </>
  )
}

export default ContactsPage
