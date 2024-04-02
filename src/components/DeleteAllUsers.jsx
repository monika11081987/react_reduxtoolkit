// import React from 'react'
// import { clearAllUsers } from "../store/slices/UserSlice"
import { clearAllUsers } from '../store/actions/action';
import {useDispatch} from 'react-redux'

const DeleteAllUsers = () => {

  const dispatch=useDispatch();
const deleteUsers=()=>{
dispatch(clearAllUsers());
}

  return (
    <button onClick={deleteUsers}>
      delete all users
      </button>
  )
}

export default DeleteAllUsers
