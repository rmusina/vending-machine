import { Box, Button, TextField } from "@mui/material"
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
		<Box sx={{border: '2px solid red'}}>
			<Box>
                <Button onClick={() => handleOnClick(0.1)}>0.1 EUR</Button>
                <Button onClick={() => handleOnClick(0.2)}>0.2 EUR</Button>
                <Button onClick={() => handleOnClick(0.5)}>0.5 EUR</Button>
                <Button onClick={() => handleOnClick(1)}>1 EUR</Button>
                <Button onClick={() => handleOnClick(2)}>2 EUR</Button>
                <Button onClick={() => handleOnClick(5)}>5 EUR</Button>
            </Box>
            <Box>
                <TextField id="standard-basic" label={balance} variant="standard"/>
                <Button>Refund</Button>
            </Box>
		</Box>
	)
}