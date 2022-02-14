import React from "react";
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={styles.imageGalleryItem}>
      <img className={styles.imageGalleryItemImage} src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
