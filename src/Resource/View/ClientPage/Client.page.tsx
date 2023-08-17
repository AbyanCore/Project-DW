import { Outlet } from "react-router-dom";
import Homeview from "./Home/Home.view";

const Clientpage = () => {
    return (
        <div>
            <Outlet context={<Homeview />} />
        </div>
    );
};

export default Clientpage;
