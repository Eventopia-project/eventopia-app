import React from 'react'
import { useEffect, useState } from 'react'
import { getCategories } from '../../services/categories'
import { getEvents } from '../../services/events'
import EventCard from '../../components/EventCard/EventCard'
import './Categories.css'
function Categories() {
  const [categories, setCategories] = useState([])
  const [events, setEvents] = useState([])
  useEffect(() => {
    getCategoriesData()
    getEventsData()
  }, [])

  async function getCategoriesData() {
    const response = await getCategories()
    return setCategories(response)
  }
  async function getEventsData() {
    const response = await getEvents()
    return setEvents(response)
  }

  function showAllCategories() {
    return categories.map((category, index) => {
      return <button key={index}>{category.name}</button>
    })
  }
  function showAllEvents() {
    return events.map((event, index) => {
      return <EventCard key={index}
                        name={event.name}
                        description={event.description}
                        date={event.date_event}
                        location={event.location}
                        price={event.price}/>
    })
  }
  return (
    <>
      <div>Categories</div>
      <div className="all-categories">
        {showAllCategories()}
      </div>
      <div className="all-events">
        {showAllEvents()}
      </div>
    </>
  )
}

export default Categories
