import { TextField } from "@mui/material"
import { Box } from "@mui/system"
import { FC, useEffect, useState } from "react"
import { BalanceManagement } from "../components/BalanceManagement"
import { ProductProps } from "../components/Product"
import { Products } from "../components/Products"


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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box> 
            <TextField id="standard-basic" label="Rares Musina" variant="standard" />
            <Products products={products}/>
            <BalanceManagement />
        </Box>
    )
}