import api from "./config";

export const signUp = async (user) => {
    try {
        const response = await api.post("/auth/signup", user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const login = async (user) => {
    try {
        const response = await api.post("/login", user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}