import axios from "axios";

export const api = {
	login: (customer: string): Promise<Response> => axios.post(process.env.REACT_APP_BACKEND_URL + '/login/', {username: customer}),
	getSlots: () => axios.get(process.env.REACT_APP_BACKEND_URL + '/slots/')
}
