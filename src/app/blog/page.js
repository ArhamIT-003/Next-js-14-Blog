import React from "react";
import styles from "./page.module.css";
import PostCard from "@/components/PostCard/PostCard";
import { MotionDiv } from "@/components/MotionDiv/MotionDiv";

const Blog = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className={styles.blog}>
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={variants}
        className={styles.blogBox}
      >
        <PostCard />
        <PostCard />
        <PostCard />
      </MotionDiv>
    </div>
  );
};

export default Blog;
