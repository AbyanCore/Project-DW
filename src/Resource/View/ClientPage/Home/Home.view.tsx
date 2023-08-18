import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Rating,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ClientPageContext } from "../Client.page";
import { motion } from "framer-motion";

const Homeview = () => {
    const data = useLoaderData();
    const [wisataselected, setwisataselected] = useContext(ClientPageContext);

    const [EnableSidebar, setEnableSidebar] = useState(true);

    return (
        <div className="w-full h-full">
            <motion.div
                key={wisataselected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                }}
            >
                <img
                    className="absolute w-full h-full -z-10 blur-[2px] scale-125 bg-cover "
                    src={data?.find((item) => item.id == wisataselected)?.img}
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
                <head className="absolute w-full p-2 flex flex-row items-center justify-center">
                    <Card className="flex flex-row w-1/3 p-2 m-2 justify-around items-center rounded-lg shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <span>
                            <Link to="/Home">Home</Link>
                        </span>
                        <hr className="border-l-2 border-l-gray-200 h-6" />
                        <span>
                            <Link to="/Detail">Detail</Link>
                        </span>
                        <hr className="border-l-2 border-l-gray-200 h-6" />
                        <span>
                            <Link to="/Description">Description</Link>
                        </span>
                        <hr className="border-l-2 border-l-gray-200 h-6" />
                        <span>
                            <Link to="/Feedback">Feedback</Link>
                        </span>
                    </Card>
                    <div className="flex flex-row justify-around items-center mx-5">
                        <Button className="mr-2">Sign up</Button>
                        <Button
                            variant="outlined"
                            className="mr-2"
                            color="white"
                        >
                            Sign in
                        </Button>
                    </div>
                </head>
            </motion.div>
            <main className="flex flex-row w-full h-full">
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
                    <div className="w-full h-full flex flex-col justify-center p-20">
                        <h1 className="text-6xl font-bold text-white">
                            {data[wisataselected]?.title}
                        </h1>
                        <p className="text-2xl font-semibold text-white">
                            {data[wisataselected]?.description}
                        </p>
                    </div>
                </motion.div>
                <div
                    className={`absolute h-full duration-500 right-0 overflow-y-auto w-80 bg-gradient-to-l from-black to-transparent p-2 
                        ${EnableSidebar ? "opacity-100" : "opacity-0"}`}
                >
                    {data
                        .filter((item) => item.id != wisataselected)
                        .map((item) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, x: 200 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        duration: 1,
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10,
                                    }}
                                    drag="x"
                                    dragConstraints={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <Card
                                        className="flex flex-col w-full m-4 items-center rounded-lg shadow-lg bg-transparent shadow-black/5 saturate-100 backdrop-blur-sm "
                                        onClick={() =>
                                            setwisataselected(item.id)
                                        }
                                        shadow={true}
                                    >
                                        <img
                                            className="w-full rounded-t-lg rounded-r-lg"
                                            src={item.img}
                                        />
                                        <h1 className="pt-2 font-bold text-md text-white">
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
            <footer></footer>
        </div>
    );
};

export default Homeview;
