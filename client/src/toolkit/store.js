import { configureStore } from '@reduxjs/toolkit';
import post from './postSlice'

const store = configureStore({
    reducer:{
        post
    },
});

export default store;