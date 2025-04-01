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
    if(Array.isArray(response)) {
      setEvents(response)
    } else {
      setEvents([])
    }
  }

  const display = () => {
    if(!Array.isArray(events)) {
      return <p className='no-events'>No events</p>
    }
    return events.map((eventItem, index) => {
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
                  <img src="/images/icons/map-pin.svg" />
                </span>
                {eventItem.location}
              </span>
              <span className='card-price baloo-2-font'>{eventItem.price} €</span>
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
