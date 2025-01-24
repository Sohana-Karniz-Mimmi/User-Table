import { createSlice } from "@reduxjs/toolkit";

const UserSlices = createSlice({
    name: 'users',
    initialState: [],
    reducers:{
        addUser: (state, action) =>{
            state.push(action.payload);
            // console.log(action.payload);
        },
        removeUser: (state, action) =>{
            state.splice(action.payload, 1);
            // console.log(action.payload);
        },
        delateUsers: () =>{
            return [];
            // console.log('delete');
        }
    }
})
// console.log(UserSlices);

export default UserSlices.reducer;

export const {addUser, removeUser, delateUsers} = UserSlices.actions; 