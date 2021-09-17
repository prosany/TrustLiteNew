import { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
const Gallery = ({ images }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {/* {images.map((image, index) => */}
        {images.slice(0, 5).map((image, index) =>
        (
          <div key={index} className="product-gallery__thumb">
            <img className="pro-img" src={image} onClick={() => setSelectedPhoto(index)} alt="img" />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <img src={images[selectedPhoto]} alt="img" />
        <button onClick={toggle} className="pro-video-btn">🔴Product Demo</button>
      </div>
      <div className="proudct-video" style={{
        display: showMe?"block":"none"
      }}>
        <button className="crossBtn" onClick={toggle}><i className="icon-cancel"></i></button>
        <YoutubeEmbed embedId="rokGy0huYEA" />
      </div>
    </section>
  );
};

export default Gallery;
