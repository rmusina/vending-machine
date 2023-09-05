import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { LoginForm } from "../components/LoginForm"
import { RootState } from "../redux/store";

export const Login: FC = () => {
    const name = useSelector((state: RootState) => state.vendingMachine.name)
    
    if (name) {
        return <Navigate to='/vending-machine' />
    }
    
    return (<LoginForm />)
}
