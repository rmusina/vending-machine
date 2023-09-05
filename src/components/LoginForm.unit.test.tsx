/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { setName } from '../redux/slice';


test('Clicking login saves username in redux', () => {
    const mockedStore = configureStore()({})

    const { getByText, getByLabelText } = render(
        <Provider store={mockedStore}>
            <LoginForm />
        </Provider>
    );

    const textBox = getByLabelText('Username');
    fireEvent.change(textBox, { target: { value: 'Rares' } });

    const button = getByText('Login');
    fireEvent.click(button);

    expect(mockedStore.getActions()[0]).toEqual(setName('Rares'))
});
