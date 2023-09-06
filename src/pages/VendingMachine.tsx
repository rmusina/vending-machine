import { Alert, Backdrop, CircularProgress, Container, Grid, Snackbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { api } from "../api"
import { BalanceManagement } from "../components/BalanceManagement"
import { ProductProps } from "../components/Product"
import { Products } from "../components/Products"
import { RootState } from "../redux/store"


export const VendingMachine: FC<{ url: string }> = (url) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const userInfo = useSelector((state: RootState) => state.vendingMachine.userInfo);

    useEffect(() => {
        setLoading(true);

        api.getSlots().then(
			(response: any) => {
                let parsedProducts: ProductProps[] = response.data.map(slot => ({id: slot.product.id, slot_id: slot.id, name: slot.product.name, stock: slot.quantity, price: slot.product.price}))
				setProducts(parsedProducts);
			},
			(reason: any) => { setError(reason.message)	}
		).finally(
			() => { setLoading(false) }
		)
    }, [url]);

    if (!userInfo) {
        return <Navigate to='/' />
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
            <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={error} autoHideDuration={6000} onClose={() => { setError(null) }}>
                <Alert onClose={() => { setError(null) }} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </Box>
    )
}