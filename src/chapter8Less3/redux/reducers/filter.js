const initialState = {
  filterBy: 'all'
};

export const filterReducer = (state=initialState, action) => {

  if (action.type === "TAB_CLICK") {
    return {
      filterBy: action.payload,
    };
  }

  return state;
};


