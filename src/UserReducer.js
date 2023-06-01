import { createSlice } from "@reduxjs/toolkit";
import {UserList} from "./Data"


const slice=createSlice({
    name:"users",
    initialState:UserList,
    reducers:{
            addUser:(state,action)=>{
              state.push(action.payload)
            },
            updateUser:(state,action)=>{
            const{Id,name,email}=action.payload;
            const updateuser=state.find(user=>user.Id==Id)
            if(updateuser){
                updateuser.name=name;
                updateuser.email=email
            }
            },
            deleteUser:(state,action)=>{
                const{Id}=action.payload;
                const updateuser=state.find(user=>user.Id==Id)
                if(updateuser){
                    return state.filter(f=>f.Id!==Id)
                }
            }
    }

})

export const{addUser,updateUser,deleteUser}=slice.actions;

export default slice.reducer