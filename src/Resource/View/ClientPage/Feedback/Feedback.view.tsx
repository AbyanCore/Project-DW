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

    const [addfeedbackpopup, setaddfeedbackpopup] = useState(false);

    return (
        <div className="w-full h-full bg-blue-400 ">
            <div className="flex items-center justify-center w-full h-full">
                {addfeedbackpopup && (
                    <div className="absolute z-[11] w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center saturate-100 backdrop-blur-sm">
                        <Card className="mx-2 my-5 h-max">
                            <CardHeader className="p-3 bg-black">
                                <h1 className="font-bold text-center text-orange-300">
                                    Tambah Feedback
                                </h1>
                            </CardHeader>
                            <CardBody className="p-10">
                                <h1 className="p-2">
                                    Masukkan Feedback Anda Tentang Wisata Ini
                                </h1>
                                <Textarea label="Feedback" maxLength={400} />
                            </CardBody>
                            <CardFooter className="flex justify-center gap-4">
                                <Button
                                    className="w-max"
                                    onClick={() => setaddfeedbackpopup(false)}
                                >
                                    Kembali
                                </Button>
                                <Button className="w-full">Tambahkan</Button>
                            </CardFooter>
                        </Card>
                    </div>
                )}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                >
                    <div className="flex flex-row justify-center p-2">
                        <Card className="w-auto mx-2 my-5">
                            <div className="p-4 px-10 rounded-t-xl items-center bg-black flex flex-row justify-between">
                                <h1 className="font-bold text-center text-orange-300">
                                    Feedback Terbaru
                                </h1>
                                <Button
                                    color="white"
                                    variant="outlined"
                                    onClick={() => setaddfeedbackpopup(true)}
                                >
                                    Tambah
                                </Button>
                            </div>
                            <div className="flex flex-col p-6 overflow-y-auto gap-4">
                                {data.slice(0, 3).map((item: any) => {
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
                                            <Card className="flex flex-col p-2 shadow-xl">
                                                <h1 className="text-xl font-semibold">
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
                            </div>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Feedbackview;
