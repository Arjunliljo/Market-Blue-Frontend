import React, { useEffect, useRef } from "react";
import styles from "./Image.module.css";

function Image({ src, alt = "Image", style }) {
  return (
    <div className={styles.imageContainer} style={style}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Image;
