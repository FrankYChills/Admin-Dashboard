import Publish from "@mui/icons-material/Publish";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Chart from "../../components/chart/Chart";
import { movieContext } from "../../context/movieContext/MovieContext";
import { productData } from "../../dummyData";

const Product = () => {
  const { id } = useParams();
  const { movies } = useContext(movieContext);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const foundMovie = movies.filter((movie) => movie._id == id);

    setMovie(foundMovie[0]);
  }, []);
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
            <label>Movie Name</label>
            <input type="text" placeholder={movie.title} />
            <label>Movie Genre</label>
            <input type="text" placeholder={movie.genre} />
            <label>Age Limit</label>
            <input type="text" placeholder={movie.ageLimit} />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Full Video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={movie.mainImg}
                alt="productImage"
                className="productInfoImage"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
