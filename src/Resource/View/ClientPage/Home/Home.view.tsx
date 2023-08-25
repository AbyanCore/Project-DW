import { AiOutlineDashboard } from "react-icons/ai";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, Card, Rating } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { ClientPageContext } from "../Client.page";
import { motion } from "framer-motion";

const Homeview = () => {
    const data: Array<any> = useLoaderData() as Array<any>;
    const [wisataselected, setwisataselected] = useContext(ClientPageContext);

    const [ScrollY, setScrollY] = useState(0);
    const [sidebaropen, setsidebaropen] = useState(false);
    const [navopen, setnavopen] = useState(false);

    const openNavHandler = () => {
        setnavopen(!navopen);
    };

    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollY(window.scrollY);
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <div className="relative flex flex-col w-full h-full overflow-hidden">
            <motion.div
                key={wisataselected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.2,
                }}
            >
                <img
                    className="absolute -z-10 w-screen h-screen blur-[2px] scale-125 object-cover object-center bg-contain"
                    src={
                        data?.find((item: any) => item.id == wisataselected)
                            ?.img
                    }
                ></img>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                }}
            >
                <div className="absolute z-[11] w-full scale-100 h-max xl:scale-0 xl:h-0 bg-white shadow-lg bg-opacity-60 shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div className="flex flex-row justify-between">
                        <RxHamburgerMenu
                            className="w-10 h-10 p-2"
                            onClick={openNavHandler}
                        />
                        <div className="flex flex-row">
                            <AiOutlineDashboard
                                className="w-10 h-10 p-2"
                                onClick={() => navigate("/dashboard")}
                            />
                            <BsReverseLayoutSidebarReverse
                                className="w-10 h-10 p-2"
                                onClick={() => setsidebaropen(!sidebaropen)}
                            />
                        </div>
                    </div>
                    {navopen && (
                        <div className="flex flex-col justify-center w-full h-full pt-2 pb-2 pl-10 pr-10">
                            <span
                                onClick={openNavHandler}
                                className="p-2 duration-100 rounded-lg hover:border-white hover:border-2"
                            >
                                <Link to="/Home">Home</Link>
                            </span>
                            <span
                                onClick={openNavHandler}
                                className="p-2 duration-100 rounded-lg hover:border-white hover:border-2"
                            >
                                <Link to="/Description">Description</Link>
                            </span>
                            <span
                                onClick={openNavHandler}
                                className="p-2 duration-100 rounded-lg hover:border-white hover:border-2"
                            >
                                <Link to="/Detail">Detail</Link>
                            </span>
                            <span
                                onClick={openNavHandler}
                                className="p-2 duration-100 rounded-lg hover:border-white hover:border-2"
                            >
                                <Link to="/Feedback">Feedback</Link>
                            </span>
                            <div className="flex flex-row w-full h-max">
                                <Button
                                    className="flex-1 mr-2"
                                    onClick={() => navigate("/auth/register")}
                                >
                                    Sign up
                                </Button>
                                <Button
                                    variant="outlined"
                                    className="flex-1 mr-2"
                                    color="white"
                                    onClick={() => navigate("/auth/login")}
                                >
                                    Sign in
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
                <head className="absolute z-10 flex flex-row items-center justify-center w-full h-0 xl:h-max xl:p-2">
                    <Card className="flex flex-row items-center justify-around scale-0 bg-white rounded-lg shadow-lg xl:scale-100 bg-opacity-60 shadow-black/5 saturate-200 backdrop-blur-sm">
                        <BsReverseLayoutSidebarReverse
                            className="w-10 h-10 p-2"
                            onClick={() => setsidebaropen(!sidebaropen)}
                        />
                    </Card>
                    <Card className="flex flex-row items-center justify-around w-1/3 p-2 m-2 scale-0 bg-white rounded-lg shadow-lg xl:scale-100 bg-opacity-60 shadow-black/5 saturate-200 backdrop-blur-sm">
                        <span>
                            <Link to="/Home" className="font-bold text-black">
                                Home
                            </Link>
                        </span>
                        <hr className="h-6 border-l-2 border-l-gray-200" />
                        <span>
                            <Link to="/Description">Description</Link>
                        </span>
                        <hr className="h-6 border-l-2 border-l-gray-200" />
                        <span>
                            <Link to="/Detail">Detail</Link>
                        </span>
                        <hr className="h-6 border-l-2 border-l-gray-200" />
                        <span>
                            <Link to="/Feedback">Feedback</Link>
                        </span>
                    </Card>
                    <Card className="flex flex-row items-center justify-around scale-0 bg-white rounded-lg shadow-lg xl:scale-100 bg-opacity-60 shadow-black/5 saturate-200 backdrop-blur-sm">
                        <AiOutlineDashboard
                            className="w-10 h-10 p-2"
                            onClick={() => navigate("/dashboard")}
                        />
                    </Card>
                    <Card className="flex flex-row items-center justify-around p-2 m-2 scale-0 bg-white rounded-lg shadow-lg xl:scale-100 bg-opacity-60 shadow-black/5 saturate-200 backdrop-blur-sm">
                        <button
                            className="mx-2"
                            onClick={() => navigate("/auth/register")}
                        >
                            Sign up
                        </button>
                        <hr className="h-6 border-l-2 border-l-gray-200" />
                        <button
                            className="mx-2"
                            color="white"
                            onClick={() => navigate("/auth/login")}
                        >
                            Sign in
                        </button>
                    </Card>
                </head>
            </motion.div>
            <main className="flex flex-row items-center justify-center w-full h-full xl:justify-normal">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{
                        duration: 1,
                    }}
                    drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <div className="flex flex-col items-center justify-center w-full h-full xl:p-20">
                        <h1 className="text-5xl font-bold text-white md:text-6xl ">
                            {
                                data?.find(
                                    (item: any) => item.id == wisataselected
                                )?.title
                            }
                        </h1>
                        <p className="font-semibold text-center text-white md:text-2xl">
                            {
                                data?.find(
                                    (item: any) => item.id == wisataselected
                                )?.description
                            }
                        </p>
                    </div>
                </motion.div>
                <div
                    className={`${
                        sidebaropen ? "translate-x-[500px]" : "translate-x-0"
                    } absolute top-0 z-10 sm:h-[85%] h-screen duration-500 sm:right-0 overflow-y-auto w-screen sm:w-80 bg-gradient-to-bl from-black to-transparent from-[10%] to-[50%] p-2`}
                >
                    {data
                        .filter((item) => item.id != wisataselected)
                        .map((item) => {
                            return (
                                <motion.div
                                    initial={{ x: 200 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 100,
                                    }}
                                    whileInView={{
                                        x: ScrollY,
                                    }}
                                >
                                    <Card
                                        className="flex flex-col w-full sm:m-4 items-center sm:rounded-l-lg rounded-lg shadow-lg bg-transparent shadow-black/5 saturate-100 backdrop-blur-sm "
                                        onClick={() =>
                                            setwisataselected(item.id)
                                        }
                                        shadow={true}
                                    >
                                        <img
                                            className="w-full rounded-lg sm:rounded-l-lg"
                                            src={item.img}
                                        />
                                        <h1 className="pt-2 font-bold text-white text-md">
                                            {item.title}
                                        </h1>
                                        <Rating
                                            className="pb-2"
                                            unratedColor="amber"
                                            ratedColor="amber"
                                            readonly
                                        />
                                    </Card>
                                </motion.div>
                            );
                        })}
                </div>
            </main>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute -bottom-1"
            >
                <path
                    fill="black"
                    fill-opacity="1"
                    d="M0,96L48,133.3C96,171,192,245,288,266.7C384,288,480,256,576,229.3C672,203,768,181,864,176C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
};

export default Homeview;
