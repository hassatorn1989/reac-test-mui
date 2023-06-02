import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getUserList = createAsyncThunk('user/getUserList', async (page, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`https://reqres.in/api/users?per_page=2&page=${page}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

interface UsersState {
    entities: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    errorMessage: string
}

const initialState = {
    entities: [],
    loading: 'idle',
    errorMessage: ''
} as UsersState


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [getUserList.pending.type]: (state) => {
            state.loading = 'pending';
        }
        ,
        [getUserList.fulfilled.type]: (state, { payload }) => {
            state.loading = 'succeeded';
            state.entities = payload.data;
        }
        ,
        [getUserList.rejected.type]: (state, { payload }) => {
            state.loading = 'failed';
            state.errorMessage = payload;
        }
    }
})

export default userSlice.reducer;
