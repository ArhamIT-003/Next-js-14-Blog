import PostCard from "@/components/PostCard/PostCard";
import styles from "./page.module.css";
import { mockData } from "@/mockData";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      {mockData.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
