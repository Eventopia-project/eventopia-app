import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import Carrousel from '../../components/Carrousel/Carrousel'
import Categories from '../../components/Categories/Categories'
import { getEvents } from '../../services/events'
import './Home.css'

function Home() {
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
      return (
            <div key={index} className="event-item">
              <div>
                date: {dayjs(eventItem.date).format('MM/YYYY')}
                location: {eventItem.location}
              </div>
              <h2>{eventItem.name}</h2>
              <p>{eventItem.description}</p>
              <p>{eventItem.price}</p>
            </div>  
      )
    })
  }

  return (
    <div className="container">
      <Carrousel />
      { display() }
      <Categories />
    </div>)
}

export default Home
