import React, { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Create = () => {

    const [user,setUser]=useState({
        name:"",
        email:""
    })
    const {name,email}=user;
// const [name,setName]=useState("")
// const[email,setEmail]=useState("")

    const dispatch=useDispatch();
    const users = useSelector((state) => state.users);

    const navigate=useNavigate()

    const changehandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    }

    const submithandler=(e)=>{
       e.preventDefault()
       dispatch(addUser({Id:users[users.length-1].Id+1,name,email}))
       navigate("/")
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h2>Add New User</h2>
        <form onSubmit={submithandler}>
          <div>
            <label htmlFor="name">Name </label>
            <input type="text" className="form-control" name="name"  placeholder="enter name" onChange={changehandler}  />
            {/* onChange={e=>setName(e.target.value)} */}
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <input type="email" className="form-control" name="email" placeholder="enter email" onChange={changehandler} />
          </div>
    <br/>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
