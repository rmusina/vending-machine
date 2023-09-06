import { Backdrop, Box, Button, CircularProgress, Grid, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { api } from "../api"
import { updateBalance } from "../redux/slice"
import { RootState } from "../redux/store"


export const BalanceManagement = () => {
    const [isLoading, setLoading] = useState(false);
    const balance = useSelector((state: RootState) => state.vendingMachine.balance);
    const userInfo = useSelector((state: RootState) => state.vendingMachine.userInfo);
    const dispatch = useDispatch()
	
    const handleOnClick = (balance: number) => {
		api.updateCredit(userInfo.id, balance).then(
			(response: any) => {
				dispatch(updateBalance(balance));
			},
			(reason: any) => {	
				console.log(reason.message)
			}
		).finally(
			() => { setLoading(false) }
		)
	}

    return (
        <Box sx={{position: "relative"}}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(balance + 0.1)}>0.1€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(balance + 0.2)}>0.2€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(balance + 0.5)}>0.5€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(balance + 1)}>1€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(balance + 2)}>2€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={() => handleOnClick(balance + 5)}>5€</Button>
                </Grid>
                <Grid item xs={6}>
                    <Typography component="p" variant="h4">{balance.toFixed(2)}€</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth color="success" variant="contained" onClick={() => handleOnClick(0)}>Refund</Button>
                </Grid>
                <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, position: "absolute" }} open={isLoading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Grid>
        </Box>
	)
}