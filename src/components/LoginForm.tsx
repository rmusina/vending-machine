import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Avatar, Backdrop, CircularProgress, Container, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUserInfo, UserInfo } from '../redux/slice';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router';
import { FC, useState } from 'react';


export interface LoginFormProps {
	url: string;
	redirectUrl: string;
}


const simulateRequest = (mock: string): Promise<string> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mock)
		}, 1000)
	})
}


export const LoginForm: FC<LoginFormProps> = (props) => {
    const [isLoading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const customer = data.get('customer');

		const createUserId = async () => {
			try {
				setLoading(true);
				return await simulateRequest("123")
			} catch (error) {
			} finally {
			}
		};

		createUserId().then((userId) => {
			dispatch(setUserInfo({ name: customer.toString(), id: userId }));
			setLoading(false);
			navigate(props.redirectUrl);
		})
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				component="form"
				onSubmit={handleSubmit}
				noValidate
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<TextField
					margin="normal"
					required
					fullWidth
					id="customer"
					label="Customer"
					name="customer"
					autoComplete="customer"
					variant='standard'
					autoFocus />
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Login
				</Button>
				<Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
					<CircularProgress color="inherit" />
				</Backdrop>
			</Box>
		</Container>
	)
}
