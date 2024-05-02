import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import React from 'react'
import { getEvents } from '../../services/events'
import { Element } from 'react-scroll'
import './ComingEvents.css'

function ComingEvents() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getEventsData()
  }, [])

  async function getEventsData() {
    const response = await getEvents()
    setEvents(response)
  }

  const display = () => {
    return events.map((eventItem, index) => {
      console.log(eventItem.date_event)
      return (
        <div key={index} className="event-item">
          <div className='card-date'>
            <span className='month'>{dayjs(eventItem.date_event).format('MMM')}</span>
            <span className='year'>{dayjs(eventItem.date_event).format('YYYY')}</span>
          </div>
          <div className="card-description">
            <div className='card-title'>
              <h2>{eventItem.name}</h2>
              <span className='location-img'>
                <span>
                  <img src="/public/images/icons/map-pin.svg" />
                </span>
                {eventItem.location}
              </span>
              <span>{eventItem.price}</span>
            </div>
            <p className='description'>{eventItem.description}</p>
          </div>
        </div>
      )
    })
  }
  return (
        <Element name="events-element" id="nextContent" className='events'>
          <h2 className='events__h1 josefin-sans-font'>Upcoming Events</h2>
          { display() }
        </Element>
      )
}

export default ComingEvents
