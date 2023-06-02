import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/userSlice'
import AuthSlice from '../features/AuthSlice'

export const store = configureStore({
    reducer: {
        userReducer : userSlice,
        authReducer: AuthSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch