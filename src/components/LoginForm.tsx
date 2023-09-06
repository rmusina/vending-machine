import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Alert, AlertTitle, Avatar, Backdrop, CircularProgress, Container, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUserInfo, updateBalance, UserInfo } from '../redux/slice';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router';
import { FC, useState } from 'react';
import { api } from '../api';


export interface LoginFormProps {
	url: string;
	redirectUrl: string;
}


export const LoginForm: FC<LoginFormProps> = (props) => {
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const customer = data.get('customer').toString();

		setLoading(true);

		api.login(customer).then(
			(response: any) => {
				dispatch(setUserInfo({ name: customer, id: response.data.id }));
				dispatch(updateBalance(+response.data.credit));
				navigate(props.redirectUrl);
			},
			(reason: any) => { setError(reason.message)	}
		).finally(
			() => { setLoading(false) }
		)
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
				{
					error ?
						<Alert severity="error" onClose={() => { setError(null) }}>
							<AlertTitle>Error</AlertTitle>
							{error}
						</Alert>
						: null
				}
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
