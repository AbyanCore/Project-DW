import { Card } from "@material-tailwind/react";
import { motion } from "framer-motion";

const UnAuthorizeview = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
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
                    className="flex flex-col p-10 text-center shadow-lg shadow-yellow-400"
                    color="yellow"
                    onClick={() => (window.location.href = "/auth/login")}
                >
                    <h1 className="text-6xl font-bold">Tidak Sah</h1>
                    <p className="text-sm font-semibold">Ketuk untuk Login</p>
                </Card>
            </motion.div>
        </div>
    );
};

export default UnAuthorizeview;
