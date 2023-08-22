import { Card, Input, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";

const ManageRoleview = () => {
    const [data, setData] = React.useState([{}]);

    useEffect(() => {
        setData([
            {
                id: "1",
                name: "test",
                created_at: "2021-10-10",
                updated_at: "2021-10-10",
            },
            {
                id: "2",
                name: "test",
                created_at: "2021-10-10",
                updated_at: "2021-10-10",
            },
        ]);
    }, []);

    return (
        <div className="flex flex-col w-full gap-4 p-4 h-max">
            <div className="flex flex-row p-2 overflow-x-auto gap-x-4">
                <Card className="flex-grow p-2 rounded-md">Jumlah</Card>
                <Card className="flex-grow p-2 rounded-md">Macam</Card>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <Card className="w-full h-full overflow-scroll rounded-md">
                    <table className="w-full h-full text-left table-auto min-w-max">
                        <thead>
                            <tr>
                                <th
                                    key={1}
                                    className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        id
                                    </Typography>
                                </th>
                                <th
                                    key={2}
                                    className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Nama
                                    </Typography>
                                </th>
                                <th
                                    key={3}
                                    className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Tanggal Pembuatan
                                    </Typography>
                                </th>
                                <th
                                    key={3}
                                    className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Tanggal Pembaruan
                                    </Typography>
                                </th>
                                <th
                                    key={3}
                                    className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Aksi
                                    </Typography>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data: any) => (
                                <tr
                                    key={data.id}
                                    className="even:bg-blue-gray-50/50"
                                >
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {data.id}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {data.name}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {data.created_at}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {data.updated_at}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="orange"
                                            className="font-medium"
                                        >
                                            Perbarui
                                        </Typography>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="red"
                                            className="font-medium"
                                        >
                                            Hapus
                                        </Typography>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
};

export default ManageRoleview;
