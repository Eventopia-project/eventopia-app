import { useEffect, useState } from 'react'
import EventCard from '../EventCard/EventCard'
import { getProfile } from '../../services/users'
import './UserEvents.css'

function UserEvents({ events, optionsButton }) {
  // const [user, setUser] = useState({})
  // useEffect(() => {
  //   getProfileData()
  // }, [userId])

  // const getProfileData = async () => {
  //   const result = await getProfile()
  //   setUser(result)
  // }
  function getFilteredEventsUser() {
    return  events && events.map((event, index) => {
      return <EventCard key={index}
                        name={event.name}
                        description={event.description}
                        date={event.date_event}
                        location={event.location}
                        price={event.price}
                        isButtonRender={optionsButton}
                        />
    })
  }

  return <div>
    <div className="all-events">
      {(events === undefined || events.length === 0) ? 'You don`t have events.' : getFilteredEventsUser()}
    </div>
  </div>
}

export default UserEvents
