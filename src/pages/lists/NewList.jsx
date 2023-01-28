import { useState, useEffect } from "react";
import { useContext } from "react";
import { createList } from "../../context/listContext/ApiCalls";
import { listContext } from "../../context/listContext/listContext";
import { getMovies } from "../../context/movieContext/ApiCalls";
import { movieContext } from "../../context/movieContext/MovieContext";

const NewList = () => {
  const { movies, dispatch } = useContext(movieContext);
  const { dispatch: listDispatch } = useContext(listContext);
  const [list, setList] = useState({});
  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  useEffect(() => {
    // running this will update the state with movies
    getMovies(dispatch);
  }, []);

  useEffect(() => {}, [movies]);

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = () => {
    createList(list, listDispatch);
    setList({});
  };
  return (
    <div className="newList">
      <h1 className="newProductTitle">Add a New List</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter List name"
            name="title"
            onChange={handleChange}
          />
        </div>

        <div className="newProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Enter Movie/Series Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>

        <div className="newProductItem">
          <label>Movie or Series</label>
          <div className="newProductActive">
            <input
              type="radio"
              name="type"
              id="series"
              value="series"
              onChange={handleChange}
            />
            <label htmlFor="series">Series</label>
            <input
              type="radio"
              name="type"
              id="movie"
              value="movie"
              onChange={handleChange}
            />
            <label htmlFor="movie">Movie</label>
          </div>
        </div>
        {movies ? (
          <div className="newProductItem">
            <label>Select Movies</label>

            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => {
                return (
                  <option
                    key={movie._id}
                    value={movie._id}
                    style={{ height: "30px", padding: "5px", fontSize: "20px" }}
                  >
                    {movie.title}
                  </option>
                );
              })}
            </select>
          </div>
        ) : (
          <></>
        )}
      </form>
      <button
        className="newProductButton"
        onClick={handleSubmit}
        disabled={
          list.genre && list.content && list.title && list.type ? false : true
        }
      >
        Add list
      </button>
    </div>
  );
};

export default NewList;
