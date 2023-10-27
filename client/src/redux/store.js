import {configureStore} from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import requestSlice from './features/request/requestSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        request: requestSlice
    },
})