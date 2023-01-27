// GET LISTS
export const getListsStart = () => ({
  type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});

export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
});

// DELETE LIST
export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});

export const deleteListSuccess = (listId) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: listId,
});

export const deleteListFailure = () => ({
  type: "DELETE_LIST_FAILURE",
});

// Update List
export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
});

export const updateListSuccess = (list) => ({
  type: "UPDATE_LIST_SUCCESS",
  payload: list,
});

export const updateListFailure = () => ({
  type: "DELETE_LIST_FAILURE",
});
