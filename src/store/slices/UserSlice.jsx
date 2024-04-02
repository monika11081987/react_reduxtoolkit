import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions/action";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload)
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
      // state.pop(action.payload)
      // console.log("hi" + action.payload)
    },
    clearAllUsers() {
     return [];
    },
  },

extraReducers(builder){
builder.addCase(clearAllUsers,()=>{
    return [];
})
}

});

console.log(userSlice);

export default userSlice.reducer;

export const { addUser, removeUser } = userSlice.actions;
