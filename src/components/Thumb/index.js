import React from "react";
import { Link } from "react-router-dom";

import { Image } from "./ThumbStyles";

const Thumb = ({ movieId, clickable, image }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          {" "}
          <Image src={image}></Image>{" "}
        </Link>
      ) : (
        <Image src={image}></Image>
      )}
    </div>
  );
};

export default Thumb;
