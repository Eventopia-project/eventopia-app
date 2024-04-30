import { useLocation } from "react-router-dom"

const EventCard = ({ name, description, date, location, price, isButtonRender }) => {
  const locationPath = useLocation();
  const showOnButtons = ['/profile'];
  return (
    <div className="event-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>Price: {price} €</p>
      { isButtonRender &&
        <>
          <button>Edit event</button>
          <button>Delete event</button>
        </>
      }
    </div>
  )
}

export default EventCard
