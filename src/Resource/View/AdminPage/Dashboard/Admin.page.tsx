import { Outlet } from "react-router-dom";

const tokenvalidator = (): boolean => {
    let valid = false;

    // Cookies.get("token");

    return valid;
};

const Adminpage = () => {
    if (!tokenvalidator()) window.location.href = "/UnAuthorized";
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Adminpage;
