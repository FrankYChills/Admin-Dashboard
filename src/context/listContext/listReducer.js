const listReducer = (state, action) => {
  switch (action.type) {
    case "GET_LISTS_START":
      return {
        lists: [],
        isfetching: true,
        error: false,
      };
    case "GET_LISTS_SUCCESS":
      return {
        lists: action.payload,
        isfetching: false,
        error: false,
      };
    case "GET_LISTS_FAILURE":
      return {
        lists: [],
        isfetching: false,
        error: true,
      };
    case "DELETE_LIST_START":
      return {
        ...state,
        isfetching: true,
        error: false,
      };
    case "DELETE_LIST_SUCCESS":
      return {
        lists: state.lists.filter((list) => list._id != action.payload),
        isfetching: false,
        error: false,
      };
    case "DELETE_LIST_FAILURE":
      return {
        ...state,
        isfetching: false,
        error: true,
      };
    case "UPDATE_LIST_START":
      return {
        ...state,
        isfetching: true,
        error: false,
      };
    case "UPDATE_LIST_SUCCESS":
      return {
        lists: state.lists.map((list) => {
          if (list._id == action.payload._id) {
            return action.payload;
          }
          return list;
        }),
        isfetching: false,
        error: false,
      };
    case "UPDATE_LIST_FAILURE":
      return {
        ...state,
        isfetching: false,
        error: true,
      };
  }
};

export default listReducer;
