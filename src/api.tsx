import axios from "axios";

export const api = {
	getProducts: () => axios.get(process.env.BACKEND_URL + '/products')
}