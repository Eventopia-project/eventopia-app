import React, { useState, useEffect } from 'react'
import { getProfile } from '../../services/users'
import UserEvents from '../../components/UserEvents/UserEvents'

function Profile() {
  const [user, setUser] = useState({})

  const getProfileData = async () => {
    const result = await getProfile()
    setUser(result)
  }
  useEffect(() => {
    getProfileData()
  }, [])
  console.log(user)
  return (
    <div>
      <section>
        <h2>Create your event</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" />
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" />
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" />
          <button>Create event</button>
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
