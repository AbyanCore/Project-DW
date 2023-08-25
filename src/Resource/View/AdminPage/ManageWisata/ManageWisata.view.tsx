import { Card } from "@material-tailwind/react";

const ManageWisataview = () => {
    return (
        <div className="flex flex-col w-full h-full gap-4 p-2">
            <div className="flex flex-row p-2 overflow-x-auto">
                <Card className="flex-grow p-2">Jumlah</Card>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <h1 className="font-bold text-[#435334] text-3xl">Content</h1>
            </div>
        </div>
    );
};

export default ManageWisataview;
