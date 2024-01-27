import React from "react";
import styles from "./postcard.module.css";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/blog.jpeg"}
        alt=""
        className={styles.img}
        width={300}
        height={400}
        
      />
      <h1>BLOG</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex
        maxime. Beatae necessitatibus officia deleniti molestias, voluptatibus
        reiciendis unde consectetur!
      </p>
      <div className={styles.btnContainer}>
        <button>View More</button>
      </div>
    </div>
  );
};

export default PostCard;
