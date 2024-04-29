import React from 'react'

const EventCard = ({ name, description, date, location, price }) => {
  return (
    <div className="event-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default EventCard
