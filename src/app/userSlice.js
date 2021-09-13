import { createSlice } from '@reduxjs/toolkit';

const users = createSlice({
  name: 'users',
  initialState: [{ id: 1, name: "Nguyen Van Dinh" }],
  reducers: {
    addNewUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      // console.log(action.payload);
      const removeUserId = action.payload;
      return state.filter(user => user.id !== removeUserId);
    },
    updateUser: (state, action) => {
      const newUser = action.payload;
      const userIndex = state.findIndex(user => user.id === newUser.id);

      if (userIndex >= 0) {
        state[userIndex] = newUser;
      }
    }
  }
});

const { reducer, actions } = users;
export const { addNewUser, updateUser, removeUser } = actions;
export default reducer;