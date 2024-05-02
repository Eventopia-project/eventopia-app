import api from "./config";

export const getUsers = async () => {
    try {
        const response = await api.get("/users");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getUser = async (id) => {
    try {
        const response = await api.get(`/user/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createUser = async (user) => {
    try {
        const response = await api.post("/user", user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateUser = async (id, user) => {
    try {
        const response = await api.put(`/user/${id}`, user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await api.delete(`/user/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const getProfile = async () => {
    try {
        const response = await api.get("/user/profile",{
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};