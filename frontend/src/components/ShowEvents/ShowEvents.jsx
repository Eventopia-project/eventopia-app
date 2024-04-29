import React from 'react'
import { useEffect, useState } from 'react'
import { getEvents } from '../../services/events'
import EventCard from '../../components/EventCard/EventCard'
import './ShowEvents.css'

function ShowEvents({ categoryId }) {
  const [events, setEvents] = useState([])
  useEffect(() => {
    getEventsData()
  }, [categoryId])

  async function getEventsData() {
    const response = await getEvents()
    setEvents(response)
  }

function getFilteredEvents(categoryId) {

    return categoryId && events?.filter((elem, idx) => {
      return elem.categoryId === categoryId
    }).map((event, index) => {
      return <EventCard key={index}
                        name={event.name}
                        description={event.description}
                        date={event.date_event}
                        location={event.location}
                        price={event.price}/>
    })
}

  function showAllEvents() {
    return events?.map((event, index) => {
      return <EventCard key={index}
                        name={event.name}
                        description={event.description}
                        date={event.date_event}
                        location={event.location}
                        price={event.price}/>
    })
  }
  return (
    <div className="all-events">
      {categoryId === '' ? showAllEvents() : getFilteredEvents(categoryId)}
    </div>
  )
}

export default ShowEvents
