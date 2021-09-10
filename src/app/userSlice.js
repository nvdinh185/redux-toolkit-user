import { createSlice } from '@reduxjs/toolkit';

const users = createSlice({
  name: 'users',
  initialState: [{ id: 1, name: "123" }],
  reducers: {
    addNewUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      console.log(action.payload);
      const removePhotoId = action.payload;
      return state.filter(photo => photo.id !== removePhotoId);
    },
    // updatePhoto: (state, action) => {
    //   const newPhoto = action.payload;
    //   const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);

    //   if (photoIndex >= 0) {
    //     state[photoIndex] = newPhoto;
    //   }
    // }
  }
});

const { reducer, actions } = users;
export const { addNewUser, removeUser } = actions;
export default reducer;