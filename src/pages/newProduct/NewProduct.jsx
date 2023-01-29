import { useContext, useState } from "react";
// import app so that our this file knows firebase has been init
import { app } from "../../firebase";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { movieContext } from "../../context/movieContext/MovieContext";
import { addMovie } from "../../context/movieContext/ApiCalls";

const NewProduct = () => {
  const [movie, setMovie] = useState({});
  const [mainImg, setMainImg] = useState(null);
  const [titleImg, setTitleImg] = useState(null);
  const [thumbnailImg, setThumbnailImg] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(movieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const storage = getStorage();

  const upload = (items) => {
    items.forEach((item) => {
      var fileRef = ref(storage, `items/${item.file.name}`);
      var uploadTask = uploadBytesResumable(fileRef, item.file);
      // track uplaod
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`[${item.file.name}] Upload is ${progress} % done`);
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              console.log("Error : unauthorized", error);

              break;
            case "storage/canceled":
              // User canceled the upload
              console.log("Error : cancelled", error);
              break;
          }
        },
        () => {
          // on successful upload get the url to store that in DB
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            console.log(downloadUrl);
            // update the state
            setMovie((prev) => {
              return { ...prev, [item.label]: downloadUrl };
            });
            // update the uploadCounter
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = () => {
    console.log("clicked");
    upload([
      { file: mainImg, label: "mainImg" },
      { file: titleImg, label: "titleImg" },
      // { file: thumbnailImg, label: "thumbnailImg" },
      // { file: trailer, label: "trailer" },
      // { file: video, label: "video" },
    ]);
  };

  const handleSubmit = () => {
    addMovie(movie, dispatch);
    setMovie({});
    setMainImg(null);
    setTitleImg(null);
    setThumbnailImg(null);
    setTrailer(null);
    setVideo(null);
    setUploaded(0);
  };

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
      {uploaded == 2 ? (
        <button className="newProductButton" onClick={handleSubmit}>
          Add to DB
        </button>
      ) : (
        <button
          className="newProductButton"
          onClick={handleUpload}
          disabled={mainImg && titleImg ? false : true}
        >
          Upload To Firebase
        </button>
      )}
    </div>
  );
};

export default NewProduct;
