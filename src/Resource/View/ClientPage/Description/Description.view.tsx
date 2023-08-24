import {
    SlSocialTwitter,
    SlSocialInstagram,
    SlSocialFacebook,
} from "react-icons/sl";
import { useContext } from "react";
import { ClientPageContext } from "../Client.page";
import { useLoaderData } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Descriptionview = () => {
    const data: Array<any> = useLoaderData() as Array<any>;
    const wisataselected = useContext(ClientPageContext);

    return (
        <div className="w-full h-full bg-black py-10">
            <div className="w-full h-full flex justify-evenly items-center flex-col">
                <div className="w-full h-full flex md:flex-row flex-col items-center">
                    <Carousel className="md:w-1/2 flex-1 w-full h-2/3 md:rounded-r-3xl">
                        <img
                            className="h-full w-full object-cover object-center bg-contain"
                            src={data[wisataselected]?.img_sec[0]}
                            alt="nature image"
                        />
                        <img
                            className="h-full w-full object-cover object-center bg-contain"
                            src={data[wisataselected]?.img_sec[1]}
                            alt="nature image"
                        />
                        <img
                            className="h-full w-full object-cover object-center bg-contain"
                            src={data[wisataselected]?.img_sec[2]}
                            alt="nature image"
                        />
                    </Carousel>
                    <div className="md:w-1/2 md:h-full h-1/2 flex items-center justify-center">
                        <h1 className="font-semibold text-white text-2xl text-center">
                            {data[wisataselected]?.description}
                        </h1>
                    </div>
                </div>
                <footer>
                    <div className="w-full h-20 flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.5 }}
                            transition={{
                                duration: 1,
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <SlSocialFacebook
                                color="white"
                                className="w-14 h-14 p-2 mx-2 cursor-pointer"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.5 }}
                            transition={{
                                duration: 1,
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <SlSocialInstagram
                                color="white"
                                className="w-14 h-14 p-2 mx-2 cursor-pointer"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.5 }}
                            transition={{
                                duration: 1,
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <SlSocialTwitter
                                color="white"
                                className="w-14 h-14 p-2 mx-2 cursor-pointer"
                            />
                        </motion.div>
                    </div>
                </footer>
            </div>
            <svg
                className="scale-0 md:scale-100 xl:scale-100 2xl:scale-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#000000"
                    fill-opacity="1"
                    d="M0,128L21.8,149.3C43.6,171,87,213,131,202.7C174.5,192,218,128,262,138.7C305.5,149,349,235,393,229.3C436.4,224,480,128,524,101.3C567.3,75,611,117,655,133.3C698.2,149,742,139,785,149.3C829.1,160,873,192,916,181.3C960,171,1004,117,1047,96C1090.9,75,1135,85,1178,90.7C1221.8,96,1265,96,1309,112C1352.7,128,1396,160,1418,176L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
                ></path>
            </svg>
        </div>
    );
};

export default Descriptionview;
