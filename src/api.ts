import axios from "axios";

export const api = {
	login: (customer: string): Promise<Response> => axios.post(process.env.REACT_APP_BACKEND_URL + '/login/', {username: customer}),
	getSlots: (): Promise<Response> => axios.get(process.env.REACT_APP_BACKEND_URL + '/slots/'),
	buyProduct: (slot_id: string, user_id: string, product_id: string): Promise<Response> => axios.post(process.env.REACT_APP_BACKEND_URL + '/order/', {slot_id: slot_id, user_id: user_id, product_id: product_id})
}
