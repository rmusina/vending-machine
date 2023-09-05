import { FC } from "react";
import { LoginForm } from "../components/LoginForm"

export const Login: FC = () => {
    return (<LoginForm redirectUrl="/vending-machine"/>)
}
