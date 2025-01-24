import { configureStore } from "@reduxjs/toolkit";
import UserSlices from './slices/UserSlice';


const store = configureStore({
    reducer:{
        users : UserSlices,
    }
})

export default store