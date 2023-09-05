import { CircularProgress, Container, Grid, Typography } from "@mui/material"
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
        price: 2,
        stock: 10
    },
    {
        name: 'Red bull',
        price: 2,
        stock: 10
    },
    {
        name: 'Red bull',
        price: 2,
        stock: 10
    },
    {
        name: 'Red bull',
        price: 2,
        stock: 10
    },
    {
        name: 'Red bull',
        price: 2,
        stock: 10
    },
    {
        name: 'Red bull',
        price: 2,
        stock: 10
    },
    {
        name: 'Red bull',
        price: 2,
        stock: 10
    },
    {
        name: 'Martini',
        price: 200,
        stock: 10
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
    const userInfo = useSelector((state: RootState) => state.vendingMachine.userInfo)

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

    if (!userInfo) {
        return <Navigate to='/' />
    }

    if (isLoading) {
        return <div style={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress/>
        </div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Products products={products} />
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={8}>
                                <Typography component="p" variant="h3">{userInfo.name}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <BalanceManagement />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}