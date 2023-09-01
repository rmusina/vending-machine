import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface ProductProps {
	title: string;
	price: number;
}

export const Product = ({ title, price }: ProductProps) => {
	return (
		<Box sx={{border: '2px solid red'}}>
			<Box sx={{fontSize: 21, fontWeight: 800}}>{title}</Box>
			<Box>{price}€</Box>
			<Button>Buy</Button>
		</Box>
	)
}