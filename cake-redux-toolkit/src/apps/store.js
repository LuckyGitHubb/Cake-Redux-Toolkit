import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cakeSlice";

const store = configureStore({
    reducer:{
        cake:cakeSlice.reducer
    }
})
export default store;