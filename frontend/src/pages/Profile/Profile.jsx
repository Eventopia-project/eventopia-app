import React, { useState, useEffect } from 'react'
import { getProfile } from '../../services/users'
import UserEvents from '../../components/UserEvents/UserEvents'

function Profile() {
  const [user, setUser] = useState({})
  // variables de estado del formulario
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [isValid, setIsValid] = useState(false)

  const getProfileData = async () => {
    const result = await getProfile()
    setUser(result)
  }
  useEffect(() => {
    getProfileData()
  }, [])

  useEffect(() => {
    checkValidity()
  }, [date, description, location, name, price])

  function handleName(e) {
    setName(e.target.value)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  function handleDate(e) {
    setDate(e.target.value)
  }

  function handleLocation(e) {
    setLocation(e.target.value)
  }

  function handlePrice(e) {
    setPrice(e.target.value)
  }

  const checkValidity = () => {
    if (date !== '' &&
        description !== '' &&
        location !== '' &&
        name !== '' &&
        price !== ''
        ) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
  }

  console.log(user)
  return (
    <div>
      <section>
        <h2>Create your event</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleName}/>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" onChange={handleDescription}/>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" onChange={handleDate}/>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" onChange={handleLocation}/>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price"  onChange={handlePrice}/>
          <button type='submit' disabled={!isValid}>Create event</button>
        </form>
      </section>
      <div className='events-container'>
        <div>
          <h2>Your events</h2>
          <UserEvents events={user?.owner} optionsButton={true} />
        </div>
        <div>
          <h2>Your assists</h2>
          <UserEvents events={user?.events} optionsButton={false}/>
        </div>
      </div>
    </div>
  )
}

export default Profile
