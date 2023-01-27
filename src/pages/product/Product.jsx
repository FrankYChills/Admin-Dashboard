import Publish from "@mui/icons-material/Publish";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Chart from "../../components/chart/Chart";
import { updateMovie } from "../../context/movieContext/ApiCalls";
import { movieContext } from "../../context/movieContext/MovieContext";
import { productData } from "../../dummyData";

const Product = () => {
  const { id } = useParams();
  const { movies, dispatch } = useContext(movieContext);
  const [movie, setMovie] = useState({});
  const [newYear, setNewYear] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newAgeLimit, setNewAgeLimit] = useState("");
  const [newTrailerLink, setNewTrailerLink] = useState("");
  const [newVideoLink, setNewVideoLink] = useState("");

  useEffect(() => {
    const foundMovie = movies.filter((movie) => movie._id == id);

    setMovie(foundMovie[0]);
    setNewYear(foundMovie[0].year);
    setNewGenre(foundMovie[0].genre);
    setNewAgeLimit(foundMovie[0].ageLimit);
    setNewTrailerLink(foundMovie[0].trailer);
    setNewVideoLink(foundMovie[0].video);
  }, [movies]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateMovie(
      id,
      {
        year: newYear,
        ageLimit: newAgeLimit,
        genre: newGenre,
        trailer: newTrailerLink,
        video: newVideoLink,
      },
      dispatch
    );
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        {/* <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div> */}
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              className="productInfoImage"
              src={movie.mainImg}
              alt="productImg"
            />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Movie Id</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Year</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Age Limit</span>
              <span className="productInfoValue">{movie.ageLimit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Year</label>
            <input
              type="text"
              value={newYear}
              onChange={(e) => setNewYear(e.target.value)}
            />
            <label>Movie Genre</label>
            <input
              type="text"
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
            />
            <label>Age Limit</label>
            <input
              type="text"
              value={newAgeLimit}
              onChange={(e) => setNewAgeLimit(e.target.value)}
            />
            <label>Trailer Link</label>
            <input
              type="text"
              value={newTrailerLink}
              onChange={(e) => setNewTrailerLink(e.target.value)}
            />
            <label>Full Video Link</label>
            <input
              type="text"
              value={newVideoLink}
              onChange={(e) => setNewVideoLink(e.target.value)}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={movie.mainImg}
                alt="productImage"
                className="productInfoImage"
              />
              {/* <label htmlFor="file">
                <Publish />
              </label> */}
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
