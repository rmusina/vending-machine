import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export interface ProductProps {
	name: string;
	price: number;
}

export const Product = ({ name, price }: ProductProps) => {
	return (
		<Box sx={{border: '2px solid red'}}>
			<Box sx={{fontSize: 21, fontWeight: 800}}>{name}</Box>
			<Box>{price}€</Box>
			<Button>Buy</Button>
		</Box>
	)
}