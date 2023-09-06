import { FC } from "react";
import { LoginForm } from "../components/LoginForm"

export interface LoginProps {
	url: string;
}

export const Login: FC<LoginProps> = (props) => {
    return (<LoginForm url={props.url} redirectUrl="/vending-machine"/>)
}
