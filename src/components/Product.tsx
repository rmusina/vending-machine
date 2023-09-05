import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Card, CardActions, CardContent, CardHeader, Divider, Grid, Grow, Typography } from '@mui/material';

export interface ProductProps {
	name: string;
	price: number;
	stock: number;
}

export const Product = ({ name, price, stock }: ProductProps) => {
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
								{stock}
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</CardContent>
			<CardActions>
				<Button fullWidth variant="contained">Buy</Button>
			</CardActions>
		</Card >
	)
}