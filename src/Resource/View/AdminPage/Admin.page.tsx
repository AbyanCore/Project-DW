import { RxHamburgerMenu } from "react-icons/rx";
import { Card } from "@material-tailwind/react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const tokenvalidator = (): boolean => {
    let valid = true;

    // Cookies.get("token");

    return valid;
};

const Adminpage = () => {
    if (!tokenvalidator()) window.location.href = "/UnAuthorized";

    const [sideopen, setsideopen] = useState(true);
    const [content, setcontent] = useState("Dashboard");

    const onLogoutHandler = () => {};

    return (
        <div className="flex flex-row w-screen h-screen">
            <div
                className={`sticky h-full flex-shrink  bg-[#FAF1E4] duration-100 transition-all ${
                    sideopen
                        ? "translate-x-0 w-max p-4"
                        : "-translate-x-[100px] w-0 p-0"
                }`}
            >
                <Card className="p-2 mb-10 bg-[#435334] shadow-l shadow-[#9EB384]">
                    <h1 className="font-bold text-[#CEDEBD] text-center">
                        Admin Panel
                    </h1>
                </Card>
                <div className="flex flex-col items-center gap-2 p-2">
                    <Link
                        to="/dashboard/main"
                        onClick={() => setcontent("Dashboard")}
                        className="p-2 w-full text-center hover:saturate-200 hover:scale-105 duration-100 font-bold text-[#435334] rounded-xl cursor-pointer"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/dashboard/managerole"
                        onClick={() => setcontent("Role")}
                        className="p-2 w-full text-center hover:saturate-200 hover:scale-105 duration-100 font-bold text-[#435334] rounded-xl cursor-pointer"
                    >
                        Role
                    </Link>
                    <Link
                        to="/dashboard/managecategory"
                        onClick={() => setcontent("Category")}
                        className="p-2 w-full text-center hover:saturate-200 hover:scale-105 duration-100 font-bold text-[#435334] rounded-xl cursor-pointer"
                    >
                        Category
                    </Link>
                    <Link
                        to="/dashboard/manageuser"
                        onClick={() => setcontent("User")}
                        className="p-2 w-full text-center hover:saturate-200 hover:scale-105 duration-100 font-bold text-[#435334] rounded-xl cursor-pointer"
                    >
                        User
                    </Link>
                    <Link
                        to="/dashboard/managewisata"
                        onClick={() => setcontent("Wisata")}
                        className="p-2 w-full text-center hover:saturate-200 hover:scale-105 duration-100 font-bold text-[#435334] rounded-xl cursor-pointer"
                    >
                        Wisata
                    </Link>
                    <hr className="w-full border-[#435334] border-b-1" />
                    <Link
                        to="/Home"
                        className="p-2 w-full text-center hover:saturate-200 hover:scale-105 duration-100 font-bold text-[#435334] rounded-xl cursor-pointer"
                    >
                        Home
                    </Link>
                    <button
                        onClick={onLogoutHandler}
                        className=" p-2 w-full text-center hover:saturate-200 hover:scale-105 duration-100 font-bold text-[#435334] rounded-xl cursor-pointer"
                    >
                        Log out
                    </button>
                </div>
            </div>
            <div className="flex flex-col flex-grow w-full h-full">
                <div className="flex flex-row items-center gap-10 p-4 bg-[#9EB384]">
                    <div
                        className="p-1 scale-125 border-[#FAF1E4] border-2 rounded-xl cursor-pointer hover:scale-150 duration-100"
                        onClick={() => setsideopen(!sideopen)}
                    >
                        <RxHamburgerMenu color="#FAF1E4" />
                    </div>
                    <h1 className="text-2xl font-bold text-[#435334]">
                        {content}
                    </h1>
                </div>
                <div className="w-full h-full overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Adminpage;
