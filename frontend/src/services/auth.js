import api from "./config";

export const signUp = async (user) => {
    try {
        const response = await api.post("/signup", user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const login = async (user) => {
    try {
        console.log(user)
        const response = await api.post("/auth/login", user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}