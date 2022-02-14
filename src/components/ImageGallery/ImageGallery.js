import React from "react";
import styles from "./ImageGallery.module.css"; 
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";


const ImageGallery = ({images}) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image => (<ImageGalleryItem key={image.id} image={image}/>)))}
    </ul>
  );
};

export default ImageGallery;
