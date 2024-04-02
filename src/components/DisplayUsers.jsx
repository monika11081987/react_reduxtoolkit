// import React from 'react'
import { useSelector, useDispatch } from "react-redux";
// import {MdDeleteForever} from 'react-icons/all.js'
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  // console.log(data);
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button onClick={() => deleteUser(id)}>Delete</button>
          </li>
        );
      })}
      {/* <h1>vfvfd</h1> */}
    </>
  );
};

export default DisplayUsers;
