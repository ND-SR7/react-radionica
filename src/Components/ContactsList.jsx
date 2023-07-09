import React, { useState } from 'react'

const ContactsList = () => {
  const contacts = [{firstName: "Pera", email: "pera@gmail.com", isFavorite: true}, {firstName: "Mile", email: "mile@gmail.com", isFavorite: false}]
  const [favorites, setFavorite] = useState(contacts)
  const [showAll, setShowAll] = useState(true)
  const showContacts = favorites.map((favorite) => 
    <tr>
        <td>{favorite.firstName}</td>
        <td>{favorite.email}</td>
        <td></td>
        <td><button>{favorite.isFavorite ? "Remove from favorites" : "Add to favorites"}</button></td>
    </tr>);
  return (
    <>
    <section className="container contacts">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th><button>+ Add new</button></th>
                    <button onClick={() => {
                        setShowAll(prevState => !prevState)
                        showAll ? setFavorite(contacts.filter(contact => contact.isFavorite)) : setFavorite(contacts)}}>
                        {showAll ? "Show all" : "Show favorites"}
                    </button>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Stefan</td>
                    <td>stefan@vega.dev</td>
                    <td></td>
                    <td>
                        <button>Add to favorites</button>
                    </td>
                </tr>
                {showContacts}
            </tbody>
        </table>
    </section>
    </>
  )
}

export default ContactsList
