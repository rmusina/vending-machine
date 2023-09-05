import { Box, Button, Grid, Typography } from "@mui/material"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateBalance } from "../redux/slice"
import { RootState } from "../redux/store"

export const BalanceManagement = () => {
    const balance = useSelector((state: RootState) => state.vendingMachine.balance)
    const dispatch = useDispatch()
	
    const handleOnClick = useCallback((balance: number) => {
		dispatch(updateBalance(balance))
	}, [dispatch])
    
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(0.1)}>0.1€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(0.2)}>0.2€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(0.5)}>0.5€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(1)}>1€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(2)}>2€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(5)}>5€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Typography component="p" variant="h4">{balance.toFixed(2)}€</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth color="success" variant="contained" onClick={() => handleOnClick(0)}>Refund</Button>
                </Grid>
            </Grid>
        </Box>
	)
}