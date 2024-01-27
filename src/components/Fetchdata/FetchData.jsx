import React from "react";
import classes from "./fetchdata.module.css";
import Image from "next/image";

const FetchData = () => {
  return (
    <div className={classes.blogPosts}>
      <Image
        src={"/blog.jpeg"}
        alt=""
        width={100}
        height={100}
        className={classes.img}
      />
      <h3>Title</h3>
    </div>
  );
};

export default FetchData;
