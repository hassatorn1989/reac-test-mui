import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import AuthService from "../services/AuthService";

export const login = createAsyncThunk(
    'auth/login',
    async (data: any, thunkAPI) => {
        try {
            const response = await AuthService.login(data);
            return response.data;
        }catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

interface AuthState {
    entities: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    errorMessage: string
}

const initialState = {
    entities: [],
    loading: 'idle',
    errorMessage: ''
} as AuthState


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending.type]: (state) => {
            state.loading = 'pending';
        },
        [login.fulfilled.type]: (state, { payload }) => {
            state.loading = 'succeeded';
            state.entities = payload.data;
        }
        ,
        [login.rejected.type]: (state, { payload }) => {
            state.loading = 'failed';
            state.errorMessage = payload;
        }
    }
})

export default authSlice.reducer;

