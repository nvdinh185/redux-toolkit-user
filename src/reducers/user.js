const initialState = {
  list: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      const newList = [...state.list];
      newList.push(action.payload);

      return {
        list: newList,
      };
    }
    case 'REMOVE_USER': {
      let newList = [...state.list];
      newList = newList.filter(user => user.id !== action.payload);

      return {
        list: newList,
      };
    }

    default:
      return state;
  }
}

export default userReducer;