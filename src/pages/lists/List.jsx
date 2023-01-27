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

  const [newTitle, setNewTitle] = useState("");
  const [newType, setNewType] = useState("");
  const [newGenre, setNewGenre] = useState("");

  useEffect(() => {
    const foundList = lists.filter((list) => list._id == id);

    setList(foundList[0]);
    setNewTitle(foundList[0].title);
    setNewGenre(foundList[0].genre);
    setNewType(foundList[0].type);
  }, [lists, dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateList(
      id,
      { title: newTitle, type: newType, genre: newGenre },
      dispatch
    );
  };

  return (
    <div className="movie">
      <div className="productTitleContainer">
        <h1 className="productTitle">List title</h1>
        <Link to="/lists/newList">
          <button className="productAddButton">Create</button>
        </Link>
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
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <label>Type</label>
            <input
              type="text"
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
            />
            <label>Genre</label>
            <input
              type="text"
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
            />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;
