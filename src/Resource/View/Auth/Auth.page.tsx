import { Outlet } from "react-router-dom";

const validator = (): boolean => {
    let valid = false;

    // Cookies.get("token");

    return valid;
};

const Authpage = () => {
    if (validator()) window.location.href = "/dashboard";
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Authpage;
