import { Card } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Notfoundview = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                }}
                whileDrag={{ scale: 1.5 }}
                drag
                dragElastic={1}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
                <Card
                    className="p-10 flex flex-col text-center shadow-lg shadow-yellow-400"
                    color="yellow"
                    onClick={() => window.history.back()}
                >
                    <h1 className="font-bold text-6xl">404</h1>
                    <p className="text-sm font-semibold">Tidak DiTemukan</p>
                </Card>
            </motion.div>
        </div>
    );
};

export default Notfoundview;
