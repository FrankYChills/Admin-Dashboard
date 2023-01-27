import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";

const MovieLists = () => {
  const lists = [];
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
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
            <Link to={`/product/${params.row._id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteIcon
              className="productListDelete"
              //   onClick={() => deleteMovie(params.row._id, dispatch)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="movieLists">
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
