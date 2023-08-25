import {
    Alert,
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
} from "@material-tailwind/react";
import React from "react";
import validator from "validator";
import { Register } from "../../../../App/API/Auth.api";
import { useNavigate } from "react-router-dom";

const onRegisterValidator = (
    username: string,
    password: string,
    email: string
): boolean => {
    let valid = false;

    if (
        validator.isAlphanumeric(username) &&
        !validator.isEmpty(password) &&
        validator.isEmail(email)
    ) {
        Register(username, password, email);
        valid = true;
    }

    return valid;
};

const Registerview = () => {
    const [username, setUsername] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");

    const [valid, setValid] = React.useState<boolean>(true);
    const navigate = useNavigate();

    const onLoginHandler = () => {
        if (onRegisterValidator(username, password, email)) {
            setValid(true);
            window.history.back();
        } else {
            setValid(false);

            setUsername("");
            setPassword("");
            setEmail("");
        }

        setUsername("");
        setPassword("");
        setEmail("");
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
                            Register
                        </h1>
                    </CardHeader>
                    <CardBody className="flex flex-col">
                        <div className="flex flex-col gap-2">
                            <Input
                                label="Email"
                                size="lg"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                crossOrigin={undefined}
                            />
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
                                Register
                            </Button>
                            <div className="flex flex-row justify-between gap-2">
                                <Button className="flex-1">Login</Button>
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

export default Registerview;
