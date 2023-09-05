import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface ProductProps {
	name: string;
	price: number;
	stock: number;
}

export const Product = ({ name, price, stock }: ProductProps) => {
	const [stockState, setStockState] = useState(stock);
	const [isBuyDisabled, setBuyDisabled] = useState(stock <= 0);

	const handleOnClick = () => {
		setStockState(stockState - 1)
		setBuyDisabled(stockState <= 1)
	}

	return (
		<Card>
			<CardHeader
				title={name}
				titleTypographyProps={{ align: 'center' }}
				subheaderTypographyProps={{
					align: 'center',
				}}
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? theme.palette.grey[200]
							: theme.palette.grey[700],
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
				<Button fullWidth disabled={isBuyDisabled} variant="outlined" onClick={() => handleOnClick()}>Buy</Button>
			</CardActions>
		</Card >
	)
}