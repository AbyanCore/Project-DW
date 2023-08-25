import {
    Alert,
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
} from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const onLoginValidator = (username: string, password: string): boolean => {
    let valid = false;

    if (username === "admin" && password === "admin") valid = true;

    return valid;
};

const Loginview = () => {
    const [username, setUsername] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const [valid, setValid] = React.useState<boolean>(true);
    const navigate = useNavigate();

    const onLoginHandler = () => {
        if (onLoginValidator(username, password)) {
            setValid(true);
            window.location.href = "/dashboard";
        } else {
            setValid(false);

            setUsername("");
            setPassword("");
        }

        setUsername("");
        setPassword("");
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-gray-900 to-slate-50">
            <div className="flex flex-col items-center flex-grow gap-6">
                <Alert
                    className="flex-1 w-max h-max"
                    open={!valid}
                    color="red"
                    onClose={() => setValid(true)}
                >
                    Username atau Password Tidak Benar
                </Alert>
                <Card className="p-4">
                    <CardHeader className="p-2 bg-black">
                        <h1 className="font-bold text-center text-white">
                            Login
                        </h1>
                    </CardHeader>
                    <CardBody className="flex flex-col">
                        <div className="flex flex-col gap-2">
                            <Input
                                label="Username"
                                size="lg"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                crossOrigin={undefined}
                            />
                            <Input
                                type="password"
                                label="Password"
                                size="lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                crossOrigin={undefined}
                            />

                            <Button type="submit" onClick={onLoginHandler}>
                                Login
                            </Button>
                            <div className="flex flex-row justify-between gap-2">
                                <Button className="flex-1">Register</Button>
                                <Button onClick={() => navigate("/Home")}>
                                    Back
                                </Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Loginview;
