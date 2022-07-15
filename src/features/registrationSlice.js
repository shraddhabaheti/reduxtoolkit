import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerApi = createAsyncThunk(
    'register',
    async (data) => {
     
        try {

            let res = await axios.post('http://e47b-122-168-178-44.ngrok.io/api/register/',data ,{
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
                }

            });
            return res.data
            //console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
)
const registrationSlice = createSlice({
    name: ' register',
    initialState: {
        data: {},
        status: 'idle',
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerApi.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "idle"

        })
            .addCase(registerApi.pending, (state) => {
                state.status = "loading"
            })
            .addCase(registerApi.rejected, (state) => {
                state.status = "error"
            })
    }
})
export const { rootReducer } = registrationSlice.actions
export default registrationSlice.reducer