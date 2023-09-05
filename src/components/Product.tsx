import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';

export interface ProductProps {
	name: string;
	price: number;
}

export const Product = ({ name, price }: ProductProps) => {
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
					<Typography component="h2" variant="h3" color="text.primary">
						{price}€
					</Typography>
				</Box>
			</CardContent>
			<CardActions>
				<Button	fullWidth variant="contained">Buy</Button>
			</CardActions>
		</Card>
	)
}