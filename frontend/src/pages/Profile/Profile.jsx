import React, { useState, useEffect } from 'react'
import { getProfile } from '../../services/users'
import { createEvent } from '../../services/events'
import { getCategories } from '../../services/categories'
import UserEvents from '../../components/UserEvents/UserEvents'
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({})
  const [userId, setUserId] = useState(0)
  const [ownerId, setOwnerId] = useState(0)
  const [categoryId, setCategoryId] = useState(0)
  const [categories, setCategories] = useState([])
  // variables de estado del formulario
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isSend, setIsSend] = useState(false)

  const getProfileData = async () => {
    const result = await getProfile()
    setUser(result)
    setUserId(user.id)
    setOwnerId(user.id)
  }

  useEffect(() => {
    getProfileData()
  }, [isSend])

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

  const handleCategory = (event) => {
    setCategoryId(event.target.value);
  }

  useEffect(() => {
    const showAllCategories = async () => {
      const categories = await getCategories()
      setCategories(categories)
    }
    showAllCategories()
  }, [])

  useEffect(() => {
  }, [categoryId]);
  

  const categoryOptions = categories?.map((category, index) => {
    return (
      <option key={index} value={category.id} name="category">{category.name}</option>
    )
  })

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await createEvent({name, description, date, location, price, categoryId})
      setIsSend(!isSend)
      console.log('se ha añadido correctamente');
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className='container-profile'>
      <section className='section-profile'>
        <h2 className='section-profile__h2'>Create your event</h2>
        <form onSubmit={handleSubmit} className='section-profile__form'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleName}/>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" onChange={handleDescription}/>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" onChange={handleDate}/>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" onChange={handleLocation}/>
          <label htmlFor="category">
            Category
            <select name="category" id="category" onChange={handleCategory}>
              <option selected>Select your category</option>
              { categoryOptions }
            </select>
            </label>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price"  onChange={handlePrice}/>
          <button type='submit' disabled={!isValid}>Create event</button>
        </form>
      </section>
      <div className='events-container'>
        <div className='your-events'>
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
