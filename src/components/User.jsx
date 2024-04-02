// import React from 'react';
import DeleteAllUsers from "./DeleteAllUsers";
import { fakeUserData } from '../api';
import {useDispatch} from "react-redux";
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from "../components/DisplayUsers";

const User = () => {

const dispatch=useDispatch();

const addNewUser=(name)=>{
console.log(name);
dispatch(addUser(name));
};

  return (
    <div>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of user details</div>
          <button onClick={()=>addNewUser(fakeUserData())}>add new users</button>
        </div>
        <ul>
            <DisplayUsers/>
            
        </ul>
        <hr/>
        <DeleteAllUsers/>
      </div>
    </div>
  );
};

export default User;
