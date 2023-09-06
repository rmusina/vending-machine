import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Backdrop, Card, CardActions, CardContent, CardHeader, CircularProgress, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateBalance } from '../redux/slice';
import { api } from '../api';

export interface ProductProps {
	id: string,
	slot_id: string,
	name: string;
	price: number;
	stock: number;
}


export const Product = ({ id, slot_id, name, price, stock }: ProductProps) => {
	const [isLoading, setLoading] = useState(false);
	const [stockState, setStockState] = useState(stock);
	const balance = useSelector((state: RootState) => state.vendingMachine.balance);
    const userInfo = useSelector((state: RootState) => state.vendingMachine.userInfo);
	const dispatch = useDispatch();

	const handleOnClick = () => {
		api.buyProduct(slot_id, userInfo.id, id).then(
			(response: any) => {
				setStockState(stockState - 1);
				dispatch(updateBalance(balance - price));
			},
			(reason: any) => {	
				console.log(reason.message)
			}
		).finally(
			() => { setLoading(false) }
		)
	}

	return (
		<Card sx={{ position: "relative" }}>
			<CardHeader
				title={name}
				titleTypographyProps={{ align: 'center', noWrap: true }}
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? theme.palette.grey[200]
							: theme.palette.grey[700],
					display: "flex",
					overflow: "hidden",
					"& .MuiCardHeader-content": {
						overflow: "hidden"
					}
				}}
			/>
			<CardContent>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'baseline',
						mb: 2,
					}}
				>
					<Grid container>
						<Grid item xs={12}>
							<Typography component="h2" variant="h3" color="text.primary" align="center">
								{price}€
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography component="h2" variant="h4" color="text.secondayr" align="center">
								{stockState}
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</CardContent>
			<CardActions>
				<Button fullWidth disabled={stockState <= 0 || balance < price} variant="outlined" onClick={() => handleOnClick()}>Buy</Button>
			</CardActions>
			<Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, position: "absolute" }} open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Card >
	)
}