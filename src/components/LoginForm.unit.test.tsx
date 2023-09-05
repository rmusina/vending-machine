/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, waitFor } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { setUserInfo } from '../redux/slice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


test('Clicking login saves username in redux', async () => {
    const mockedStore = configureStore()({})

    const { getByText, getByLabelText } = render(
        <Provider store={mockedStore}>
            <BrowserRouter>
	            <Routes>
	                <Route path="/" element={<LoginForm redirectUrl='/'/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );

    const textBox = getByLabelText('Customer *');
    fireEvent.change(textBox, { target: { value: 'Rares' } });

    const button = getByText('Login');
    fireEvent.click(button);

    await waitFor(() => {
        expect(mockedStore.getActions()[0]).toEqual(setUserInfo({name: 'Rares', id: '123'}))
    }, {timeout: 1000});
});
