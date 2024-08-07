import {createSlice} from '@reduxjs/toolkit'
const initialstateCake = {totalCake:40}
const cakeSlice = createSlice({
    name:'cake',
    initialState:initialstateCake,
    reducers:{
    buyCake:(state,action)=>
        {state.totalCake-=action.payload}
    ,
     reorderCake:(state,action)=>
        {state.totalCake+=action.payload}
    }
});
// export const {buyCake , reorderCake} = cakeSlice.actions
export default cakeSlice;