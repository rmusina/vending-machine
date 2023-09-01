import { Box } from "@mui/material"
import { FC } from "react"
import { Product, ProductProps } from "./Product"

interface ProductsProps {
	products: ProductProps[]
}

export const Products: FC<ProductsProps> = (props) => {
	return <Box>{props.products.map(product => <div><Product name={product.name} price={product.price} /></div>)}</Box>
}
