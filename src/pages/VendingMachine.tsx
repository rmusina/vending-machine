import { TextField } from "@mui/material"
import { Box } from "@mui/system"
import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { BalanceManagement } from "../components/BalanceManagement"
import { ProductProps } from "../components/Product"
import { Products } from "../components/Products"
import { RootState } from "../redux/store"


const payload = [
    {
        name: 'Red bull',
        price: 2
    },
    {
        name: 'Martini',
        price: 200
    }
]

const simulateRequest = (mock: ProductProps[]): Promise<ProductProps[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock)
        }, 1000)
    })
}


export const VendingMachine: FC<{ url: string }> = (url) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const name = useSelector((state: RootState) => state.vendingMachine.name)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await simulateRequest(payload)
                setProducts(response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [url]);

    if (!name) {
        return <Navigate to='/' />
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box> 
            <TextField id="standard-basic" label={name} variant="standard" />
            <Products products={products}/>
            <BalanceManagement />
        </Box>
    )
}