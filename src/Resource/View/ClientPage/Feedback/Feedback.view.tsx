import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Textarea,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState } from "react";

const datadummy = [
    {
        id: 0,
        feedback:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        username: "John Doe",
        date: "12/12/2021",
    },
    {
        id: 1,
        feedback:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        username: "John Doe",
        date: "12/13/2021",
    },
    {
        id: 2,
        feedback:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        username: "John Doe",
        date: "12/15/2021",
    },
];

const Feedbackview = () => {
    const [data, setdata] = useState(datadummy);

    return (
        <div className="w-full h-full bg-blue-400">
            <div className="flex justify-center items-center h-full w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                >
                    <div className="flex flex-row flex-wrap p-2 justify-center">
                        <Card className="mx-2 my-5 h-max">
                            <CardHeader className="bg-black p-3">
                                <h1 className="font-bold text-orange-300 text-center">
                                    Tambah Feedback
                                </h1>
                            </CardHeader>
                            <CardBody className="p-10">
                                <h1 className="p-2">
                                    Masukkan Feedback Anda Tentang Wisata Ini
                                </h1>
                                <Textarea label="Feedback" maxLength={400} />
                            </CardBody>
                            <CardFooter className="flex justify-center">
                                <Button className="w-full">Tambahkan</Button>
                            </CardFooter>
                        </Card>
                        <Card className="mx-2 my-5 w-auto">
                            <CardHeader className="bg-black p-3">
                                <h1 className="font-bold text-orange-300 text-center">
                                    Feedback List
                                </h1>
                            </CardHeader>
                            <CardBody className="p-2 justify-center flex flex-col overflow-y-auto">
                                {data.map((item) => {
                                    return (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: 200,
                                                scale: 1,
                                            }}
                                            transition={{
                                                duration: 1,
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 100,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                        >
                                            <Card className="m-2 flex flex-col p-2">
                                                <h1 className="font-semibold text-xl">
                                                    {item.username}
                                                </h1>
                                                <h1 className="text-sm">
                                                    {item.date}
                                                </h1>
                                                <h1 className="text-lg">
                                                    {item.feedback}
                                                </h1>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </CardBody>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Feedbackview;
