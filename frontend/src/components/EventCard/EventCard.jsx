import './EventCard.css';
import dayjs from 'dayjs';
const EventCard = ({ name, description, date, location, price, isButtonRender }) => {
  return (
    <div className="event-card">
      <h2>{name}</h2>
      <div className="header-card">
        <span className="date-card">
          <img src="/images/icons/calendar.svg" alt="calendar" />
          {dayjs(date).format("YYYY-MM-DD")}
        </span>
        <span className="location-card">
          <img src="/images/icons/map-pin.svg" alt="map-pin" />
          {location}
        </span>
        <span className="price-card">{price} €</span>
      </div>
      <p className="description-card">{description}</p>
      { isButtonRender &&
        <>
          <button className="edit-button">Edit event</button>
          <button className="delete-button">Delete event</button>
        </>
      }
    </div>
  )
}

export default EventCard
