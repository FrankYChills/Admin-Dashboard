import axios from "axios";
import {
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListStart,
  updateListFailure,
  updateListSuccess,
} from "./listAction";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("http://localhost:3500" + "/api/lists", {
      headers: {
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).accessToken
        }`,
      },
    });
    console.log(res.data);
    dispatch(getListsSuccess(res.data.data));
  } catch (err) {
    dispatch(getListsFailure());
    console.log(err);
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    const res = await axios.delete(
      `http://localhost:3500` + `/api/lists/${id}`,
      {
        headers: {
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
      }
    );
    console.log(res.data);
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
    console.log(err);
  }
};

export const updateList = async (id, list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axios.put(
      `http://localhost:3500` + `/api/lists/${id}`,
      list,
      {
        headers: {
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
      }
    );
    console.log(res.data);
    dispatch(updateListSuccess(res.data.data));
  } catch (err) {
    dispatch(updateListFailure());
    console.log(err);
  }
};
