import Publish from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              className="productInfoImage"
              src="https://m.media-amazon.com/images/I/91wUFiHq0zL.jpg"
              alt="productImg"
            />
            <span className="productName">A Glimpse Of the Universe</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id</span>
              <span className="productInfoValue">123 </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales</span>
              <span className="productInfoValue">6400</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="A Glimpse Of the Universe" />
            <label>In Stock</label>
            <select name="inStock" id="stock">
              <option value="yes">Yes</option>
              <option value="no" selected>
                No
              </option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://m.media-amazon.com/images/I/91wUFiHq0zL.jpg"
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
