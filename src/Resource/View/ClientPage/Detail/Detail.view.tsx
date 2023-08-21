import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { ClientPageContext } from "../Client.page";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

const Detailview = () => {
    const [wisataselected, setwisataselected] = useContext(ClientPageContext);
    const data: Array<any> = useLoaderData() as Array<any>;

    return (
        <div className="w-full h-full bg-yellow-400 p-0">
            <div className="flex justify-center items-center h-full">
                <Card className="m-10 overflow-hidden w-5/6 h-1/3 shadow-2xl">
                    <CardBody className="p-0 h-full">
                        <div className="w-full h-full flex flex-row">
                            <img
                                className="object-cover object-center bg-contain w-1/3 h-full"
                                src={data[wisataselected]?.img}
                            />
                            <div className="w-2/3 h-full flex flex-col p-5">
                                <h1 className="font-bold text-2xl">
                                    {data[wisataselected]?.title}
                                </h1>
                                <h1 className="font-semibold text-xl">
                                    {data[wisataselected]?.location}
                                </h1>
                                <h1 className="font-semibold text-xl">
                                    {data[wisataselected]?.price}
                                </h1>
                                <h1 className="font-semibold text-xl">
                                    {data[wisataselected]?.rating}
                                </h1>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="rgb(255 238 88 / var(--tw-bg-opacity)"
                    fill-opacity="1"
                    d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,133.3C672,149,768,203,864,213.3C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
        </div>
    );
};

export default Detailview;
