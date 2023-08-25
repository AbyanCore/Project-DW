import Axios from "../Config/Axios";
import Cookies from "js-cookie";

const Login = async (username: string, password: string) => {
    try {
        const data = await Axios.post("/login", { username, password });
        Cookies.set("token", data.data.token, { expires: 1 });
        return data;
    } catch (error) {
        return error;
    }
};

const Register = async (username: string, password: string, email: string) => {
    try {
        const data = await Axios.post("/register", {
            username,
            role_id: 2,
            email,
            password,
        });

        return data;
    } catch (error) {
        return error;
    }
};

const Logout = async () => {
    try {
        const data = await Axios.get("/logout", {
            headers: { token: Cookies.get("token") },
        });

        return data;
    } catch (error) {
        return error;
    }
};

export { Login, Register, Logout };
