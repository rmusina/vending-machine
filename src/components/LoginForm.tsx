import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { setName } from '../redux/slice';


export const LoginForm = () => {
	const dispatch = useDispatch()
	const [currentName, updateCurrentName] = useState("");

	const handleOnClick = useCallback((newName: string) => {
		dispatch(setName(newName))
	}, [dispatch])

	return (
		<Container component="main" maxWidth="xs">
			<Box sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="customer"
					label="Customer"
					name="customer"
					autoComplete="customer"
					onChange={(e) => { updateCurrentName(e.target.value) }}
					variant='standard' />
				<Button
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
					onClick={() => handleOnClick(currentName)}>
					Login
				</Button>
			</Box>
		</Container>
	)
}
