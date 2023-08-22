import { Card } from "@material-tailwind/react";

const Dashboardview = () => {
    return (
        <div className="flex flex-col w-full h-full gap-4 p-2">
            <div className="flex flex-row p-1.5 overflow-x-auto gap-x-4">
                <Card className="flex-grow p-2 mr-2">User</Card>
                <Card className="flex-grow p-2 mr-2">Wisata</Card>
                <Card className="flex-grow p-2 mr-2">Comment</Card>
                <Card className="flex-grow p-2 mr-2">Blog</Card>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <h1 className="font-bold text-[#435334] text-3xl">
                    Selamat Datang Admin
                </h1>
            </div>
        </div>
    );
};

export default Dashboardview;
