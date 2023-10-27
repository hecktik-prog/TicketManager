import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../axios/axios'


const initialState = {
    list: null,
    isLoading: false,
    status: null,
}

export const createRequest = createAsyncThunk(
    'request/create',
    async({problem, description},{rejectWithValue}) => {
        try {
                const {data} = await axios.post('/request/', {
                    theme:problem,
                    description,
                })

                return data
        } catch (error) {
            throw rejectWithValue(error.response.data.message)   
        }
    }
)

export const getUserRequests = createAsyncThunk(
    'request/create',
    async(_,{rejectWithValue}) => {
        try {
                const {data} = await axios.get('/request/user')

                return data
        } catch (error) {
            throw rejectWithValue(error.response.data.message)   
        }
    }
)

export const submitRequest = createAsyncThunk(
    'request/submit',
    async(id,{rejectWithValue}) => {
        try {
                const {data} = await axios.put(`/request/${id}`, id)

                return data
        } catch (error) {
            throw rejectWithValue(error.response.data.message)   
        }
    }
)
export const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {},
    extraReducers: {
        // create
        [createRequest.pending]: (state) => {
            state.isLoading = true
        },
        [createRequest.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },
        [createRequest.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload
        },

        // get user requests
        [getUserRequests.pending]: (state) => {
            state.isLoading = true
        },
        [getUserRequests.fulfilled]: (state, action) => {
            state.isLoading = false
            state.list = action.payload.requests
        },
        [getUserRequests.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload
        },
    }
})

export default requestSlice.reducer