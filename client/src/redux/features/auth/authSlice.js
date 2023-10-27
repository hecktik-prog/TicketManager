import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../axios/axios'


const initialState = {
    token: null,
    status: null,
    isLoading: false,
}

export const loginUser = createAsyncThunk(
    'auth/login',
    async({username, password},{rejectWithValue}) => {
        try {
                const {data} = await axios.post('/auth/login', {
                    login:username,
                    password,
                })
                if(data.token) {
                    window.localStorage.setItem('token', data.token)
                }
                return data
        } catch (error) {
            throw rejectWithValue(error.response.data.message)   
        }
    }
)

export const checkUser = createAsyncThunk('auth/check', async(_,{rejectWithValue}) => {
    try {
        const {data} = await axios.get('auth/check')

        return data
        
    } catch (error) {
        throw rejectWithValue(error.response.role.message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) =>{
            state.token = null
            state.status = null
            state.isLoading = false
        }
    },
    extraReducers: {
        // login
        [loginUser.pending]: (state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload?.message
            state.token = action.payload?.token
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload
        },

        // check
        [checkUser.pending]: (state) => {
            state.isLoading = true
        },
        [checkUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload?.message
            state.token = action.payload?.token
        },
        [checkUser.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload
        },
    }
})

export const checkIsAuth = (state) => Boolean(localStorage.getItem('token'))

export const {logOut} = authSlice.actions
export default authSlice.reducer