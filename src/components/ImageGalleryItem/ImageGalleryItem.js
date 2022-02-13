import React from "react";
const ImageGalleryItem = ({ img }) => {
  return (
    <li key={img.id} class="gallery-item">
      <img src={img.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
