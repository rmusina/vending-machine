import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Avatar, Container, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/slice';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router';
import { FC } from 'react';


export interface LoginFormProps {
	redirectUrl: string;
}


export const LoginForm: FC<LoginFormProps> = (props) => {
	const dispatch = useDispatch()
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const customer = data.get('customer');
		dispatch(setName(customer.toString()))
		
		navigate(props.redirectUrl)
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
			</Box>
		</Container>
	)
}
