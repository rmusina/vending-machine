import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
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
		<Box sx={{border: '2px solid red'}}>
            <TextField onChange={(e) => { updateCurrentName(e.target.value) }} label='Username' variant='standard' />
			<Button onClick={() => handleOnClick(currentName)}>Login</Button>
		</Box>
	)
}
