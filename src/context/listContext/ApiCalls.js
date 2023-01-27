import axios from "axios";
import {
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
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
