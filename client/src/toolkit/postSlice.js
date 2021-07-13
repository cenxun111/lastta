import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    post:[],
    isLoading : false,
    error:""
}

const postListSlice = createSlice({
    name:"postlist",
    initialState,
    reducers:{
        fetchPostLoading:(state) => {
            state.isLoading = true;
        },
        fetchpostSuccess:(state,action) => {
            state.post = action.payload;
            state.isLoading = false;
        },
        fetchPostFail:(state,{ payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export const {fetchPostLoading,fetchpostSuccess,fetchPostFail} = postListSlice.actions

export default postListSlice.reducer