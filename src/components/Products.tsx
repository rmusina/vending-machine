import { Box, Grid } from "@mui/material"
import { FC } from "react"
import { Product, ProductProps } from "./Product"

interface ProductsProps {
	products: ProductProps[]
}

export const Products: FC<ProductsProps> = (props) => {
	return <Grid container spacing={2}>
		{props.products.map(product => <Grid item xs={3}><Product id={product.id} slot_id={product.slot_id} name={product.name} price={product.price} stock={product.stock}/></Grid>)}
	</Grid>
}
