import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect } from "react";
import { listContext } from "../../context/listContext/listContext";
import { deleteList, getLists } from "../../context/listContext/ApiCalls";

const MovieLists = () => {
  const { lists, dispatch } = useContext(listContext);

  useEffect(() => {
    getLists(dispatch);
  }, []);
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "title",
      headerName: "List",
      width: 210,
    },
    { field: "type", headerName: "Type", width: 100 },
    { field: "genre", headerName: "Genre", width: 100 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/lists/${params.row._id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteIcon
              className="productListDelete"
              onClick={() => deleteList(params.row._id, dispatch)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="movieLists">
      <h1>Movie Lists</h1>
      <Link to="/lists/newList">
        <button className="productAddButton createNewL">Create</button>
      </Link>
      {lists && (
        <DataGrid
          rows={lists}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(r) => r._id}
        />
      )}
    </div>
  );
};

export default MovieLists;
