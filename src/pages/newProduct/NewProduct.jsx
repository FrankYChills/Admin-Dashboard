import { useState } from "react";

const NewProduct = () => {
  const [movie, setMovie] = useState({});
  const [mainImg, setMainImg] = useState(null);
  const [titleImg, setTitleImg] = useState(null);
  const [thumbnailImg, setThumbnailImg] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  console.log(mainImg);

  return (
    <div className="newProduct">
      <h1 className="newProductTitle">Add a New Movie/Series</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label>Main Image</label>
          <input
            type="file"
            name="mainImg"
            onChange={(e) => setMainImg(e.target.files[0])}
          />
        </div>
        <div className="newProductItem">
          <label>Title Image</label>
          <input
            type="file"
            name="titleImg"
            onChange={(e) => setTitleImg(e.target.files[0])}
          />
        </div>
        <div className="newProductItem">
          <label>Thumbnail Image</label>
          <input
            type="file"
            name="thumbnailImg"
            onChange={(e) => setThumbnailImg(e.target.files[0])}
          />
        </div>
        <div className="newProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Movie/Series name"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="newProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Enter Movie/Series description"
            name="desc"
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
          <label>Age Limit</label>
          <input
            type="text"
            placeholder="Enter Movie/Series Genre"
            name="ageLimit"
            onChange={handleChange}
          />
        </div>
        <div className="newProductItem">
          <label>Year Of Release</label>
          <input
            type="text"
            placeholder="Enter Release Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="newProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Enter Movie/Series duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="newProductItem">
          <label>Movie or Series</label>
          <div className="newProductActive">
            <input
              type="radio"
              name="isSeries"
              id="yes"
              value={true}
              onChange={handleChange}
            />
            <label htmlFor="yes">Series</label>
            <input
              type="radio"
              name="isSeries"
              id="no"
              value={false}
              onChange={handleChange}
            />
            <label htmlFor="no">Movie</label>
          </div>
        </div>

        <div className="newProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="newProductItem">
          <label>Full Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
      </form>
      <button className="newProductButton">Add</button>
    </div>
  );
};

export default NewProduct;
