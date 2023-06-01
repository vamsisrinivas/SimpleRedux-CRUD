import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";
// import "bootstrap/dist/css/bootstrap.min.css"


const Home = () => {
  const users = useSelector((state) => state.users);
  const disptach=useDispatch();


  const deleteHandler=(Id)=>{
        disptach(deleteUser({
            Id:Id
        }))
  }
  console.log(users);
  return (
    <div>
      <h1>Home Component</h1>

      <Link to="/create" className="btn btn-success my-3">Create Record</Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={index}>
              <th scope="row">{users.Id}</th>
              <td>{users.name}</td>
              <td>{users.email}</td>

              <td>
                <Link to={`/edit/${users.Id}`} className="btn btn-primary"> Edit</Link>
                <button onClick={()=>deleteHandler(users.Id)} className="btn btn-danger ms-2"> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
