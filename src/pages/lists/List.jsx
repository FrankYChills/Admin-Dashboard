import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { updateList } from "../../context/listContext/ApiCalls";
import { listContext } from "../../context/listContext/listContext";

const Movie = () => {
  const { id } = useParams();
  const { lists, dispatch } = useContext(listContext);
  const [list, setList] = useState({});

  const [newId, setNewId] = useState("");

  useEffect(() => {
    const foundList = lists.filter((list) => list._id == id);

    setList(foundList[0]);
  }, [lists, dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault();
    // normal update
    // updateList(
    //   id,
    //   { title: newTitle, type: newType, genre: newGenre },
    //   dispatch
    // );
  };

  const handleRemove = (e) => {
    e.preventDefault();
  };

  return (
    <div className="movie">
      <div className="productTitleContainer">
        <h1 className="productTitle">Update a List</h1>
      </div>
      <div className="productTop">
        {/* <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div> */}
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Movie Id</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Type</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Enter Movie Id To Add/Remove to/from the list</label>
            <input
              type="text"
              value={newId}
              onChange={(e) => setNewId(e.target.value)}
            />
            <button className="productButton a" onClick={handleUpdate}>
              Add
            </button>
            <button className="productButton r" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;
