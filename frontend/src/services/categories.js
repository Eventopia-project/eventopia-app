import api from "./config";

export const getCategories = async () => {
    try {
        const response = await api.get("/category/categories");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getCategory = async (id) => {
    try {
        const response = await api.get(`/category/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createCategory = async (category) => {
    try {
        const response = await api.post("/category", category);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateCategory = async (id, category) => {
    try {
        const response = await api.put(`/category/${id}`, category);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}