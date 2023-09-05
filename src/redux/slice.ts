
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface VendingMachineState {
    userInfo: UserInfo | null;
    balance: number | null;
}


export interface UserInfo {
    name: string;
    id: string;
}


const initialState: VendingMachineState = {
    userInfo: null,
    balance: 0
}


export const vendingMachineSlice = createSlice({
    name: 'vendingMachine',
    initialState,
    reducers: {
        updateBalance: (state, action: PayloadAction<number | null>) => {
            if (action.payload === 0) {
                state.balance = 0;
            } else {
                state.balance += action.payload
            }           
        },
        setUserInfo: (state, action: PayloadAction<UserInfo | null>) => {
            state.userInfo = action.payload
        }
    }
})


export const { updateBalance, setUserInfo } = vendingMachineSlice.actions

export default vendingMachineSlice.reducer