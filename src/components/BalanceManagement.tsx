import { Box, Button, TextField } from "@mui/material"

export const BalanceManagement = () => {
	return (
		<Box sx={{border: '2px solid red'}}>
			<Box>
                <Button>0.1 EUR</Button>
                <Button>0.2 EUR</Button>
                <Button>0.5 EUR</Button>
                <Button>1 EUR</Button>
                <Button>2 EUR</Button>
                <Button>5 EUR</Button>
            </Box>
            <Box>
                <TextField id="standard-basic" label="Balance: 100" variant="standard"/>
                <Button>Refund</Button>
            </Box>
		</Box>
	)
}