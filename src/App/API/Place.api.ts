import Axios from "../Config/Axios";

const GetPlaces = async () => {
    try {
        const data = await Axios.get("/places");
        return data;
    } catch (error) {
        return error;
    }
};

const GetPlace = async (id: string) => {
    try {
        const data = await Axios.get(`/places/${id}`);
        return data;
    } catch (error) {
        return error;
    }
};

const UpdatePlace = async (data: any) => {
    try {
        const res = await Axios.put(`/places/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
};

const DeletePlace = async (id: string) => {
    try {
        const data = await Axios.delete(`/places/${id}`);
        return data;
    } catch (error) {
        return error;
    }
};

export { GetPlaces, GetPlace, UpdatePlace, DeletePlace };
