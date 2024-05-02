import EventCard from '../EventCard/EventCard'
import './UserEvents.css'

function UserEvents({ events, optionsButton }) {
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
