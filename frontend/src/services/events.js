import api from './config'

export const getEvents = async () => {
  try {
    const response = await api.get('/event/events')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getEvent = async (id) => {
  try {
    const response = await api.get(`/event/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createEvent = async (event) => {
  try {
    const response = await api.post('/event', event)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const updateEvent = async (id, event) => {
  try {
    const response = await api.put(`/event/${id}`, event)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteEvent = async (id) => {
  try {
    const response = await api.delete(`/event/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const filterByCategories = async (id) => {
  try {
    const response = await api.get(`/event/category/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
