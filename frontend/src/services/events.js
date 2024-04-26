import api from "./config";

export const getEvents = async () => {
    try {
        const response = await api.get("/event/events");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getEvent = async (id) => {
    try {
        const response = await api.get(`/event/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}