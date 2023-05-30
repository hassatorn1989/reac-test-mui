import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

export interface ListUserState {
    userList: any
}

const initialState: ListUserState = {
    userList: {
        page: 0,
    },
}

export const ListUserSlice = createSlice({
    name: 'ListUser',
    initialState,
    reducers: {
        getUser: async  (state) =>  {
            let data = await axios.get('https://reqres.in/api/users/');
            state.userList = {
                page: data.data.page,
            };
        },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { getUser } = ListUserSlice.actions

export default ListUserSlice.reducer