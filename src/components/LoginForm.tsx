import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';


export const LoginForm = () => {
	return (
		<Box sx={{border: '2px solid red'}}>
            <TextField id="standard-basic" label="Username" variant="standard" />
			<Button>Login</Button>
		</Box>
	)
}