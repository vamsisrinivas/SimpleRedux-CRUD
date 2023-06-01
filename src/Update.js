import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";


const Update = () => {
  const { Id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.Id == Id);

  const {name,email} = existingUser[0];
  console.log(existingUser[0])
  // const [updateName, setUpdateName] = useState(name);
  // const [updateEmail, setUpdateEmail] = useState(email);

  const [user,setUser]=useState({
    updateName:name,
    updateEmail:email
})
const {updateName,updateEmail}=user;

const changehandler=(e)=>{
  setUser({...user,[e.target.name]:e.target.value})
  }

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const submithandler=(e)=>{
    e.preventDefault()
    console.log(user)
    dispatch(updateUser({
      Id:Id,
      name:updateName,
      email:updateEmail
    }))
    navigate("/")
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h2>Update User</h2>
        <form onSubmit={submithandler}>
          <div>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              className="form-control"
              name="updateName"
              value={updateName}
              placeholder="enter name"
              onChange={changehandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <input
              type="email"
              className="form-control"
              name="updateEmail"
              value={updateEmail}
              placeholder="enter email"
              onChange={changehandler}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
