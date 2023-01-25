import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

import { productRows } from "../../dummyData";
import { movieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/ApiCalls";

const ProductList = () => {
  // const [data, setData] = useState(productRows);
  const { movies, dispatch } = useContext(movieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, []);

  useEffect(() => {
    console.log("re from mov");
  }, [movies]);

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "movie",
      headerName: "Movie",
      width: 210,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img
              className="productListImg"
              src={params.row.mainImg}
              alt="productImg"
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 100 },
    { field: "year", headerName: "Year", width: 100 },
    {
      field: "ageLimit",
      headerName: "Age Limit",
      type: "string",
      width: 100,
    },
    {
      field: "desc",
      headerName: "Description",
      description: "Price of listed product",
      width: 300,
    },
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
              onClick={() => deleteMovie(params.row._id, dispatch)}
            />
          </>
        );
      },
    },
  ];

  // const handleDelete = (id) => {
  //   var updatedData = data.filter((row) => row.id !== id);
  //   setData(updatedData);
  // };

  return (
    <div className="productList">
      {movies && (
        <DataGrid
          rows={movies}
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

export default ProductList;
